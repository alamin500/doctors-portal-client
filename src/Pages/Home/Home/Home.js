import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import Banner from "../Banner/Banner";
import ExceptionalDeltal from "../ExceptionalDental/ExceptionalDeltal";
import Footer from "../Footer/Footer";
import OurDoctors from "../OurDoctors/OurDoctors";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ExceptionalDeltal></ExceptionalDeltal>
      <AppoinmentBanner></AppoinmentBanner>
      <Testimonial></Testimonial>
      <OurDoctors></OurDoctors>
      <Footer></Footer>
    </div>
  );
};

export default Home;
