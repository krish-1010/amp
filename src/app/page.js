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
  const [formData, setFormData] = useState({
    appno: "",
    date: "",
    fname: "",
    sname: "",
    lname: "",
    gender: "",
    presadd: "",
    permadd: "",
    mothertongue: "",
    nationality: "",
    dob: "",
    bloodgroup: "",
    aadhaar: "",
    passport: "",
    mobile: "",
    email: "",
    textbox11: "",
    textbox12: "",
    textbox13: "",
    textbox14: "",
    textbox15: "",
    textbox21: "",
    textbox22: "",
    textbox23: "",
    textbox24: "",
    textbox25: "",
    textbox31: "",
    textbox32: "",
    textbox33: "",
    textbox34: "",
    textbox35: "",
    textbox41: "",
    textbox42: "",
    textbox43: "",
    textbox44: "",
    textbox45: "",
    parentname: "",
    relationshiptostudent: "",
    occupation: "",
    addressforcoresspondence: "",
    challenge: "",
    hearing: false,
    ortho: false,
    visual: false,
    blind: "",
    disable: "",
    program: "",
    comments: "",
    cash: false,
    cheque: false,
    dd: false,
    neft: false,
    rtgs: false,
    nach: false,
    credit: false,
    debit: false,
    gpay: false,
    phnpe: false,
    otherpaymentmode: "",
    feestatus: "",
    partiallypaid: false,
    fullypaid: false,
    amountpaid: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
              {currentStep === 1 && (
                <Step1 formData={formData} handleChange={handleChange} />
              )}
              {currentStep === 2 && (
                <Step2 formData={formData} handleChange={handleChange} />
              )}
              {currentStep === 3 && (
                <Step3 formData={formData} handleChange={handleChange} />
              )}
              {currentStep === 4 && (
                <Step4 formData={formData} handleChange={handleChange} />
              )}
              {currentStep === 5 && (
                <Step5 formData={formData} handleChange={handleChange} />
              )}

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
