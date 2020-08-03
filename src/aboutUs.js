import React from 'react';
import './styles/main.css';
import { FillButton } from 'tailwind-react-ui';
export default function AboutUs() {
  return (
    <div class="w-screen">
      <div class="m-0 px-24 py-40 w-screen bg-orange-920 md:flexbox flex-col">
        <div class="flex flex-row justify-evenly ">
          <div class="max-w-sm rounded overflow-hidden bg-blue-910 shadow-lg   ml-12 h-84">
            <div class="px-10 py-12 ">
              <p class="text-white">wecare</p>
              <div class="font-bold text-3xl mb-2 text-orange-930">
                About Us
              </div>
              <p class=" text-base text-white">
                We believe that what we really need sometimes is for someone to
                be there and listen while we try to make some sense of our
                thoughts. Someone who is patient and understating enough to not
                judge the messy, or lost us, we sometimes can be. We believe
                that imperfections are what makes us human and we all, with our
                different points of view, can help each other grow in sometimes
                surprising ways.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden bg-blue-910 shadow-lg h-82 mt-32 mr-12">
            <div class="px-10 py-12">
              <p class="text-white">wecare</p>
              <div class="font-bold text-3xl mb-2 text-orange-930">
                Our Mission
              </div>
              <p class="text-base text-white">
                Our aim is to build a supportive community for our users to feel
                safe sharing their stories and being vulnerable. To get the help
                they need and deserve, but don’t have access to. If you're
                passionate about helping others as much as we are, the we care
                community would be more than happy to have you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
