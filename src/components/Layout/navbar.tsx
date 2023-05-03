import logo2 from "@/public/images/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navbarItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Over ons",
      link: "/overons",
    },
    {
      title: "Diensten",
      link: "/diensten",
    },
    {
      title: "Zakelijk",
      link: "/zakelijk",
    },
    {
      title: "Veelgestelde vragen",
      link: "/vragen",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Image src={logo2} height={100} width={100} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* ['home', 'about', 'work', 'skills', 'contact'] */}
        {navbarItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} color="#3E7844" />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} color="#3E7844" />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
