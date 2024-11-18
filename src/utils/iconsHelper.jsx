import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const iconMap = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaTwitter,
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
