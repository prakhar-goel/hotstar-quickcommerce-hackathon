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

var css_248z = ".hotstar_ad_component_wrapper{align-items:end;box-sizing:border-box;display:flex;flex-direction:row;height:100%;left:0;padding-bottom:7.5rem;padding-left:2rem;padding-right:2rem;position:absolute;top:0;width:100%;z-index:100}.hotstar_ad_component_wrapper .or_text{color:#fff;font-size:1rem;font-weight:500;margin-bottom:4.2rem;margin-left:auto;margin-right:auto}.hotstar_ad_component_wrapper .shop-button{align-items:center;background-color:transparent;color:#fff;display:flex;font-weight:500;gap:4px;margin-bottom:4.2rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.hotstar_ad_component_wrapper .shop-button span{font-family:inherit;font-size:inherit;font-weight:500}.hotstar_ad_component_wrapper .ad_item_card{align-items:center;background-color:#00000079;border-radius:8px;cursor:pointer;display:flex;flex-direction:row;height:10rem;margin-left:1rem;padding:10px;width:22rem}.hotstar_ad_component_wrapper .ad_item_card img{border-radius:8px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-o-object-fit:cover;object-fit:cover;width:30%}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content{padding:0 10px;width:70%}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .title{color:#fff;font-size:1rem;font-weight:500}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .description{color:#ffffffb3;font-size:.8rem;font-weight:regular;margin-top:2px}.hotstar_ad_component_wrapper .ad_item_card .ad_item_card_content .price{color:#fff;font-size:1rem;font-weight:500;margin-top:1rem}.hotstar_ad_component_wrapper .qr_container{background-color:#00000079;border-radius:8px;display:flex;flex-direction:column;height:20rem;padding:1rem;width:18rem}.hotstar_ad_component_wrapper .qr_container img{border-radius:8px;height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.hotstar_ad_component_wrapper .qr_container p{color:#fff;font-size:1rem;font-weight:500;margin-top:1rem;text-align:center}@media only screen and (max-width:650px){.hotstar_ad_component_wrapper{bottom:20%}@media(orientation:landscape){.maxtap_main>p{font-size:calc(1vw + .2rem)}}@media (orientation:portrait){.maxtap_main>p{font-size:calc(1vw + .3rem)}}}";
styleInject(css_248z);

var LIB_VERSION = "0.1.18";

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

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

var sampleData = {
  onam: {
    adsData: [{
      startTime: 5,
      endTime: 20,
      items: [{
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/4/4e30b1ff-dbe8-41d3-b083-d46b9d742ffc_636d161e-7f34-4371-b63c-bf9e3d091a0f.jpg',
        redirectUrl: 'https://www.swiggy.com/city/delhi/dominos-pizza-100-ft-road-chhatarpur-rest239854',
        title: 'Cheese Volcano Farmhouse',
        description: 'Centre loaded with Molten Cheese & topped with Onion, Capsicum, Tomato & Grilled Mushroom *Contains non-edible container under the Pizza',
        price: '₹299'
      }, {
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/4/4e30b1ff-dbe8-41d3-b083-d46b9d742ffc_636d161e-7f34-4371-b63c-bf9e3d091a0f.jpg',
        redirectUrl: 'https://www.swiggy.com/city/delhi/dominos-pizza-100-ft-road-chhatarpur-rest239854',
        title: 'Cheese Volcano Farmhouse',
        description: 'Centre loaded with Molten Cheese & topped with Onion, Capsicum, Tomato & Grilled Mushroom *Contains non-edible container under the Pizza',
        price: '₹299'
      }, {
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/4/4e30b1ff-dbe8-41d3-b083-d46b9d742ffc_636d161e-7f34-4371-b63c-bf9e3d091a0f.jpg',
        redirectUrl: 'https://www.swiggy.com/city/delhi/dominos-pizza-100-ft-road-chhatarpur-rest239854',
        title: 'Cheese Volcano Farmhouse',
        description: 'Centre loaded with Molten Cheese & topped with Onion, Capsicum, Tomato & Grilled Mushroom *Contains non-edible container under the Pizza',
        price: '₹299'
      }],
      qrData: {
        qrImageUrl: 'https://images.squarespace-cdn.com/content/v1/5d3f241fa4e0350001fa20d5/1636491460338-AIZAXV2978MGIDQE0GT7/qr-code.png?format=2500w',
        title: 'Cheese Volcano Blazing Chicken'
      }
    }]
  }
};
var fetchAdData = function fetchAdData(contentId) {
  // return new Promise((res, rej) => {
  //   try {
  //     //* Removing trailing '/' from DataUrl
  //     const data_url: string =
  //       Config.DataUrl[Config.DataUrl.length - 1] !== '/'
  //         ? Config.DataUrl
  //         : Config.DataUrl.slice(0, Config.DataUrl.length - 2);
  //     if (!file_name.includes('.json')) {
  //       file_name += '.json';
  //     }
  //     //* Fetching ad data
  //     fetch(`${data_url}/${file_name}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     })
  //       .then(fetch_res => {
  //         fetch_res.json().then((json_data: []) => {
  //           //* Sorting according ad data according to start_time
  //           json_data.sort((a, b) => {
  //             if (parseInt(a['start_time']) < parseInt(b['start_time'])) {
  //               return -1;
  //             }
  //             if (parseInt(a['start_time']) > parseInt(b['start_time'])) {
  //               return 1;
  //             }
  //             return 0;
  //           });
  //           res(json_data);
  //         });
  //       })
  //       .catch(err => {
  //         rej(err);
  //       });
  //   } catch (err) {
  //     rej(err);
  //   }
  // });
  return new Promise(function (res, rej) {
    if (sampleData[contentId]) {
      console.log('adsData', sampleData[contentId].adsData);
      res(sampleData[contentId].adsData);
    } else {
      console.log(sampleData, contentId);
      console.log(sampleData[contentId]);
      rej('No data found');
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

          _this.intervalId = setInterval(_this.updateComponent, 1000);
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

      if (_this.adDivComponent.style.display === 'flex') return;
      if (_this.currentComponentIndex < 0 || !_this.componentsData[_this.currentComponentIndex]) return;
      var currentAdData = _this.componentsData[_this.currentComponentIndex];

      if (currentAdData.items.length > 3) {
        currentAdData.items = currentAdData.items.slice(0, 3);
      }

      var shopButton = document.createElement('button');
      shopButton.className = 'shop-button';
      shopButton.innerHTML = shoppingBagSvg + "<span>Shop</span>";

      _this.adDivComponent.appendChild(shopButton);

      for (var _iterator = _createForOfIteratorHelperLoose(currentAdData.items), _step; !(_step = _iterator()).done;) {
        var itemCardData = _step.value;
        var description = itemCardData.description.length > 70 ? itemCardData.description.slice(0, 70) + '...' : itemCardData.description;
        var item = document.createElement('a');
        item.className = 'ad_item_card';
        item.href = itemCardData.redirectUrl;
        item.target = '_blank';
        item.innerHTML = "\n      <img src=\"" + itemCardData.imageUrl + "\" alt=\"" + itemCardData.title + "\"/>\n      <div class=\"ad_item_card_content\">\n        <h3 class=\"title\">" + itemCardData.title + "</h3>\n        <p class=\"description\">" + description + "</p>\n        <p class=\"price\">" + itemCardData.price + "</p>\n      </div>\n      ";

        _this.adDivComponent.appendChild(item);
      }

      if (currentAdData.items.length > 0) {
        // Put "Or" text
        var orText = document.createElement('p');
        orText.className = 'or_text';
        orText.innerHTML = 'OR';

        _this.adDivComponent.appendChild(orText);
      }

      if (currentAdData.qrData) {
        var qrCard = document.createElement('div');
        qrCard.className = 'qr_container';
        qrCard.innerHTML = "\n      <img src=\"" + currentAdData.qrData.qrImageUrl + "\" alt=\"" + currentAdData.qrData.title + "\"/>\n      <p>" + currentAdData.qrData.title + "</p>\n      ";

        _this.adDivComponent.appendChild(qrCard);
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
