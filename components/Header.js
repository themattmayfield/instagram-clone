import Image from "next/image";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-4 sticky top-0 bg-black z-50">
      <img
        className="object-contain text-white h-10"
        src="/instagram-logo.png"
        alt="Picture of the author"
      />
      <div className="flex items-center space-x-5">
        <BsPlusSquare className="text-xl text-white" />
        <AiOutlineHeart className="text-xl text-white" />
        <AiOutlineMessage className="text-xl text-white" />
      </div>
    </header>
  );
};

export default Header;
