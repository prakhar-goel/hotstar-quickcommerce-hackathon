export default interface AdComponentData {
  // is_image_loaded: boolean;
  // image_error:boolean;
  // start_time: number;
  // end_time: number;
  // image_link: string;
  // redirect_link: string;
  // caption_regional_language: string;
  // client_name: string;
  // content_name: string;
  // duration: number;
  // ad_viewed_count: number;
  // times_clicked: number;
   startTime: number;
  endTime: number;
  items: {
    imageUrl: string;
    redirectUrl: string;
    title: string;
    description: string;
    price: string;
  }[];
  qrData: {
    qrImageUrl: string;
    title: string;
  };
}
