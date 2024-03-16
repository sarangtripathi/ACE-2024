import React from 'react'
import { useEffect, useState } from "react";
import Porfile from "../assets/Logo2.jpg";
import Project1 from "../assets/Photo.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/nss.jpg";
import Project4 from "../assets/night.jpg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import ArrowDown from "../assets/arrow-down.svg";

import './Home.css'
const Home = () =>  {
    const [showFirstHeading, setShowFirstHeading] = useState(true);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setShowFirstHeading((prevShowFirstHeading) => !prevShowFirstHeading);
      }, 5000); // Change interval as needed
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    
    const [scrolling, setScrolling] = useState(false);
  
    const onPageScroll = () => {
      if(window.pageYOffset > 200) {
        setScrolling(true)
      } else {
        setScrolling(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", onPageScroll)
      return() => {
        window.removeEventListener("scroll", onPageScroll)
      }
    }, [])
    useEffect(() => {
      // JavaScript code here
      window.embeddedChatbotConfig = {
        chatbotId: "IcJ2nD_LZWNtxaAWjbN_p",
        domain: "www.chatbase.co"
      };
  
      const script = document.createElement('script');
      script.src = "https://www.chatbase.co/embed.min.js";
      script.chatbotId = "IcJ2nD_LZWNtxaAWjbN_p";
      script.domain = "www.chatbase.co";
      script.defer = true;
      document.body.appendChild(script);
  
      // Clean up the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div className="w-full m-auto relative">
        <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20  shadow-lg  shadow-gray-700`} id="home">
          <div className="container m-auto px-4 py-6 w-full bg-black">
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
              <div>
                <h1 className="font-semibold text-3xl  ">Feeding Media</h1>
              </div>
              <div>
                <ul className="flex gap-4">
                  <li>
                    <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                      Food Distribution
                    </a>
                  </li>
                  <li>
                    <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                      Login/signup
                    </a>
                  </li>
                  <li>
                    <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main className="relative mt-28">
          {/* Intro/Banner section */}
          <section>
            <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
              <div>
                <h2 className="font-bold text-4xl">Hello, We are Feeding Media,</h2>
                {showFirstHeading ? (
                <h2 className="font-bold text-4xl mt-1 gradiant-text">Reduce Food Wastage</h2>
              ) : (
                <h2 className="font-bold text-4xl mt-1 gradiant-text">Feed the Nation</h2>
              )}


                <div>
                  <p className="mt-4 text-gray-400">
                    Feeding Media Is a digital platform which fosters food distribution and aims to feed the entrie Nation with minimize food wastage , Join us Today !
                  </p>
                  <button className="px-8 bg-gradient-to-r from-fuchsia-200 to-indigo-600  shadow-md py-3 mt-5  font-semibold text-xl rounded-lg bg-white">
                    Join Us 
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                  <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-xl" />
                </div>
              </div>
            </div>
          </section>
          {/* Projects section */}
          <section id="projects">
            <div className="container m-auto px-4 sm:py-12">
              <h2 className="text-2xl font-semibold">Food Distribution Drives</h2>
              <div className="flex flex-col sm:flex-row gap-10 mt-11">
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project1} className="w-full h-auto" />
                  <h3 className="text-2xl font-semibold mt-8">
                    Food Distribution 
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Thakur College of Engineering , Kandivali East Mumbai 400101
                  </p>
                  {/* <div className="flex mt-12 gap-2">
                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </div> */}
                </div>
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project2} className="w-full h-auto" />
                  <h3 className="text-2xl font-semibold mt-8">
                    Food Distribution
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Malvani , Malad East Mumbai
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-10 mt-11">
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project3} className="w-full h-auto" />
                  <h3 className="text-2xl font-semibold mt-8">
                    NSS Volunteer Collaboration
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Meenatai Thakrey Hall , Mira Road East , Mumbai 401105
                  </p>
                  {/* <div className="flex mt-12 gap-2">
                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </div> */}
                </div>
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project4} className="w-full h-auto" />
                  <h3 className="text-2xl font-semibold mt-8">
                    Night Street Food Distribution
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Dadar West ,  Mumbai
                  </p>
                </div>
              </div>

            </div>
          </section>
          {/* Technoglies section */}
          <section className="py-10" id="technologies">
            <div className="container m-auto px-4">
              <h2 className="text-2xl font-semibold">Login / Signup </h2>
              {/* <div className="mt-14">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">HTML</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">
                      JavaScript, TypeScript, JQuery
                    </h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">UI design in Figma</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Angular</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">React</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">React Native</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
              </div> */}
            </div>
          </section>
          {/* Additional skills section */}
          <section>
            <div className="container m-auto px-4 py-14">
              <h2 className="text-2xl font-semibold">
                Extensive Work Across
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Mumbai
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Banglore
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    New Delhi
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Tamil Nadu
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Kerela
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Harayana
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Jaipur
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
            <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
              <p>
                Founded in 2015, our platform connects volunteers and organizations across India to distribute food efficiently and effectively. 
                We strive to tackle food wastage and ensure that surplus food reaches those in need.
              </p>
            </div>
            <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
              <p>
                In our second year, we expanded our network of volunteers and organizations, enabling us to reach more communities and make a greater impact.
              </p>
            </div>
            <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
              <p>
                Continued growth and development led us to implement advanced technologies and strategies for food distribution, streamlining our processes and increasing efficiency.
              </p>
            </div>
            <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
              <p>
                Today, we are a leading platform in the fight against hunger, connecting thousands of volunteers and organizations nationwide to distribute food and make a positive difference in the lives of millions.
              </p>
            </div>
          </div>
      </div>

          </section>
        </main>
        <footer>
          <div className="container m-auto flex justify-between px-4 py-6">
            <div>
              <p className="text-gray-300 text-sm">Copyright @ 2024 , ACE Hackathon BitByBit</p>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a>
                    <img src={Facebook} className="w-5" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={LinkedIn} className="w-5" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Instagram} className="w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {
          scrolling && (
            <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
              window.scrollTo(0,0);
            }}>
              <img src={ArrowDown} />
            </button>
          )
        }

      </div>
    );
  }

export default Home
