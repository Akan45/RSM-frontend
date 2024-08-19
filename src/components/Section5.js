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
    <div><div class="relative flex overflow-x-hidden bg-black bg-center text-red-400 ">
    <div class="py-12 animate-marquee whitespace-nowrap">
    <span class="text-4xl font-led mx-4"> :: Welcome </span>
      <span class="text-4xl font-led mx-4">To</span>
      <span class="text-4xl font-led mx-4">Rail</span>
      <span class="text-4xl font-led mx-4">Madad</span>
      <span class="text-4xl font-led mx-4">Platform</span>
    </div>
  
    <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
      <span class="text-4xl font-led mx-4"> :: Welcome </span>
      <span class="text-4xl font-led mx-4">To</span>
      <span class="text-4xl font-led mx-4">Rail</span>
      <span class="text-4xl font-led mx-4">Madad</span>
      <span class="text-4xl font-led mx-4">Platform :: </span>
    </div>
   
  </div>
  </div>
  )
}

export default Section5