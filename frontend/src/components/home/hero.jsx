import { Button } from "@nextui-org/react";
import hero_video from "../../assets/Videos/Banking-app-[remix].mp4";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../navbar";



const HeroSection = () => {

  const navigate = useNavigate();   

  return (
    <>
    <Navbar />
    <section>
      <div className="flex justify-center text-[#ffafcc]">
        <p className="flex gap-1 w-50 lil-text lg:mb-4 px-3 py-1 rounded-full ">
          <div className="mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#ffafcc"
              fill="none"
            >
              <path
                d="M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <p>BasketBrain</p>
        </p>
      </div>
      <div className="grid grid-cols-12 hero-section">
        <div className="col-span-12 pt-5 lg:col-span-6 lg:pt-[17dvh]">
          <div className="text-center">
            <p className="text-4xl mb-2 font-bold">
              Your Smart Shopping{" "}
              <span className="text-[#ffafcc]">Companion.</span>{" "}
            </p>
            <p className="text-gray-500">
              Organize your shopping with ease. Create, manage, and share your
              grocery lists to ensure you never miss an item.
            </p>
            <Button className="my-2 px-10 shadowed-btn bg-[#ffafcc] text-white" onClick={() => {
              navigate('/dashboard/home')
            }}>
              Get Started
            </Button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <video width="600" autoPlay loop={false} muted >
            <source src={hero_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
