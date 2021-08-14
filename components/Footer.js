import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { BiMessageAltMinus } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";

const Footer = ({ update }) => {
  const router = useRouter();
  console.log(router);
  const footerItems = [
    {
      icon: (
        <AiFillHome
          // onClick={() => {
          //   router.pathname == "/"
          //     ? update != null
          //       ? update()
          //       : null
          //     : router.push("/");
          // }}
          className="text-xl cursor-pointer"
        />
      ),
      label: "Home",
      link: "/",
    },
    {
      icon: <FiSearch className="text-xl cursor-pointer" />,
      label: "Discover",
      link: "/",
    },
    {
      icon: <BsPlayFill className="text-2xl cursor-pointer" />,
      label: "",
      link: "/",
    },
    {
      icon: <IoBagHandleOutline className="text-xl cursor-pointer" />,
      label: "Inbox",
      link: "/",
    },
    {
      icon: (
        <div className="flex flex-col items-center space-y-1">
          <Default />
          <div className="bg-red-600 w-1 h-1 rounded-full" />
        </div>
      ),
      label: "Profile",
      link: "/",
    },
  ];
  return (
    <>
      <footer className="flex bg-black items-start pt-2 justify-between w-full h-16 text-white text-xs px-6 border-t-[.01px] border-[#222423]">
        {footerItems.map((item, index) => (
          <IconContainer {...item} />
        ))}
      </footer>
    </>
  );
};

const IconContainer = ({ icon, label, link }) => (
  <div>
    <div className="flex items-center justify-center">{icon}</div>
  </div>
);

export default Footer;

const Default = () => (
  <div className="">
    <img
      src={`/Headshots/me.png`}
      className="rounded-full w-5 h-5 object-cover "
    />
  </div>
);
