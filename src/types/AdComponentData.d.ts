export default interface AdComponentData {
  startTime: number;
  endTime: number;
  ads: {
    imageUrl: string;
    redirectUrl: string;
    title: string;
    description: string;
    price: string;
    discount?: string;
    previousPrice?: string;
    deliveryTime: string;
    brandLogoUrl: string;
    brandColor:string
  }[];
  qrData: {
    qrImageUrl: string;
    title: string;
  };
}
