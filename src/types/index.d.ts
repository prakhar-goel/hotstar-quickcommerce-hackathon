declare global {
  interface Window {
    Maxtap: any;
    gtag: any;
    dataLayer: any[];
  }
}

declare module '*.css';
declare module '*.less';
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

export { default as AdComponentData } from './AdComponentData';
export { default as Config } from './Config';
export { default as GaGeneric } from './GaGeneric';
