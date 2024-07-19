declare class AdComponent {
    private video?;
    private parentElement;
    private currentComponentIndex;
    private componentsData?;
    private contentId;
    private adDivComponent?;
    private intervalId?;
    private isInitialized;
    constructor();
    init: (data: {
        contentId: string;
    }) => void;
    private updateComponent;
    private addAdElement;
    private canAdDisplay;
    private canCloseAd;
    private removeCurrentAdElement;
    private displayAd;
    private redirectToAd;
    removeAd(): void;
}
declare const _default: AdComponent;
export default _default;
