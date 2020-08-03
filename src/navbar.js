import React from 'react';
import './styles/main.css';
import Logo from './image/Logo.svg';
export default function Navbar() {
  return (
    <div class=" w-screen  p-5 sm:text-sm">
      <nav class="flex justify-between">
        <div class="ml-20" class=" ml-12">
          <a href="#" class=" ">
            <img src={Logo} />
          </a>
        </div>
        <ul class="flex flex-row mr-24">
          <li class="pr-5 m-1">
            <a href="#"> For You </a>
          </li>
          <li class="pr-5 m-1">
            <a>Counseling</a>
          </li>
          <li class="pr-5 m-1">
            <a>Signup</a>
          </li>
          <li class="m-1">
            <a>Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
