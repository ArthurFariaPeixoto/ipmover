import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";

import { MdEmail, MdLocationOn } from "react-icons/md";

const iconMap = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaTwitter,
  email: MdEmail,
  location: MdLocationOn,
  phone: FaPhoneAlt,
};

const Icon = ({ name, ...props }) => {
  const DynamicComponent = iconMap[name];
  if (!DynamicComponent) {
    console.warn(`Icone '${name}' não encontrado.`);
    return null;
  }
  return <DynamicComponent {...props} />;
};

export default Icon;
