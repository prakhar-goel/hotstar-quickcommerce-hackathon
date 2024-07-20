import Config from './config';
import { AdComponentData, GaGeneric } from './types';
import { LIB_VERSION } from './version';
import * as platform from 'platform';

const sampleData = {
  '1000063091': {
    contentId: '1000063091',
    triggerPoints: [
      {
        startTime: 5,
        endTime: 10,
        ads: [
          {
            imageUrl:
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/4/4e30b1ff-dbe8-41d3-b083-d46b9d742ffc_636d161e-7f34-4371-b63c-bf9e3d091a0f.jpg',
            title: 'Veg Cheese Pizza',
            description:
              'Centre loaded with Molten Cheese & topped with Onion, Capsicum, Tomato & Grilled Mushroom *Contains non-edible container under the Pizza',
            price: '₹149',
            previousPrice: '₹299',
            discount: '50% off for Hotstar users',
            redirectUrl: 'https://swiggy.com/search?query=dominos+pizza',
            deliveryTime: '28 mins',
            brandLogoUrl:
              'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/brands/swiggy.png',
            brandColor: '#FC8019',
            qrData: {
              qrImageUrl:
                'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/qr-codes/pizza-swiggy.png',
              title: 'Cheese Volcano Blazing Chicken',
            },
          },
          // {
          //   imageUrl:
          //     'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/oqaxbzhq3wxnyz09upie',
          //   title: 'Mango Shrikhand',
          //   description: 'Our most selling shrikhad with rich kesar taste',
          //   price: '₹100',
          //   previousPrice: '₹199',
          //   discount: '50% off for Hotstar users',
          //   redirectUrl: 'https://www.swiggy.com/search?query=shrikhand',
          //   deliveryTime: '7 mins',
          //   brandColor: '#FC8019',
          //   brandLogoUrl:
          //     'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/brands/swiggy.png',
          //   qrData: {
          //     qrImageUrl:
          //       'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/qr-codes/shrikhand-swiggy.png',
          //     title: 'Mango Shrikhand',
          //   },
          // },
          // {
          //   imageUrl:
          //     'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/d2fe71ba49d3e43af5d99a3ce3ef5a1b',
          //   title: 'Amul Fresh Cream',
          //   description: 'Cook with Sanjeev Kapoor',
          //   price: '₹220',
          //   redirectUrl: 'https://swiggy.com/instamart/search?query=cream',
          //   deliveryTime: '6 mins',
          //   brandColor: '#FC8019',
          //   brandLogoUrl:
          //     'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/brands/swiggy-instamart.png',
          //   qrData: {
          //     qrImageUrl:
          //       'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/qr-codes/amulcream-swiggy.png',
          //     title: 'Amul Fresh Cream',
          //   },
          // },
        ],
      },
      {
        startTime: 12,
        endTime: 15,
        ads: [
          {
            imageUrl:
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/4/4e30b1ff-dbe8-41d3-b083-d46b9d742ffc_636d161e-7f34-4371-b63c-bf9e3d091a0f.jpg',
            title: 'Veg Cheese Pizza',
            description:
              'Centre loaded with Molten Cheese & topped with Onion, Capsicum, Tomato & Grilled Mushroom *Contains non-edible container under the Pizza',
            price: '₹149',
            previousPrice: '₹299',
            discount: '50% off for Hotstar users',
            redirectUrl: 'https://swiggy.com/search?query=dominos+pizza',
            deliveryTime: '28 mins',
            brandLogoUrl:
              'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/brands/swiggy.png',
            brandColor: '#FC8019',
            qrData: {
              qrImageUrl:
                'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/qr-codes/pizza-swiggy.png',
              title: 'Cheese Volcano Blazing Chicken',
            },
          },
          {
            imageUrl:
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/oqaxbzhq3wxnyz09upie',
            title: 'Mango Shrikhand',
            description: 'Our most selling shrikhad with rich kesar taste',
            price: '₹100',
            previousPrice: '₹199',
            discount: '50% off for Hotstar users',
            redirectUrl: 'https://www.swiggy.com/search?query=shrikhand',
            deliveryTime: '7 mins',
            brandColor: '#FC8019',
            brandLogoUrl:
              'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/brands/swiggy.png',
            qrData: {
              qrImageUrl:
                'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/qr-codes/shrikhand-swiggy.png',
              title: 'Mango Shrikhand',
            },
          },
          // {
          //   imageUrl:
          //     'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/d2fe71ba49d3e43af5d99a3ce3ef5a1b',
          //   title: 'Amul Fresh Cream',
          //   description: 'Cook with Sanjeev Kapoor',
          //   price: '₹220',
          //   redirectUrl: 'https://swiggy.com/instamart/search?query=cream',
          //   deliveryTime: '6 mins',
          //   brandColor: '#FC8019',
          //   brandLogoUrl:
          //     'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/brands/swiggy-instamart.png',
          //   qrData: {
          //     qrImageUrl:
          //       'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/qr-codes/amulcream-swiggy.png',
          //     title: 'Amul Fresh Cream',
          //   },
          // },
        ],
      },
      {
        startTime: 17,
        endTime: 25,
        ads: [
          {
            imageUrl:
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/4/4e30b1ff-dbe8-41d3-b083-d46b9d742ffc_636d161e-7f34-4371-b63c-bf9e3d091a0f.jpg',
            title: 'Veg Cheese Pizza',
            description:
              'Centre loaded with Molten Cheese & topped with Onion, Capsicum, Tomato & Grilled Mushroom *Contains non-edible container under the Pizza',
            price: '₹149',
            previousPrice: '₹299',
            discount: '50% off for Hotstar users',
            redirectUrl: 'https://swiggy.com/search?query=dominos+pizza',
            deliveryTime: '28 mins',
            brandLogoUrl:
              'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/brands/swiggy.png',
            brandColor: '#FC8019',
            qrData: {
              qrImageUrl:
                'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/qr-codes/pizza-swiggy.png',
              title: 'Cheese Volcano Blazing Chicken',
            },
          },
          {
            imageUrl:
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/oqaxbzhq3wxnyz09upie',
            title: 'Mango Shrikhand',
            description: 'Our most selling shrikhad with rich kesar taste',
            price: '₹100',
            previousPrice: '₹199',
            discount: '50% off for Hotstar users',
            redirectUrl: 'https://www.swiggy.com/search?query=shrikhand',
            deliveryTime: '7 mins',
            brandColor: '#FC8019',
            brandLogoUrl:
              'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/brands/swiggy.png',
            qrData: {
              qrImageUrl:
                'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/qr-codes/shrikhand-swiggy.png',
              title: 'Mango Shrikhand',
            },
          },
          {
            imageUrl:
              'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/d2fe71ba49d3e43af5d99a3ce3ef5a1b',
            title: 'Amul Fresh Cream',
            description: 'Cook with Sanjeev Kapoor',
            price: '₹220',
            redirectUrl: 'https://swiggy.com/instamart/search?query=cream',
            deliveryTime: '6 mins',
            brandColor: '#FC8019',
            brandLogoUrl:
              'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/brands/swiggy-instamart.png',
            qrData: {
              qrImageUrl:
                'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/qr-codes/amulcream-swiggy.png',
              title: 'Amul Fresh Cream',
            },
          },
        ],
      },
    ],
  },
};

export const fetchAdData = (contentId: string): Promise<any> => {
  return new Promise((res, rej) => {
    try {
      //* Removing trailing '/' from DataUrl
      //* Fetching ad data
      // fetch(
      //   'https://raw.githubusercontent.com/prakhar-goel/hotstar-quickcommerce-hackathon/main/assets/data.json',
      //   {
      //     method: 'GET',
      //     // headers: {
      //     //   'Content-Type': 'application/json',
      //     //   Accept: 'application/json',
      //     // },
      //   }
      // )
      //   .then(fetch_res => {
      //     fetch_res.json().then((jsonData: []) => {
      //       //* Sorting according ad data according to start_time
      //       if (jsonData[contentId]) {
      //         res(jsonData[contentId].triggerPoints);
      //       } else {
      //         rej('No data found');
      //       }
      //     });
      //   })
      //   .catch(err => {
      //     rej(err);
      //   });
      if (sampleData[contentId]) {
        res(sampleData[contentId].triggerPoints);
      } else {
        rej('No data found');
      }
    } catch (err) {
      rej(err);
    }
  });
};
//* Finds video element according to the given data attribute ex: data-displaymaxtap
// export const getVideoElement = (): HTMLVideoElement | undefined => {

//     const elements = document.querySelectorAll(`[${Config.DataAttribute}]`);
//     for (let i = 0; i < elements.length; i++) {
//         if (elements[i].tagName === 'VIDEO') {
//             return elements[i] as HTMLVideoElement;
//         }

//     }
//     return undefined;
// }
export const getVideoElement = (): HTMLVideoElement | undefined => {
  const elements = document.querySelectorAll(`video`);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].tagName === 'VIDEO') {
      return elements[i] as HTMLVideoElement;
    }
  }
  return undefined;
};

//* Returns index of ad according to video current and ad start & end times which need to display
export const getCurrentComponentIndex = (
  componentsData: AdComponentData[],
  videoCurrentTimeInSeconds: number
): number => {
  for (let i = 0; i < componentsData.length; i++) {
    const component = componentsData[i];
    if (
      // videoCurrentTimeInSeconds + Config.PrefetchImageTime >= component.starTime &&
      videoCurrentTimeInSeconds >= component.startTime &&
      videoCurrentTimeInSeconds <= component.endTime
    ) {
      return i;
    }
  }
  //* If no are ads there to play returns -1
  return -1;
};
//* Resize te ad_image according to video width
export const resizeComponentImgAccordingToVideo = () => {
  let video = document.querySelector(`[${Config.DataAttribute}]`);
  let ad_image_wrapper = document.querySelector(
    `.${Config.classNames.image_wrapper}`
  ) as HTMLDivElement;

  if (
    document.querySelector('.' + Config.classNames.image_wrapper) &&
    window.innerWidth > 740 &&
    video &&
    ad_image_wrapper
  ) {
    let video_width = video.getBoundingClientRect().width;
    let ad_width = (5 / 100) * video_width;
    //* Min width of ad_image is 50px.
    if (ad_width > 50) {
      ad_image_wrapper.style.width = ad_width + 'px';
    } else {
      ad_image_wrapper.style.width = 50 + 'px';
    }
  }
};
//* Returns object which will send to Google Analytics
export const createGADict = (
  current_component_data: AdComponentData
): GaGeneric => {
  return {
    //content
    client_id: current_component_data['client_id'],
    client_name: current_component_data['client_name'] || 'null',
    content_id: current_component_data['content_id'] || 'null',
    content_name: current_component_data['content_name'] || 'null',
    content_type: current_component_data['content_type'] || 'null',
    show_name: current_component_data['show_name'] || 'null',
    season: current_component_data['season'] || 'null',
    episode_no: current_component_data['episode_no'] || 'null',
    duration: current_component_data['duration'] || 'null',
    content_language: current_component_data['content_language'] || 'null',

    //advertiser
    advertiser: current_component_data['advertiser'] || 'null',

    caption_regional_language:
      current_component_data['caption_regional_language'] || 'null',
    caption: current_component_data['caption'] || 'null',
    start_time: current_component_data['start_time'] || 'null',
    end_time: current_component_data['end_time'] || 'null',

    //product
    gender: current_component_data['gender'] || 'null',
    product_details: current_component_data['product_details'] || 'null',
    product_article_type: current_component_data['article_type'] || 'null',
    category: current_component_data['category'] || 'null',
    subcategory: current_component_data['subcategory'] || 'null',
    product_link: current_component_data['product_link'] || 'null',
    product_image_link: current_component_data['image_link'] || 'null',
    redirect_link: current_component_data['redirect_link'] || 'null',
    //user
    ad_viewed_count: current_component_data['ad_viewed_count'] || -1,

    // device
    browser_name: platform.name || 'null',
    os_family: platform.os.family || 'null',
    device_manufacturer: platform.manufacturer,
    os_architecture: platform.os.architecture,
    os_version: platform.os.version || 'null',
    screen_resolution: `${screen.width}x${screen.height}`,
    screen_orientation: screen.orientation.type,
    full_screen: document.fullscreenEnabled,

    //Version
    plugin_version: LIB_VERSION,
  };
};
