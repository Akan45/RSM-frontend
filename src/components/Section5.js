import React from 'react';
import IRCTC from '../assets/images/IRCTC.png';
import TrainEnquiry from '../assets/images/Train-Enquiry.png';
import Reservation from '../assets/images/Reservation-logo.png';
import Retiring from '../assets/images/Retiring-room-logo.png';
import Freight from '../assets/images/Freight.png';
import Parcel from '../assets/images/Parcel.png';
import Railways from '../assets/images/Indian-Railways.png'; 
import Uts from '../assets/images/UTS-Ticketing.png'; 

const Section5 = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <section className="mt-12 py-8" id="section5">
      <span id="sub-heading" className="animate-pulse">
        Indian Railways
      </span>
      <span id="heading">SERVICES</span>
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full md:w-1/4 mb-6" onClick={() => handleRedirect('https://www.irctc.co.in/nget/train-search')}>
            <div className="rounded-lg shadow-lg p-5 text-center hover:transform hover:-translate-y-2 transition-transform cursor-pointer">
              <img src={IRCTC} alt="Ticket Booking" className="mb-4 mx-auto" style={{ width: '100px', height: '50px' }} />
              <h3 className="text-white text-xl font-semibold mb-2">BOOK TICKET</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6" onClick={() => handleRedirect('https://enquiry.indianrail.gov.in/mntes/')}>
            <div className="rounded-lg shadow-lg p-5 text-center hover:transform hover:-translate-y-2 transition-transform cursor-pointer">
              <img src={TrainEnquiry} alt="Train Enquiry" className="mb-4 mx-auto" style={{ width: '60px', height: '50px', filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-white text-xl font-semibold mb-2">TRAIN ENQUIRY</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6" onClick={() => handleRedirect('https://www.indianrail.gov.in/enquiry/StaticPages/StaticEnquiry.jsp?StaticPage=index.html')}>
            <div className="rounded-lg shadow-lg p-5 text-center hover:transform hover:-translate-y-2 transition-transform cursor-pointer">
              <img src={Reservation} alt="Reservation Enquiry" className="mb-4 mx-auto" style={{ width: '50px', height: '50px' }} />
              <h3 className="text-white text-xl font-semibold mb-2">RESERVATION</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6" onClick={() => handleRedirect('https://rr.irctc.co.in/#/home')}>
            <div className="rounded-lg shadow-lg p-5 text-center hover:transform hover:-translate-y-2 transition-transform cursor-pointer">
              <img src={Retiring} alt="Retiring Room Booking" className="mb-4 mx-auto" style={{ width: '50px', height: '50px', filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-white text-xl font-semibold mb-2">RETIRING ROOM</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full md:w-1/4 mb-6" onClick={() => handleRedirect('https://www.fois.indianrail.gov.in/RailSAHAY/index.jsp')}>
            <div className="rounded-lg shadow-lg p-5 text-center hover:transform hover:-translate-y-2 transition-transform cursor-pointer">
              <img src={Freight} alt="Freight Business" className="mb-4 mx-auto rounded-full" style={{ width: '50px', height: '50px' }} />
              <h3 className="text-white text-xl font-semibold mb-2">FREIGHT</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6" onClick={() => handleRedirect('https://parcel.indianrail.gov.in/')}>
            <div className="rounded-lg shadow-lg p-5 text-center hover:transform hover:-translate-y-2 transition-transform cursor-pointer">
              <img src={Parcel} alt="Railway Parcel Website" className="mb-4 mx-auto" style={{ width: '50px', height: '50px' }} />
              <h3 className="text-white text-xl font-semibold mb-2">PARCEL WEBSITE</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6" onClick={() => handleRedirect('https://indianrailways.gov.in/')}>
            <div className="rounded-lg shadow-lg p-5 text-center hover:transform hover:-translate-y-2 transition-transform cursor-pointer">
              <img src={Railways} alt="Indian Railways" className="mb-4 mx-auto" style={{ width: '60px', height: '50px', filter: 'invert(1) brightness(100%)' }} />
              <h3 className="text-white text-xl font-semibold mb-2">INDIAN RAILWAYS</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6" onClick={() => handleRedirect('https://utsonmobile.indianrail.gov.in/login;id=82030C17D4627375352A0C1D42771F44?0')}>
            <div className="rounded-lg shadow-lg p-5 text-center hover:transform hover:-translate-y-2 transition-transform cursor-pointer">
              <img src={Uts} alt="UTS-Ticketing" className="mb-4 mx-auto rounded-full" style={{ width: '50px', height: '50px' }} />
              <h3 className="text-white text-xl font-semibold mb-2">UTS TICKETING</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;