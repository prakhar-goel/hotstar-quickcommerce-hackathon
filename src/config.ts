import { Config } from "./types"
const config: Config = {
    GoogleAnalyticsCode: 'G-G5RBRDVPCF',
    AdComponentElementId: 'hotstar_ad_plugin',
    DataAttribute: 'data-displaymaxtap',
    classNames: {
        image_wrapper: "maxtap_img_wrapper",
    },
    PrefetchImageTime: 15,
    DataUrl: "https://storage.googleapis.com/publicmaxtap-prod.appspot.com/data"
}

export const shoppingBagSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`
export const clockSvg =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
export default config;