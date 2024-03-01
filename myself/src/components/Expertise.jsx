import React from "react";
import BannerBackground from "../assets/banner_wallpaper.svg";
import "./expertise.css"

const Expertise = () => {
  return (
    <>
      <div className="y10">
        <h1 className="text-4xl font-bold text-center">My Expertise</h1>

        {/* box section */}
        <div
          className="box-container flex py-8 mt-8 items-center"
          style={{
            backgroundImage: `url(${BannerBackground})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center text-center text-white">
            {/* text */}
            <div className="w-2/3 text-center ">
              <h1 className="font-semibold text-3xl mb-3">
                I love this technologies
              </h1>
              <p>
                These technologies allow me to build dynamic and interactive web
                applications, and I'm passionate about leveraging them to create
                innovative solutions."
              </p><br />
              <a href="https://drive.google.com/file/d/1fBPewjX29yqIxx7nUsFVGXBsRSt4-kou/view?usp=sharing" className="px-4 py-2 bg-orange-500 rounded-full">
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            {/* skills */}
            <div className="flex w-2/3 h-fit space-x-3 flex-wrap justify-center">
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Core Java
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Advance Java
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                JSP
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Servlet
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                JDBC
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                ReactJS
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Redux
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Javascript
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                ES6
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                jQuery
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                CSS3
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                HTML5
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Bootstrap
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Ajax
              </p>
              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Basics of NodeJS
              </p>

              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Git
              </p>

              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Tomcat
              </p>

              <p className="bg-slate-200 w-fit px-3 py-1 mt-3 rounded-full hover:bg-slate-300 cursor-pointer">
                Firebase
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
