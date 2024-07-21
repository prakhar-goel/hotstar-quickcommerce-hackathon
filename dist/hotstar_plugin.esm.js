import 'platform';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".hotstar_ad_component_wrapper{align-items:self-start;box-sizing:border-box;display:flex;flex-direction:column;font-family:inherit;gap:1rem;height:100%;justify-content:end;left:0;padding:6.5rem 7rem 7.5rem;position:absolute;top:0;width:100%;z-index:100}.hotstar_ad_component_wrapper .or_text{color:#fff;font-size:1rem;font-weight:500;height:10rem;margin-left:auto;margin-right:auto}.hotstar_ad_component_wrapper .shop-button{align-items:center;background-color:#000000ad;border:2px solid transparent;border-radius:8px;color:#fff;display:flex;flex-direction:column;font-weight:500;gap:4px;height:6rem;justify-content:center;padding:10px;transition:all .3s ease;width:6rem}.hotstar_ad_component_wrapper .shop-button:hover{border:2px solid #fff}.hotstar_ad_component_wrapper .shop-button span{font-family:inherit;font-size:.6rem;font-weight:500}.hotstar_ad_component_wrapper .shop-button svg{height:.6rem;width:.6rem}.hotstar_ad_component_wrapper .ad_item_card{align-items:normal;background-color:#000000ad;border:2px solid transparent;border-radius:8px;cursor:pointer;display:flex;flex-direction:row;font-family:inherit;height:6rem;padding:10px;transition:all .3s ease;width:21vw}.hotstar_ad_component_wrapper .ad_item_card:hover{border:2px solid #fff}.hotstar_ad_component_wrapper .ad_item_card img{border-radius:8px;height:auto;-o-object-fit:cover;object-fit:cover;width:30%}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content{display:flex;flex-direction:column;font-family:inherit;padding:0 10px;width:70%}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .footer{align-items:flex-end;display:flex;flex-direction:row;justify-content:space-between;margin-top:auto}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .footer .delivery_time{align-items:center;color:#fff;display:flex;flex-direction:row;font-family:inherit;font-size:.6rem;gap:4px;margin-top:.4rem}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .footer .delivery_time p{font-size:.6rem;font-weight:500}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .delivery_time svg{height:.6rem;width:.6rem}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .price span{font-family:inherit;font-size:.6rem;font-weight:500}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .price .previous_price{color:#ffffffb3;font-family:inherit;font-size:.6rem;text-decoration:line-through}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .price .discount{font-family:inherit;font-size:.6rem}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .title{color:#fff;font-family:inherit;font-size:.8rem;font-weight:500}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .description{color:#ffffffb3;font-family:inherit;font-size:.6rem;margin-top:2px}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .price{color:#fff;font-family:inherit;font-size:.6rem;font-weight:500;margin-top:2px}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .footer .brand{width:4rem}.hotstar_ad_component_wrapper .qr_container{background-color:#000000ad;border-radius:8px;display:flex;flex-direction:column;height:6rem;margin-top:auto;padding:.5rem;width:6rem}.hotstar_ad_component_wrapper .qr_container img{border-radius:8px;height:auto;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:650px){.hotstar_ad_component_wrapper{bottom:20%}@media(orientation:landscape){.maxtap_main>p{font-size:calc(1vw + .2rem)}}@media (orientation:portrait){.maxtap_main>p{font-size:calc(1vw + .3rem)}}}";
styleInject(css_248z);

var LIB_VERSION = "0.1.18";

var config = {
  GoogleAnalyticsCode: 'G-G5RBRDVPCF',
  AdComponentElementId: 'hotstar_ad_plugin',
  DataAttribute: 'data-displaymaxtap',
  classNames: {
    image_wrapper: "maxtap_img_wrapper"
  },
  PrefetchImageTime: 15,
  DataUrl: "https://storage.googleapis.com/publicmaxtap-prod.appspot.com/data"
};
var shoppingBagSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-bag\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path></svg>";
var clockSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline></svg>";

var fetchAdData = function fetchAdData(contentId) {
  return new Promise(function (res, rej) {
    try {
      //* Removing trailing '/' from DataUrl
      //* Fetching ad data
      fetch('https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/data.json', {
        method: 'GET'
      }).then(function (fetch_res) {
        fetch_res.json().then(function (jsonData) {
          //* Sorting according ad data according to start_time
          if (jsonData[contentId]) {
            res(jsonData[contentId].triggerPoints);
          } else {
            rej('No data found');
          }
        });
      })["catch"](function (err) {
        rej(err);
      }); // if (sampleData[contentId]) {
      //   res(sampleData[contentId].triggerPoints);
      // } else {
      //   rej('No data found');
      // }
    } catch (err) {
      rej(err);
    }
  });
}; //* Finds video element according to the given data attribute ex: data-displaymaxtap
// export const getVideoElement = (): HTMLVideoElement | undefined => {
//     const elements = document.querySelectorAll(`[${Config.DataAttribute}]`);
//     for (let i = 0; i < elements.length; i++) {
//         if (elements[i].tagName === 'VIDEO') {
//             return elements[i] as HTMLVideoElement;
//         }
//     }
//     return undefined;
// }

var getVideoElement = function getVideoElement() {
  var elements = document.querySelectorAll("video");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].tagName === 'VIDEO') {
      return elements[i];
    }
  }

  return undefined;
}; //* Returns index of ad according to video current and ad start & end times which need to display

var getCurrentComponentIndex = function getCurrentComponentIndex(componentsData, videoCurrentTimeInSeconds) {
  for (var i = 0; i < componentsData.length; i++) {
    var component = componentsData[i];

    if ( // videoCurrentTimeInSeconds + Config.PrefetchImageTime >= component.starTime &&
    videoCurrentTimeInSeconds >= component.startTime && videoCurrentTimeInSeconds <= component.endTime) {
      return i;
    }
  } //* If no are ads there to play returns -1


  return -1;
}; //* Resize te ad_image according to video width

var resizeComponentImgAccordingToVideo = function resizeComponentImgAccordingToVideo() {
  var video = document.querySelector("[" + config.DataAttribute + "]");
  var ad_image_wrapper = document.querySelector("." + config.classNames.image_wrapper);

  if (document.querySelector('.' + config.classNames.image_wrapper) && window.innerWidth > 740 && video && ad_image_wrapper) {
    var video_width = video.getBoundingClientRect().width;
    var ad_width = 5 / 100 * video_width; //* Min width of ad_image is 50px.

    if (ad_width > 50) {
      ad_image_wrapper.style.width = ad_width + 'px';
    } else {
      ad_image_wrapper.style.width = 50 + 'px';
    }
  }
}; //* Returns object which will send to Google Analytics

var AdComponent = /*#__PURE__*/function () {
  function AdComponent() {
    var _this = this;

    this.currentComponentIndex = -1;
    this.isInitialized = false;

    this.init = function (data) {
      //* Check if the component is already initialized or ad is already present
      if (_this.isInitialized || document.getElementById(config.AdComponentElementId)) {
        console.log('Re-Initializing');
        return;
      }

      if (!data.contentId) {
        console.error('ContentId is missing');
        return;
      }

      try {
        _this.isInitialized = true;
        _this.contentId = data.contentId;
        if (typeof window === 'undefined') throw new ReferenceError("'window.document' is undefined while initializing Ads. Initialize in lifecyle events"); //* Adding google 📈 analytics script tag

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

        _this.video = getVideoElement(); //*Fetching ad data

        fetchAdData(_this.contentId).then(function (data) {
          _this.componentsData = data;

          if (!_this.componentsData) {
            console.error('Ad data is empty!');
            return;
          } //* Adding ad component sibling to video element


          _this.addAdElement(); //* Resizing the ad_image when window resizes


          window.addEventListener('resize', function () {
            resizeComponentImgAccordingToVideo();
          }); // //* Setting initial values
          // for (let i = 0; i < this.componentsData.length; i++) {
          //   this.componentsData[i]['ad_viewed_count'] = 0;
          //   this.componentsData[i]['times_clicked'] = 0;
          //   this.componentsData[i]['is_image_loaded'] = false;
          //   this.componentsData[i]['image_error'] = false;
          // }
          //* Updating ad component for every 1s

          _this.intervalId = setInterval(_this.updateComponent, 300);
        })["catch"](function (err) {
          console.error(err);
        });
      } catch (err) {
        console.error(err);
        _this.isInitialized = false;
      }
    };

    this.updateComponent = function () {
      //* Checking if video element is present
      if (!_this.video) {
        //* Finding for video element until we get;
        _this.video = getVideoElement();
        return;
      }

      if (!_this.adDivComponent) {
        _this.addAdElement();

        console.error('Ad element is not present', {
          method: 'updateComponent'
        });
        return;
      }

      if (!_this.componentsData) {
        console.error('Ad data is empty!', {
          method: 'updateComponent'
        });
        return;
      } //* Checking if ad element is 👬 sibling to video element every time


      if (_this.video.parentElement !== _this.adDivComponent.parentElement) {
        console.error('Ad element is not sibling to video element', {
          method: 'updateComponent'
        });

        _this.adDivComponent.remove();

        if (!_this.addAdElement()) {
          console.error('Ad element is not present', {
            method: 'updateComponent'
          });
          return;
        }
      } //* Finding which ad to play at current video time.


      var newAdComponentIndex = getCurrentComponentIndex(_this.componentsData, Math.floor(_this.video.currentTime));
      console.log('newAdComponentIndex', newAdComponentIndex); //* Displaying no ad.

      if (newAdComponentIndex < 0) {
        _this.removeCurrentAdElement(_this.adDivComponent);

        return;
      }

      _this.currentComponentIndex = newAdComponentIndex; //* Checking if image is already cached else Pre-fetching ⬇️ image before 15 sec of ad.
      // if (
      //   !this.componentsData[this.currentComponentIndex]['is_image_loaded'] &&
      //   !this.componentsData[this.currentComponentIndex]['image_error']
      // ) {
      //   this.prefetchAdImage();
      // }

      if (_this.canCloseAd(Math.floor(_this.video.currentTime)) && _this.adDivComponent.style.display !== 'none') {
        console.log('Removing ad', {
          methodName: 'updateComponent'
        });

        _this.removeCurrentAdElement(_this.adDivComponent);
      }

      if (_this.canAdDisplay(Math.floor(_this.video.currentTime)) && _this.adDivComponent && _this.adDivComponent.style.display === 'none' // !this.componentsData[this.currentComponentIndex]['image_error'] &&
      // this.componentsData[this.currentComponentIndex]['is_image_loaded']
      ) {
        console.log('Displaying ad', {
          methodName: 'updateComponent'
        });

        _this.displayAd();
      }
    }; //* 💉 Inserting ad component inside DOM


    this.addAdElement = function () {
      var _this$parentElement;

      if (!_this.video) {
        return false;
      }

      _this.video.style.width = '100%';
      _this.video.style.height = '100%';
      _this.parentElement = _this.video.parentElement;

      if (!_this.parentElement) {
        return false;
      } //* Adding ad-element 👬 sibling to video element


      _this.parentElement.style.position = 'relative';
      _this.adDivComponent = document.createElement('div');
      _this.adDivComponent.style.display = 'none';
      _this.adDivComponent.id = config.AdComponentElementId;
      _this.adDivComponent.className = 'hotstar_ad_component_wrapper';
      (_this$parentElement = _this.parentElement) == null ? void 0 : _this$parentElement.appendChild(_this.adDivComponent);

      _this.adDivComponent.addEventListener('click', _this.redirectToAd);

      resizeComponentImgAccordingToVideo();
      return true;
    }; //* Loading and caching image 🖼️

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


    this.canAdDisplay = function (currentTimeInSecs) {
      var current_component = _this.componentsData[_this.currentComponentIndex];

      if (current_component.startTime < 0 || !_this.componentsData || !current_component // !current_component.is_image_loaded
      ) {
        return false;
      } //* Checking if video current time is in range ⬅️➡️ of ad start time and ad end time


      if (currentTimeInSecs < _this.componentsData[_this.currentComponentIndex]['endTime'] && currentTimeInSecs > _this.componentsData[_this.currentComponentIndex]['startTime']) {
        return true;
      }

      return false;
    }; //* Checking if video current time is not in range ⬅️➡️ of ad start time and ad end time


    this.canCloseAd = function (currentTimeInSecs) {
      if (!_this.componentsData) return true;

      if (_this.componentsData[_this.currentComponentIndex].startTime < 0) {
        return false;
      }

      if (currentTimeInSecs > _this.componentsData[_this.currentComponentIndex]['endTime'] || currentTimeInSecs < _this.componentsData[_this.currentComponentIndex]['startTime']) {
        return true;
      }

      return false;
    }; //*❎ Removing innerHtml from  main container


    this.removeCurrentAdElement = function (main_component) {
      if (!main_component) return;
      main_component.style.display = 'none';
      main_component.innerHTML = '';
    }; //* Adding innerHtml into main container and making it's display flex


    this.displayAd = function () {
      if (!_this.adDivComponent || !_this.componentsData) {
        console.error('Ad element is not present', {
          method: 'displayAd',
          adDivComponent: _this.adDivComponent,
          componentsData: _this.componentsData
        });
        return;
      }

      if (_this.adDivComponent.style.display === 'flex') {
        return;
      }

      if (_this.currentComponentIndex < 0 || !_this.componentsData[_this.currentComponentIndex]) return;
      var currentAdData = _this.componentsData[_this.currentComponentIndex];

      if (currentAdData.ads.length > 3) {
        currentAdData.ads = currentAdData.ads.slice(0, 3);
      }

      var shopButton = document.createElement('button');
      shopButton.className = 'shop-button';
      shopButton.innerHTML = shoppingBagSvg + "<span>Shop</span>";

      _this.adDivComponent.appendChild(shopButton);

      var _loop = function _loop(i) {
        var _itemCardData$descrip, _itemCardData$descrip2;

        var itemCardData = currentAdData.ads[i];
        var descriptionText = (itemCardData == null ? void 0 : (_itemCardData$descrip = itemCardData.description) == null ? void 0 : _itemCardData$descrip.length) > 70 ? (itemCardData == null ? void 0 : (_itemCardData$descrip2 = itemCardData.description) == null ? void 0 : _itemCardData$descrip2.slice(0, 70)) + '...' : itemCardData.description;
        var item = document.createElement('a');
        var title = itemCardData.title;
        var priceHtml = "";
        var descriptionHtml = "";

        if (!itemCardData.previousPrice) {
          title = itemCardData.title + " (" + itemCardData.price + ")";
          descriptionHtml = "<p class=\"description\">" + descriptionText + "</p>";
        } else {
          priceHtml = "<p class=\"price\">\n          <strong>" + itemCardData.price + "</strong>\n          <span class=\"previous_price\">" + itemCardData.previousPrice + "</span>\n          <span class=\"discount\" style=\"color:" + itemCardData.brandColor + "!important;\">(" + itemCardData.discount + ")</span>\n        </p>";
        }

        item.onmousemove = function () {
          document.querySelectorAll('.qr_container').forEach(function (qr) {
            qr.style.display = 'none';
          });
          document.getElementById("qr_card_" + i).style.display = 'flex';
        };

        item.className = 'ad_item_card';
        item.href = itemCardData.redirectUrl;
        item.target = '_blank';
        item.innerHTML = "\n      <img src=\"" + itemCardData.imageUrl + "\" alt=\"" + itemCardData.title + "\"/>\n      <div class=\"ad_item_card_content\">\n        <h3 class=\"title\">" + title + "</h3>\n        " + descriptionHtml + "\n        " + priceHtml + "\n        <div class=\"footer\">\n          <div class=\"delivery_time\">" + clockSvg + "<p>" + itemCardData.deliveryTime + "</p></div>\n          <img class=\"brand\" src=\"" + itemCardData.brandLogoUrl + "\" alt=\"brand-logo\"/>\n        </div>\n      </div>\n      ";

        _this.adDivComponent.appendChild(item);
      };

      for (var i = 0; i < currentAdData.ads.length; i++) {
        _loop(i);
      } // if (currentAdData.ads.length > 0) {
      //   // Put "Or" text
      //   const orText = document.createElement('p');
      //   orText.className = 'or_text';
      //   orText.innerHTML = 'OR';
      //   this.adDivComponent.appendChild(orText);
      // }


      for (var _i = 0; _i < currentAdData.ads.length; _i++) {
        var adData = currentAdData.ads[_i];

        if (adData.qrData) {
          var qrCard = document.createElement('div');
          qrCard.className = 'qr_container';
          qrCard.id = "qr_card_" + _i;
          qrCard.innerHTML = "<img src=\"" + adData.qrData.qrImageUrl + "\" alt=\"" + adData.qrData.title + "\"/>";
          qrCard.style.display = _i === 0 ? 'flex' : 'none';

          _this.adDivComponent.appendChild(qrCard);
        }
      }

      _this.adDivComponent.style.display = 'flex'; // main_component.innerHTML = component_html;
      // * Incrementing ⬆️️ no of times ad is viewed 👁️.
      // this.componentsData[this.currentComponentIndex]['ad_viewed_count']++;
      // const current_component_data = this.componentsData[
      //   this.currentComponentIndex
      // ];
      //* Triggering 👀 Impression  📈📈 Google Analytics events
      // const ga_impression_data = createGADict(current_component_data);
      // window.gtag('event', 'impression', ga_impression_data);
    }; //* Redirecting to ad🔗link in new tab


    this.redirectToAd = function () {
      try {
        if (!_this.componentsData) {
          return;
        }

        _this.video.pause(); //* Increasing ⬆️ no of times clicked 🖱️
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

    this.parentElement = undefined;
    this.intervalId = undefined;
  } //*❎ Remove ad from DOM, stop updating ad and re-set all class variables


  var _proto = AdComponent.prototype;

  _proto.removeAd = function removeAd() {
    var _document$getElementB;

    //* Stopping loop
    clearInterval(this.intervalId);
    this.isInitialized = false; //* Resetting class variables

    this.adDivComponent = undefined;
    this.currentComponentIndex = 0;
    this.removeCurrentAdElement(document.getElementById(config.AdComponentElementId)); //* Removing element form dom

    (_document$getElementB = document.getElementById(config.AdComponentElementId)) == null ? void 0 : _document$getElementB.remove();
  };

  return AdComponent;
}();
/*
* Instantiate a AdComponent object and exporting it
* So that we can import component anywhere we want and the component will be same throughout the whole project

? Saves us from unnecessary initalization of component
*/


var app = /*#__PURE__*/new AdComponent();

console.log("ads_plugin@" + LIB_VERSION);

export { app as AdComponent };
//# sourceMappingURL=hotstar_plugin.esm.js.map
