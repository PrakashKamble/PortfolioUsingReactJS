import React from "react";
import bannerImage from "../assets/MyInternship.png";
const About = () => {
  return (
    <>
      <div className="main-container py-10 bg-slate-100">
        <h1 className="text-4xl font-bold pb-10 text-center">About Me</h1>
        <div className="flex items-center">
          <div className="w-full flex justify-center ">
            <img
              style={{ height: "400px", width: "400px" }}
              className="shadow-xl border"
              src={bannerImage}
              alt=""
            />
          </div>

          <div className="w-full ">
            {/* text */}
            <div className="space-y-7">
              <h1 className="text-5xl font-semibold">
                Full Stack Java Developer
              </h1>
              <p>
                I am a dedicated and passionate individual with a strong
                background in full-stack Java development.
              </p>
              <p>
                Through my education in MCS and BCS, as well as hands-on
                experience gained during internships, I have honed my skills in
                both front-end and back-end technologies. My projects, including
                a Hotel Management System and a Chat Application, demonstrate my
                ability to deliver high-quality software solutions. I am eager
                to bring my expertise to a dynamic team and contribute to the
                success of innovative projects in the field of software
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
