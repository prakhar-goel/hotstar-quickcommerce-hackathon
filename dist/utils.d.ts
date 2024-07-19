import { AdComponentData, GaGeneric } from './types';
export declare const fetchAdData: (contentId: string) => Promise<any>;
export declare const getVideoElement: () => HTMLVideoElement | undefined;
export declare const getCurrentComponentIndex: (componentsData: AdComponentData[], videoCurrentTimeInSeconds: number) => number;
export declare const resizeComponentImgAccordingToVideo: () => void;
export declare const createGADict: (current_component_data: AdComponentData) => GaGeneric;
