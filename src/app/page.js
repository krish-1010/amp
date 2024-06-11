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
    paidstatus: "",
    amountpaid: "",
    mobile: "",
    email: "",
    t11: "",
    t12: "",
    t13: "",
    t21: "",
    t22: "",
    t23: "",
    t31: "",
    t32: "",
    t33: "",
    t41: "",
    t42: "",
    t43: "",
    t51: "",
    t52: "",
    t53: "",
    t61: "",
    t62: "",
    t63: "",
    documents: "",
    feereceipt: "",
    declarationplace: "",
    declarationdate: "",
    signApplicant: null,
    signParent: null,
    documents: "", // New state for selected document type
    documentFiles: {}, // New state to store files by document type
    feereceipt: "", // State for fee receipt type
    img: null,
  });

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file" && name === "documentFile") {
      const documentType = formData.documents;
      if (documentType) {
        setFormData((prevData) => ({
          ...prevData,
          documentFiles: {
            ...prevData.documentFiles,
            [documentType]: files[0],
          },
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]:
          type === "checkbox" ? checked : type === "file" ? files[0] : value,
        ...(name === "documents" && {
          documentFiles: { ...prevData.documentFiles, [value]: null },
        }),
        ...(name === "feereceipt" && {
          feereceiptFiles: { ...prevData.feereceiptFiles, [value]: null },
        }),
      }));
    }
  };

  const stepFields = {
    1: ["appno", "date", "fname", "sname", "lname", "gender", "presadd", "permadd", "mothertongue", "nationality", "dob", "bloodgroup", "aadhaar", "passport", "mobile", "email"],
    2: ["parentname", "relationshiptostudent", "occupation", "addressforcoresspondence", "challenge", "hearing", "ortho", "visual", "blind", "disable"],
    3: ["program", "comments", "cash", "cheque", "dd", "neft", "rtgs", "nach", "credit", "debit", "gpay", "phnpe", "otherpaymentmode"],
    4: ["feestatus", "paidstatus", "amountpaid", "t11", "t12", "t13", "t21", "t22", "t23", "t31", "t32", "t33", "t41", "t42", "t43", "t51", "t52", "t53", "t61", "t62", "t63", "declarationplace", "declarationdate"],
    5: ["signApplicant", "signParent", "documents", "documentFiles", "feereceipt"]
  };


  function checkValid(step){
    
  }

  const handleNext = () => {

    const currentStepFields = stepFields[currentStep];
    const isStepValid = checkValid(currentStepFields);
    console.log(isStepValid);
  
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }


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
                    className="btn mt-4 mb-4 text-lg"
                  >
                    &laquo; Previous
                  </button>
                )}
                {currentStep == 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn ml-auto mr-auto text-lg"
                  >
                    Next &raquo;
                  </button>
                )}
                {currentStep < 5 && currentStep != 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn mt-4 mb-4 text-lg"
                  >
                    Next &raquo;
                  </button>
                )}
                {currentStep === 5 && (
                  <button
                    type="submit"
                    className="
                    btn 
                    border
                    pl-2 
                    pr-2 
                    border-black 
                    rounded-sm 
                    mr-auto 
                    ml-auto 
                    text-xl 
                    mt-4 
                    mb-4"
                  >
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
