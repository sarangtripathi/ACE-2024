// import React from 'react'
// import { useNavigate } from "react-router-dom";
// // import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function OrgSidebar({ selected }) {
//     const navigate = useNavigate();
//   return (
//     <>
//     <div className=" h-[73px] bg-[#EBEAF2]">
//       <div className="flex flex-row items-center">
//         <div className="border-r-2 bg-[#EBEAF2]">
//           <img  alt='image' className=" my-3 mx-4 rounded-full h-12 w-12 "></img>
//         </div>
//         <div className="ml-5 text-xl">
//         {/* <FontAwesomeIcon icon={faArrowLeft} className="mr-3 icon-lg"  style={{cursor:"pointer"}}/> */}
//         </div>
//       </div>
//     </div>
//     <div className="w-[159px] h-full">
//       <div
//         className="bg-[#EBEAF2] w-full"
//         style={{ height: "calc(100vh - 74px)" }}
//       >
//         <div className="h-1/2 flex flex-col items-center justify-evenly">
//           <button
//             className={
//               selected === "profile"
//                 ? "bg-[#C4C4DF] rounded px-3 py-3"
//                 : "px-3 py-3"
//             }
//             // onClick={() => navigate("/profile/student")}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="w-6 h-6 flex"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//               />
//             </svg>
            
//           </button>

//           <button
//             className={
//               selected === "all"
//                 ? "bg-[#C4C4DF] py-3 px-3 rounded"
//                 : "py-3 px-3"
//             }
//             onClick={() => navigate("/schemes/all")}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="w-6 h-6 "
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
//               />
//             </svg>
//           </button>
//           <button
//             className={
//               selected === "eligible"
//                 ? "bg-[#C4C4DF] py-3 px-3 rounded"
//                 : "py-3 px-3"
//             }
//             // onClick={() => navigate("/schemes/eligible")}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="w-6 h-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </button>
//           <button
//             className={
//               selected === "notification"
//                 ? "bg-[#C4C4DF] py-3 px-3 rounded"
//                 : "py-3 px-3"
//             }
//             // onClick={() => navigate("/notification")}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="w-6 h-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
//               />
//             </svg>
//           </button>
//           { selected }
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default OrgSidebar


import { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const OrgSidebar = ({children}) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Calendar", link: "/orghome" },
    { title: "Add Items", src: "add (3)", link: "/orgadd" },
    { title: "Expired Stock", src: "Calendar", link: "/schedule" },
    { title: "History", src: "Chart", gap: true, link: "/orghistory" },
    { title: "Volunteers", src: "Folder", link: "/files" },
  ];

  return (
    <>
    <div className="flex -mt-18">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-indigo-600 h-screen p-5  pt-8 relative duration-300 border-2`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-indigo-900
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 mr-2 ${
              open && "rotate-[360deg]"
            }`}
          />
          <div
            className={`text-white items-center text-center origin-left font-medium text-3xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Feeding Media
          </div>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.link}>
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-white hover:text-black hover:font-semibold text-gray-300 text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} `}
            >
            
            <div className="flex">
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left ml-2 duration-200`}>
                {Menu.title}
              </span>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      </div>

      {children}

    </div>
    </>
  );
};
export default OrgSidebar;