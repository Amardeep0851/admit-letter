import { phoneNumberWithouthyphen } from "@/lib/constant";
export const phone = phoneNumberWithouthyphen;

export const handleWhatsappClick = () => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };