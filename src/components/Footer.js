import { useContext } from "react";
import UserContext from "../Utilis/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-0 m-0 bg-amber-50 border-[0.5px]  animate-pulse h-10 flex items-center justify-center sticky shadow-2xl drop-shadow-2xl">
      This site is developed with ❤️ by {user.name}
    </div>
  );
};

export default Footer;
