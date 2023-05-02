import React from "react";
import { logo } from "../assets/";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  const styles = {
    list: "flex flex-col sm:flex-row items-center mt-5 sm:mt-0 text-[1.125em]",
    item: "my-3 sm:my-0",
    link: "py-4 px-6 mx-1.5 rounded-[30px] sm:text-white hover:text-black hover:bg-white transition duration-100",
  };
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href="#about">
          About
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#services">
          Services
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#projects">
          Projects
        </a>
      </li>
    </ul>
  );
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // Set toggle menu to false when screen width is greater than 768px
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initialize state based on current window width
  }, []);

  return (
    <header
      id="header"
      className="relative flex items-center justify-between w-full py-[2.25rem] sm:w-[45rem] md:w-[59rem] lg:w-[72rem] xl:w-[85rem]"
    >
      <div className="flex items-center w-[11rem] h-[2rem]">
        <a className="w-full h-full" href="#">
          <img className="w-full h-full" src={logo} alt="logo" />
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-row sm:items-center">
        <Menu />
        <button className=" font-fraunces text-[1.125em] py-4 px-6 rounded-[30px] ml-1.5 bg-white hover:bg-yellow transition duration-100">
          CONTACT
        </button>
      </div>

      {/* Mobile menu */}
      {toggleMenu && (
        <div className="z-10 absolute left-5 right-5 top-28 flex flex-col items-center p-5 bg-transparent-white backdrop-blur-sm">
          <Menu />
          <button className=" my-5 w-[9.375rem] font-fraunces text-[1.125em] py-5 px-5 rounded-[30px] bg-yellow">
            CONTACT
          </button>
          <div
            className="
            absolute right-0 top-[-30px] w-0 h-0 
            border-r-[15px] border-r-transparent-white
            border-b-[15px] border-b-transparent-white 
            border-l-[15px] border-l-transparent 
            border-t-[15px] border-t-transparent
            "
          ></div>
        </div>
      )}

      {/* Change Menu icon based on toggle menu state */}
      {toggleMenu ? (
        <RiCloseLine
          className="flex sm:hidden text-[2.5em] text-white cursor-pointer"
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <RiMenuLine
          className="flex sm:hidden text-[2.5em] text-white cursor-pointer"
          onClick={() => setToggleMenu(true)}
        />
      )}
    </header>
  );
};

export default Header;
