import { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { RiCommunityFill } from 'react-icons/ri';

const VolSidebar = ({children}) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Calendar", link: "/orghome" },
    { title: "Organisation", src: "add", link: "/orghome" },
    { title: "Community", src: "comm", link: "/orghome" },


  // { title: "Explore", src: "Chart", gap: true, link: "/orghistory" },
  //   { title: "History", src: "Folder", link: "/files" },
  ];

  return (
    <>
    <div className="flex -mt-18">
      <div
        className={` ${
          open ? "w-70" : "w-20 "
        } bg-indigo-600 h-screen p-5  pt-8 relative duration-300 border-2`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-indigo-900
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Feeding Media
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black  text-gray-300 text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-white text-black"
              } `}
            >
            {/* <Link to={Menu.link}> */}
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>

      {children}

    </div>
    </>
  );
};
export default VolSidebar;
