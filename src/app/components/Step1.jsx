export default function Step1() {
    return (
      <div>
        <div className="flex justify-between  flex-wrap items-center mb-8">
          <div>
            <div className="flex flex-col">
              <div className="flex mb-4">
                <label htmlFor="appno" className="block w-[112px] mr-2 ">
                  Application No
                </label>
                <input
                  onChange={(e) => {
                    // setApplicationNo(e.target.value);
                    handleChange(e.target.value);
                  }}
                  type="text"
                  id="appno"
                  name="appno"
                  className="border-b outline-none border-black focus:border-b focus:ring-0"
                />
              </div>
              <div>
                <div className="flex">
                  <label htmlFor="date" className="block w-[112px] mr-2">
                    Date
                  </label>
                  <input
                    type="text"
                    id="appno"
                    name="appno"
                    className="border-b outline-none border-black focus:border-b focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border border-black border-dotted w-[140px] h-[150px] flex justify-center items-center  rounded-md">
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
  
        {/*  */}
  
        {/* <div>{applicationNo}</div> */}
  
        <h2 className=" font-bold mt-4 mb-8">
          Student Information: ( Name and Details as given in official records)
        </h2>
  
        <div className="flex justify-between flex-wrap">
          <div className="">
            <label htmlFor="fname" className="">
              First Name
            </label>{" "}
            <br /> <br />
            <input
              type="text"
              id="fname"
              name="fname"
              className="border border-black"
              // style={{ margin: "20px 10px 5px 10px" }}
            />
          </div>
  
          {/*  */}
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
              className="border border-black"
              // style={{ margin: "20px 10px 5px 10px" }}
            />
          </div>
          {/*  */}
          <div className="">
            <label htmlFor="lname" className="">
              Last Name
            </label>{" "}
            <br />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              className="border border-black"
              // style={{ margin: "20px 10px 5px 10px" }}
            />
          </div>
        </div>
  
        <div className="mt-8">
          <p className=" mb-4">Gender</p>
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                // TODO: increase size of radio buttons
                // style={{ width: "20px", height: "20px" }}
              />
              <label htmlFor="gender" className="ml-2">
                Male
              </label>
            </div>
            {/*  */}
            <div>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="gender" className="ml-2">
                Female
              </label>
            </div>
            {/*  */}
            <div>
              <input type="radio" id="trans" name="gender" value="transgender" />
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
              rows="3"
              cols="80"
              // style={{ margin: "20px 10px 5px 30px" }}
            ></textarea>
          </div>
          {/*  */}
          <div className="mt-4">
            <label htmlFor="permadd"> Permanent Address</label>
            <br />
            <textarea
              className="border border-black w-full h-[100px] mt-4 ml-2"
              id="permadd"
              name="permadd"
              rows="3"
              cols="80"
              // style={{ margin: "20px 10px 5px 30px" }}
            ></textarea>
          </div>
        </div>
        {/*  */}
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
                className=" border border-black w-[224px] h-7"
              />
            </div>
            {/* split */}
            <div>
              <div className="mb-4">
                <label htmlFor="nationality"> Nationality</label>
              </div>
              <select
                id="nationality"
                name="nationality"
                className=" border border-black w-[224px] h-7 mr-20"
              >
                <option value="not selected">Select a Country</option>
                <option value="India">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
            {/*  */}
          </div>
  
          {/*  */}
  
          <div className="flex flex-wrap justify-between mt-6">
            <div>
              <div className="mb-4">
                <label htmlFor="dob">Date of Birth</label>
              </div>
              <input
                type="date"
                id="dob"
                name="dob"
                className=" border border-black w-[224px] h-7"
              />
            </div>
            {/* split */}
            <div>
              <div className="mb-4">
                <label htmlFor="bloodgroup">Blood Group</label>
              </div>
              <input
                type="text"
                id="bloodgroup"
                name="bloodgroup"
                placeholder="O+ve"
                className="border border-black w-[224px] h-7 mr-20"
              />
            </div>
            {/*  */}
          </div>
          {/*  */}
          <div className="flex flex-wrap justify-between mt-6">
            <div>
              <div className="mb-4">
                <label htmlFor="aadhaar">Aadhaar No</label>
              </div>
              <input
                type="text"
                id="aadhaar"
                name="aadhaar"
                className=" border border-black w-[224px] h-7"
              />
            </div>
            {/* split */}
            <div>
              <div className="mb-4">
                <label htmlFor="passport">Passport No</label>
              </div>
              <input
                type="number"
                id="passport"
                name="passport"
                className=" border border-black w-[224px] h-7 mr-20"
              />
            </div>
            {/*  */}
          </div>
          {/*  */}
          <div className="flex flex-wrap justify-between mt-6">
            <div>
              <div className="mb-4">
                <label htmlFor="mobile">Mobile</label>
              </div>
              <input
                type="text"
                id="mobile"
                name="mobile"
                className=" border border-black w-[224px] h-7"
              />
            </div>
            {/* split */}
            <div>
              <div className="mb-4">
                <label htmlFor="email"> Email ID</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className=" border border-black w-[224px] h-7 mr-20"
              />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    );
  }