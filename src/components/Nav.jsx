import HeaderLogo from "../assets/images/header-logo.svg"
import Humberger from "../assets/icons/hamburger.svg"
import {navLinks} from "../constants/index"
const Nav = () => {
    return (
       <header className="padding-x absolute py-8 z-10 w-full">
          <nav className="flex justify-between items-center max-container">
            <a href="/">
               <img 
                  src={HeaderLogo}
                  alt="logo"
                  width={130}
                  height={29}
               />
            </a>
            <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
               {navLinks.map((item) => (
                  <li key={item.label} className="link">
                     <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
                  </li>
               ))}
            </ul>
            <div className="hidden max-lg:block">
                 <img 
                     src={Humberger}
                     alt="humI"
                     width={25}
                     height={25}
                 /> 
            </div>
          </nav>
       </header>
    );
}

export default Nav;
