export default function Step5() {
  return (
    <div>
      <div className="flex flex-wrap justify-between mt-6">
        <div>
          <div className="mb-4">
            <label htmlFor="mothertongue">Mother Tongue</label>
          </div>
          <input
            type="text"
            id="mothertongue"
            name="mothertongue"
            className="border border-black w-[224px] h-7"
          />
        </div>
        <div>
          <div className="mb-4">
            <label htmlFor="nationality">Nationality</label>
          </div>
          <select
            id="nationality"
            name="nationality"
            className="border border-black w-[224px] h-7"
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
            placeholder="O+ve"
            className="border border-black w-[224px] h-7"
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
            className="border border-black w-[224px] h-7"
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
            className="border border-black w-[224px] h-7"
          />
        </div>
        <div>
          <div className="mb-4">
            <label htmlFor="email">Email ID</label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-black w-[224px] h-7"
          />
        </div>
      </div>
    </div>
  );
}