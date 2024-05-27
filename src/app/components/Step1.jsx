import React from 'react';

const Step1 = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="flex justify-between flex-wrap items-center mb-8">
        <div>
          <div className="flex flex-col">
            <div className="flex mb-4">
              <label htmlFor="appno" className="block w-[112px] mr-2">
                Application No
              </label>
              <input
                type="text"
                id="appno"
                name="appno"
                value={formData.appno}
                onChange={handleChange}
                className="border-b outline-none border-black focus:border-b focus:ring-0"
              />
            </div>
            <div className="flex">
              <label htmlFor="date" className="block w-[112px] mr-2">
                Date
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border-b outline-none border-black focus:border-b focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="border border-black border-dotted w-[140px] h-[150px] flex justify-center items-center rounded-md">
            <input
              type="file"
              id="upload"
              className="w-full h-full"
              accept="image/*"
              hidden
            />
            <label
              htmlFor="upload"
              className="cursor-pointer pt-12 pb-12 text-center"
            >
              [upload Image]
            </label>
          </div>
        </div>
      </div>

      <h2 className="font-bold mt-4 mb-8">
        Student Information: ( Name and Details as given in official records)
      </h2>

      <div className="flex justify-between flex-wrap">
        <div className="">
          <label htmlFor="fname" className="">
            First Name
          </label>
          <br />
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="border border-black"
          />
        </div>
        <div className="">
          <label htmlFor="sname" className="">
            SurName
          </label>
          <br />
          <br />
          <input
            type="text"
            id="sname"
            name="sname"
            value={formData.sname}
            onChange={handleChange}
            className="border border-black"
          />
        </div>
        <div className="">
          <label htmlFor="lname" className="">
            Last Name
          </label>
          <br />
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            className="border border-black"
          />
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-4">Gender</p>
        <div className="flex justify-between">
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            <label htmlFor="gender" className="ml-2">
              Male
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            <label htmlFor="gender" className="ml-2">
              Female
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="trans"
              name="gender"
              value="transgender"
              checked={formData.gender === 'transgender'}
              onChange={handleChange}
            />
            <label htmlFor="gender" className="ml-2">
              Transgender
            </label>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-4">
          <label htmlFor="presadd">Present Address</label>
          <br />
          <textarea
            className="border border-black w-full h-[100px] mt-4 ml-2"
            id="presadd"
            name="presadd"
            value={formData.presadd}
            onChange={handleChange}
            rows="3"
            cols="80"
          ></textarea>
        </div>
        <div className="mt-4">
          <label htmlFor="permadd"> Permanent Address</label>
          <br />
          <textarea
            className="border border-black w-full h-[100px] mt-4 ml-2"
            id="permadd"
            name="permadd"
            value={formData.permadd}
            onChange={handleChange}
            rows="3"
            cols="80"
          ></textarea>
        </div>
      </div>

      <div className="mb-14">
        <div className="flex flex-wrap justify-between mt-6">
          <div>
            <div className="mb-4">
              <label htmlFor="mothertongue">Mother Tongue</label>
            </div>
            <input
              type="text"
              id="mothertongue"
              name="mothertongue"
              value={formData.mothertongue}
              onChange={handleChange}
              className="border border-black w-[224px] h-7"
            />
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="nationality"> Nationality</label>
            </div>
            <select
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="border border-black w-[224px] h-7 mr-20"
            >
              <option value="not selected">Select a Country</option>
              <option value="India">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-6">
          <div>
            <div className="mb-4">
              <label htmlFor="dob">Date of Birth</label>
            </div>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="border border-black w-[224px] h-7"
            />
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="bloodgroup">Blood Group</label>
            </div>
            <input
              type="text"
              id="bloodgroup"
              name="bloodgroup"
              value={formData.bloodgroup}
              onChange={handleChange}
              placeholder="O+ve"
              className="border border-black w-[224px] h-7 mr-20"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-6">
          <div>
            <div className="mb-4">
              <label htmlFor="aadhaar">Aadhaar No</label>
            </div>
            <input
              type="text"
              id="aadhaar"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              className="border border-black w-[224px] h-7"
            />
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="passport">Passport No</label>
            </div>
            <input
              type="number"
              id="passport"
              name="passport"
              value={formData.passport}
              onChange={handleChange}
              className="border border-black w-[224px] h-7 mr-20"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-6">
          <div>
            <div className="mb-4">
              <label htmlFor="mobile">Mobile</label>
            </div>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border border-black w-[224px] h-7"
            />
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="email"> Email ID</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-black w-[224px] h-7 mr-20"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Step1;
