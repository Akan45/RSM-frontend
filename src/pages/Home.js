import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import ScrollToTop from '../components/ScrollToTop';
import Empty from '../components/Empty';
import About from '../components/About';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      scroller.scrollTo(location.state.section, {
        duration: 0,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [location.state]);

  return (
    <>

    <div class="bg-[url('../public/hi.jpg')] bg-cover h-[650px]  ">
    <Element name="section1">
        <Section1 />
      </Element>
      <Element name="section2">
      <Empty/>
        <Section2/></Element>
      <Element name="section3">
       
        <Section3 />
      </Element>
     
      </div>
      
      
      <Element name="section5">
       
        <Section5 />
      </Element>
      <Empty/>
      <About/>
      <Element name="section6">
      <Empty/>
        <Section6 />
      </Element>

    <ScrollToTop/>
    </>
  );
};

export default Home;