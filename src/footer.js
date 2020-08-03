import React from 'react';
import './styles/main.css';
import Facebook from './image/facebook.png';
import Twitter from './image/twitter.png';
import Instagram from './image/instagram.png';
import Quotes from './image/quotes.svg';
import Logo from './image/Logo.svg';

export default function Footer() {
  return (
    <div class="m-0 bg-orange-910   h-60 w-screen">
      <div class="flex flex-row justify-around ">
        <div class=" mt-16 mb-16">
          What mental health needs is more
          <br /> sunlight, more candor, and more
          <br /> unashamed conversation
          <img src={Quotes} class="ml-56" />
        </div>
        <div>
          <p class="text-blue-910 mt-16 mb-16">Your Feedback</p>
        </div>
      </div>
      <hr class="w-screen bg-orange-940" />
      <div class="flex flex-row justify-evenly mt-4">
        <div class="mt-2">© 2020 We Care </div>
        <div>
          <img src={Logo} class="w-16 h-16" />
        </div>
        <div class="flex flex-row justify-between  w-24 ">
          <div>
            <img src={Facebook} class="w-6 h-6" />
          </div>
          <div>
            <img src={Instagram} class="w-6 h-6" />
          </div>
          <div>
            <img src={Twitter} class="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
