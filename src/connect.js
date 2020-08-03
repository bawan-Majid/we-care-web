import React from 'react';
import './styles/main.css';
import Illustration from './image/undraw-workout.svg';

export default function Connect() {
  return (
    <div class="w-screen ">
      <div class="  flex flex-row justify-evenly ">
        <div class="mb-20 mt-6">
          <h1 class="text-blue-910 font-bold text-4xl flex-1 mt-32 ">
            let's make a <br />
            change today
          </h1>
          <h6 class="text-blue-910 mt-8">
            Connect to caring people, chat anonymously
            <br /> and be part of a supportive community
          </h6>
          <button class="bg-blue-910 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-16">
            Connect Now
          </button>
        </div>
        <div clss="flex-2">
          <img className="w-86 h-86 mb-20 mt-8 " src={Illustration} />
        </div>
      </div>
    </div>
  );
}
