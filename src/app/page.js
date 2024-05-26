"use client";
import { useState } from "react";
import Image from "next/image";
import myimg from "./../../public/assests/header.png";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle final form submission
  };

  return (
    <main className="bg-gray-300 pt-2 pb-2">
      <div className="w-[60%] bg-white border ml-auto mr-auto p-10 border-black h-[98%]">
        <div className="border-8 h-full p-4 border-blue-900">
          <div className="border-2 border-blue-900 p-8 h-full flex items-center flex-col">
            <Image src={myimg} alt="our logo" height={90} width={150} />
            <h1 className="text-2xl mb-12">
              <b>Application Form</b>
            </h1>
            <form onSubmit={handleSubmit} className="w-full">
              {currentStep === 1 && <Step1 />}
              {currentStep === 2 && <Step2 />}
              {currentStep === 3 && <Step3 />}
              {currentStep === 4 && <Step4 />}
              {currentStep === 5 && <Step5 />}

              <div className="flex justify-between mt-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="btn"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 5 && (
                  <button type="button" onClick={handleNext} className="btn">
                    Next
                  </button>
                )}
                {currentStep === 5 && (
                  <button type="submit" className="btn">
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center bg-indigo-900 h-20 text-xl text-white">
            <span>www.monolith.acadamy</span>
          </div>
        </div>
      </div>
    </main>
  );
}
