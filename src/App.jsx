import React from "react";
import Header from "./Components/Header/Header";
import Blog from "./Components/Blog/Blog";
import Testimonials from "./Components/Testimonials/Testimonials";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Team from "./Components/Team/Team"
import Footer from "./Components/Footer/Footer"
import About from "./Components/About/About";
import Landing from "./Components/Landing/Landing";
import { BrowserRouter as Router , Route , Routes} from "react-router";
import Contacts from "./Components/DetailPages/Contacts";
import BlogDetails from "./Components/DetailPages/BlogDetails";
import DoctorDetails from "./Components/DetailPages/DoctorDetails";
import ServicesDetails from "./Components/DetailPages/ServicesDetails";
import NotFound from "./Components/404/404";
import ScrollToTop from "./Components/404/ScrollToTop";

function App() {
  return(
  <div>
    <ScrollToTop></ScrollToTop>
     <Header></Header>
      <Routes>
  
      
         <Route path="/" element={<Landing />}/>
         <Route path="/About" element={<About />} />
         <Route path="/Services" element={<Services />} />
         <Route path="/Team" element={<Team />} />
         <Route path="/Blog" element={<Blog />} />
         <Route path="/Contacts" element={<Contacts />} />
         <Route path="/Blog/:id" element={<BlogDetails />} />
         <Route path="/doctor/:id" element={<DoctorDetails />} />
         <Route path="/Services/:id" element={<ServicesDetails />} />
         <Route path="*" element={<NotFound />} />
        

     
  </Routes>
  
 <Contact></Contact>
      <Footer></Footer>
    






 </div> 
  );
} 



export default App;
