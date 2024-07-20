import Config, { clockSvg, shoppingBagSvg } from './config';
import { AdComponentData } from './types';
import {
  fetchAdData,
  getCurrentComponentIndex,
  getVideoElement,
  // createGADict,
  resizeComponentImgAccordingToVideo,
} from './utils';

class AdComponent {
  private video?: HTMLVideoElement;
  private parentElement: HTMLElement | null; //*  Parent element of video element
  private currentComponentIndex = -1;
  private componentsData?: Array<AdComponentData>;
  private contentId: string;
  private adDivComponent?: HTMLDivElement; //* Actual ad component (container📦) where ad_text and ad_image goes
  private intervalId?: any;
  private isInitialized = false;
  constructor() {
    this.parentElement = undefined;
    this.intervalId = undefined;
  }

  public init = (data: { contentId: string }) => {
    //* Check if the component is already initialized or ad is already present
    if (
      this.isInitialized ||
      document.getElementById(Config.AdComponentElementId)
    ) {
      console.log('Re-Initializing');
      return;
    }
    if (!data.contentId) {
      console.error('ContentId is missing');
      return;
    }
    try {
      this.isInitialized = true;
      this.contentId = data.contentId;

      if (typeof window === 'undefined')
        throw new ReferenceError(
          "'window.document' is undefined while initializing Ads. Initialize in lifecyle events"
        );

      //* Adding google 📈 analytics script tag
      /*   if (!document.getElementById('ga4-script')) {
        const ga_script_element = document.createElement('script');
        ga_script_element.src = `https://www.googletagmanager.com/gtag/js?id=${Config.GoogleAnalyticsCode}`;
        ga_script_element.async = true;
        ga_script_element.id = 'ga4-script';

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
          window.dataLayer.push(arguments);
        };

        ga_script_element.addEventListener('load', () => {
          window.gtag('js', new Date());
          window.gtag('config', Config.GoogleAnalyticsCode);
        });

        const head_tag = document.querySelector('head');
        head_tag?.appendChild(ga_script_element);
      } */

      this.video = getVideoElement();

      //*Fetching ad data
      fetchAdData(this.contentId)
        .then(data => {
          this.componentsData = data;
          if (!this.componentsData) {
            console.error('Ad data is empty!');
            return;
          }

          //* Adding ad component sibling to video element
          this.addAdElement();

          //* Resizing the ad_image when window resizes
          window.addEventListener('resize', () => {
            resizeComponentImgAccordingToVideo();
          });
          // //* Setting initial values
          // for (let i = 0; i < this.componentsData.length; i++) {
          //   this.componentsData[i]['ad_viewed_count'] = 0;
          //   this.componentsData[i]['times_clicked'] = 0;
          //   this.componentsData[i]['is_image_loaded'] = false;
          //   this.componentsData[i]['image_error'] = false;
          // }
          //* Updating ad component for every 1s
          this.intervalId = setInterval(this.updateComponent, 300);
        })
        .catch(err => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
      this.isInitialized = false;
    }
  };

  private updateComponent = () => {
    //* Checking if video element is present
    if (!this.video) {
      //* Finding for video element until we get;
      this.video = getVideoElement();
      return;
    }

    if (!this.adDivComponent) {
      this.addAdElement();
      console.error('Ad element is not present', {
        method: 'updateComponent',
      });
      return;
    }
    if (!this.componentsData) {
      console.error('Ad data is empty!', {
        method: 'updateComponent',
      });
      return;
    }

    //* Checking if ad element is 👬 sibling to video element every time
    if (this.video.parentElement !== this.adDivComponent.parentElement) {
      console.error('Ad element is not sibling to video element', {
        method: 'updateComponent',
      });
      this.adDivComponent.remove();
      if (!this.addAdElement()) {
        console.error('Ad element is not present', {
          method: 'updateComponent',
        });
        return;
      }
    }

    //* Finding which ad to play at current video time.
    const newAdComponentIndex = getCurrentComponentIndex(
      this.componentsData,
      Math.floor(this.video.currentTime)
    );
    console.log('newAdComponentIndex', newAdComponentIndex);
    //* Displaying no ad.
    if (newAdComponentIndex < 0) {
      this.removeCurrentAdElement(this.adDivComponent);
      return;
    }
    this.currentComponentIndex = newAdComponentIndex;
    //* Checking if image is already cached else Pre-fetching ⬇️ image before 15 sec of ad.
    // if (
    //   !this.componentsData[this.currentComponentIndex]['is_image_loaded'] &&
    //   !this.componentsData[this.currentComponentIndex]['image_error']
    // ) {
    //   this.prefetchAdImage();
    // }

    if (
      this.canCloseAd(Math.floor(this.video.currentTime)) &&
      this.adDivComponent.style.display !== 'none'
    ) {
      console.log('Removing ad', {
        methodName: 'updateComponent',
      });
      this.removeCurrentAdElement(this.adDivComponent);
    }
    if (
      this.canAdDisplay(Math.floor(this.video.currentTime)) &&
      this.adDivComponent &&
      this.adDivComponent.style.display === 'none'
      // !this.componentsData[this.currentComponentIndex]['image_error'] &&
      // this.componentsData[this.currentComponentIndex]['is_image_loaded']
    ) {
      console.log('Displaying ad', {
        methodName: 'updateComponent',
      });
      this.displayAd();
    }
  };

  //* 💉 Inserting ad component inside DOM
  private addAdElement = (): boolean => {
    if (!this.video) {
      return false;
    }
    this.video.style.width = '100%';
    this.video.style.height = '100%';
    this.parentElement = this.video.parentElement;
    if (!this.parentElement) {
      return false;
    }
    //* Adding ad-element 👬 sibling to video element

    this.parentElement.style.position = 'relative';
    this.adDivComponent = document.createElement('div');
    this.adDivComponent.style.display = 'none';
    this.adDivComponent.id = Config.AdComponentElementId;
    this.adDivComponent.className = 'hotstar_ad_component_wrapper';
    this.parentElement?.appendChild(this.adDivComponent);
    this.adDivComponent.addEventListener('click', this.redirectToAd);
    resizeComponentImgAccordingToVideo();
    return true;
  };
  //* Loading and caching image 🖼️
  /*   private prefetchAdImage = () => {
    if (!this.componentsData) {
      return;
    }
    let img = new Image();
    this.componentsData[this.currentComponentIndex]['is_image_loaded'] = true;
    img.onerror = () => {
      this.componentsData[this.currentComponentIndex]['image_error'] = true;
    };
    img.src = this.componentsData[this.currentComponentIndex]['image_link'];
  }; */

  //* Checks if ad can show up at given video time
  private canAdDisplay = (currentTimeInSecs: number): boolean => {
    const current_component = this.componentsData[this.currentComponentIndex];

    if (
      current_component.startTime < 0 ||
      !this.componentsData ||
      !current_component
      // !current_component.is_image_loaded
    ) {
      return false;
    }

    //* Checking if video current time is in range ⬅️➡️ of ad start time and ad end time
    if (
      currentTimeInSecs <
        this.componentsData[this.currentComponentIndex]['endTime'] &&
      currentTimeInSecs >
        this.componentsData[this.currentComponentIndex]['startTime']
    ) {
      return true;
    }
    return false;
  };

  //* Checking if video current time is not in range ⬅️➡️ of ad start time and ad end time

  private canCloseAd = (currentTimeInSecs: number): boolean => {
    if (!this.componentsData) return true;
    if (this.componentsData[this.currentComponentIndex].startTime < 0) {
      return false;
    }
    if (
      currentTimeInSecs >
        this.componentsData[this.currentComponentIndex]['endTime'] ||
      currentTimeInSecs <
        this.componentsData[this.currentComponentIndex]['startTime']
    ) {
      return true;
    }
    return false;
  };
  //*❎ Removing innerHtml from  main container
  private removeCurrentAdElement = (main_component: HTMLDivElement) => {
    if (!main_component) return;
    main_component.style.display = 'none';
    main_component.innerHTML = '';
  };

  //* Adding innerHtml into main container and making it's display flex
  private displayAd = (): void => {
    if (!this.adDivComponent || !this.componentsData) {
      console.error('Ad element is not present', {
        method: 'displayAd',
        adDivComponent: this.adDivComponent,
        componentsData: this.componentsData,
      });
      return;
    }
    if (this.adDivComponent.style.display === 'flex') return;
    if (
      this.currentComponentIndex < 0 ||
      !this.componentsData[this.currentComponentIndex]
    )
      return;

    const currentAdData = this.componentsData[this.currentComponentIndex];
    if (currentAdData.ads.length > 3) {
      currentAdData.ads = currentAdData.ads.slice(0, 3);
    }

    const shopButton = document.createElement('button');
    shopButton.className = 'shop-button';
    shopButton.innerHTML = `${shoppingBagSvg}<span>Shop</span>`;
    this.adDivComponent.appendChild(shopButton);

    for (const itemCardData of currentAdData.ads) {
      const descriptionText =
        itemCardData.description.length > 70
          ? itemCardData.description.slice(0, 70) + '...'
          : itemCardData.description;
      const item = document.createElement('a');

      let title = itemCardData.title;
      let priceHtml = ``;
      let descriptionHtml = ``;
      if (!itemCardData.previousPrice) {
        title = `${itemCardData.title} (${itemCardData.price})`;
        descriptionHtml = `<p class="description">${descriptionText}</p>`;
      } else {
        priceHtml = `<p class="price">
          <strong>${itemCardData.price}</strong>
          <span class="previous_price">${itemCardData.previousPrice}</span>
          <span class="discount" style="color:${itemCardData.brandColor}!important;">(${itemCardData.discount})</span>
        </p>`;
      }
      item.className = 'ad_item_card';
      item.href = itemCardData.redirectUrl;
      item.target = '_blank';
      item.innerHTML = `
      <img src="${itemCardData.imageUrl}" alt="${itemCardData.title}"/>
      <div class="ad_item_card_content">
        <h3 class="title">${title}</h3>
        ${descriptionHtml}
        ${priceHtml}
        <div class="delivery_time">
        ${clockSvg}
        <p>${itemCardData.deliveryTime}</p>
        </div>
        <img class="brand" src="${itemCardData.brandLogoUrl}" alt="brand-logo"/>
      </div>
      `;
      this.adDivComponent.appendChild(item);
    }

    if (currentAdData.ads.length > 0) {
      // Put "Or" text
      const orText = document.createElement('p');
      orText.className = 'or_text';
      orText.innerHTML = 'OR';
      this.adDivComponent.appendChild(orText);
    }

    if (currentAdData.qrData) {
      const qrCard = document.createElement('div');
      qrCard.className = 'qr_container';
      qrCard.innerHTML = `
      <img src="${currentAdData.qrData.qrImageUrl}" alt="${currentAdData.qrData.title}"/>
      <p>${currentAdData.qrData.title}</p>
      `;
      this.adDivComponent.appendChild(qrCard);
    }
    this.adDivComponent.style.display = 'flex';
    // main_component.innerHTML = component_html;

    // * Incrementing ⬆️️ no of times ad is viewed 👁️.
    // this.componentsData[this.currentComponentIndex]['ad_viewed_count']++;
    // const current_component_data = this.componentsData[
    //   this.currentComponentIndex
    // ];

    //* Triggering 👀 Impression  📈📈 Google Analytics events
    // const ga_impression_data = createGADict(current_component_data);
    // window.gtag('event', 'impression', ga_impression_data);
  };

  //* Redirecting to ad🔗link in new tab
  private redirectToAd = (): void => {
    try {
      if (!this.componentsData) {
        return;
      }
      this.video.pause();
      //* Increasing ⬆️ no of times clicked 🖱️
      // this.componentsData[this.currentComponentIndex]['times_clicked']++;
      // const current_component_data = this.componentsData[
      //   this.currentComponentIndex
      // ];
      // var ga_click_data = createGADict(current_component_data);
      // ga_click_data['event_category'] = 'click';
      // ga_click_data['time_to_click'] = Math.floor(
      //   this.video.currentTime -
      //     this.componentsData[this.currentComponentIndex]['start_time']
      // );
      // ga_click_data['times_clicked'] = current_component_data['times_clicked'];
      //* Triggering 🖱️ Click  📈📈 Google Analytics events
      // window.gtag('event', 'click', ga_click_data);
      // window.open(
      //   this.componentsData![this.currentComponentIndex].redirect_link,
      //   '_blank'
      // );
    } catch (err) {
      console.error(err);
    }
  };

  //*❎ Remove ad from DOM, stop updating ad and re-set all class variables
  public removeAd(): void {
    //* Stopping loop
    clearInterval(this.intervalId);

    this.isInitialized = false;
    //* Resetting class variables
    this.video,
      this.parentElement,
      this.componentsData,
      this.intervalId,
      (this.adDivComponent = undefined);
    this.currentComponentIndex = 0;
    this.removeCurrentAdElement(
      document.getElementById(Config.AdComponentElementId) as HTMLDivElement
    );
    //* Removing element form dom
    document.getElementById(Config.AdComponentElementId)?.remove();
  }
}
/* 
* Instantiate a AdComponent object and exporting it
* So that we can import component anywhere we want and the component will be same throughout the whole project

? Saves us from unnecessary initalization of component
*/
export default new AdComponent();
