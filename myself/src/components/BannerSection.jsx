import React, { useEffect, useRef } from "react";
import Prakash from "../assets/Prakash.jpg";
import BannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";

const BannerSection = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Back-end developer",
        "Front-end developer",
        "Full-stack web Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 20,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BannerBackground})`,
          backgroundSize: "cover",
        }}
        className="main-container flex items-center"
      >
        <div className="w-full flex items-center justify-center text-white">
          {/* text */}
          <div className="w-2/3 space-y-3 ms-10">
            <h3 className=" text-3xl font-semibold">Hi i am</h3>
            <h1 className=" text-5xl font-bold">Prakash Kamble</h1>
            <h2 className=" text-3xl ">
              And I am <span ref={el}></span>
            </h2>
            <p className="">
              A passionate Full-stack Web Developer with expertise in both
              front-end and back-end technologies. With a solid background in
              MCS and BCS, as well as hands-on experience gained through
              internships and personal projects,
            </p>
            <div
              className="icons-container flex space-x-5 "
              style={{ marginTop: "25px" }}
            >
              <a
                href="https://www.facebook.com/"
                className="hover:bg-orange-400 w-10 h-10 rounded-full flex justify-center items-center bg-gray-800"
              >
                <i class="fa-brands text-2xl  fa-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                className=" hover:bg-orange-400 w-10 h-10 rounded-full flex justify-center items-center bg-gray-800"
              >
                <i class="fa-brands text-2xl  fa-square-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/prakash-kamble-934628227/"
                className="hover:bg-orange-400 w-10 h-10 rounded-full flex justify-center items-center bg-gray-800"
              >
                <i class="fa-brands text-2xl  fa-linkedin"></i>
              </a>

              <a
                href="https://stackoverflow.com/users/18814232/prakash-kamble"
                className="hover:bg-orange-400 w-10 h-10 rounded-full flex justify-center items-center bg-gray-800"
              >
                <i class="fa-brands text-2xl  fa-stack-overflow"></i>
              </a>
            </div>

            <div style={{ marginTop: "25px" }}>
              <a
                href="#"
                className=" px-3 py-2 bg-orange-500 rounded-full shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img
            style={{
              width: "400px",
              height: "400px",
            }}
            className="rounded-full  "
            src={Prakash}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BannerSection;
