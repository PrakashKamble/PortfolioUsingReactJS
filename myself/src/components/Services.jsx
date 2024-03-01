import React from "react";
import "./service.css"

const Services = () => {
  return (
    <>
      <div className="main-container py-10 pl-4 pr-4">
        <h1 className="font-bold text-4xl text-center">My Services</h1>

        <div className="services-container flex flex-col mt-12">
          <div className="services1 bg-slate-100 hover:bg-slate-200 cursor-pointer p-8 text-center shadow-xl rounded-lg space-y-3">
            <i className="text-4xl fa-solid fa-globe"></i>
            <h1 className="text-2xl font-semibold">Web Development</h1>
            <p>
              such as Java, Python, HTML, CSS, JavaScript, ReactJS, MySQL, and
              Bootstrap. My services include front-end and back-end development,
              ensuring seamless user experiences and efficient functionality.
              ex.
            </p>
          </div>

          <div className="bg-slate-100 hover:bg-slate-200 cursor-pointer p-8 text-center shadow-xl rounded-lg space-y-3 mt-4">
            <i className="text-4xl fa-solid fa-server"></i>
            <h1 className="text-2xl font-semibold">Java Development</h1>
            <p>
              My expertise extends to backend development, where I leverage
              technologies such as Java, Python, MySQL, and more to build robust
              and scalable server-side solutions.
            </p>
          </div>

          <div className="bg-slate-100 hover:bg-slate-200 cursor-pointer p-8 text-center shadow-xl rounded-lg space-y-3 mt-4">
            <i className="text-4xl fa-brands fa-react"></i>
            <h1 className="text-2xl font-semibold">ReactJS Applications</h1>
            <p>
              I specialize in crafting dynamic and interactive user interfaces
              using ReactJS. Leveraging this powerful JavaScript library, I
              create engaging web applications that provide seamless user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
