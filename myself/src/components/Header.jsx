import React, { useState } from "react";
import "./header.css"

const Header = () => {
  const [brandName, setBrandName] = useState("Prakash Kamble");
  const [menuLink, setMenuLink] = useState([
    { title: "HOME", link: "/home", id: 1 },
    { title: "ABOUT", link: "/about", id: 2 },
    { title: "SKILLS", link: "/skills", id: 3 },
    // { title: "PORTFOLIO", link: "/portfolio", id: 4 },
    { title: "CONTACT", link: "/contact", id: 5 },
  ]);
  const [actionButton,setActionButton]=useState({title:"Hire Me",link:"/hire-me",})
  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-10 bg-gray-100">
        <div>
          {/* brands logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-6">
          {menuLink.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-red-600">
              {link.title}
            </a>
          ))}
        </div>

        <div>
          {/* buttons */}
          <a href={actionButton.link} className="px-3 py-2 bg-orange-600 rounded-full font-bold shadow">
           {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
