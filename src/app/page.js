// import Navbar from "./component/navbar/page";
import HomePage from "./component/Home/page";
import Portfolio from "./component/portfolio/page";
import Experience from "./component/experience/page";
import Me from "./component/me/page";
import Contact from "./component/contact/page";





export default function Home() {
  return (
           <>
          {/* <Navbar /> */}
          <HomePage />
          <Portfolio />
          <Experience />
          <Me />
          <Contact />
          
           </>
  );
}
