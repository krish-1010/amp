export default function Step5({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-base font-bold mt-4 mb-4">Fee Status</h2>
      <div className="flex gap-8">
        <div className="flex gap-2">
          <input
            type="radio"
            value="Partially Paid"
            checked={formData.feestatus === "Partially Paid"}
            onChange={handleChange}
            name="feestatus"
            id="partiallypaid"
          />
          <label htmlFor="partiallypaid">Partially Paid</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            value="Fully Paid"
            checked={formData.feestatus === "Fully Paid"}
            onChange={handleChange}
            name="feestatus"
            id="fullypaid"
          />
          <label htmlFor="fullypaid">Fully Paid</label>
        </div>
      </div>

      <div className="mt-8 mb-8">
        <label htmlFor="amountpaid">Amount Paid</label>
        <input
          type="text"
          name="amountpaid"
          id="amountpaid"
          className="border-b border-dotted border-black ml-4"
          value={formData.amountpaid}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col border-t border-l border-r border-collapse border-spacing-0 border-black mb-8">
        <div className="flex">
          <div className="w-1/3 font-bold border-b border-r  border-collapse border-spacing-0 border-black">
            MONTH
          </div>
          <div className="w-1/3 font-bold border-b border-r border-collapse border-spacing-0 border-black">
            DATE
          </div>
          <div className="w-1/3 font-bold border-b  border-collapse border-spacing-0 border-black">
            AMOUNT
          </div>
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex ">
            <div className="w-1/3 border-b border-r border-black">
              <input
                type="text"
                name={`t${index + 1}1`}
                className="border-none w-full"
                value={formData[`t${index + 1}1`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3 border-b border-r border-black">
              <input
                type="text"
                name={`t${index + 1}2`}
                className="border-none w-full"
                value={formData[`t${index + 1}2`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3 border-b  border-black">
              <input
                type="text"
                name={`t${index + 1}3`}
                className="border-none w-full"
                value={formData[`t${index + 1}3`] || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="uppercase text-base mt-4 mb-4 ">Declaration</h2>
        <p className="mb-8">
          I declare that the details furnished in the application form and the
          in the enclosures are true. As an applicant, I have thoroughly
          reviewed and agree to comply with Monolith&apos;s rules and
          regulations.
        </p>
      </div>

      <div className="border border-black flex flex-col items-center p-2 pl-3 pr-3">
        <h2 className="font-bold mb-2">FOR OFFICE USE:</h2>
        <div className="flex w-full mt-5 mb-4">
          <h2 className="font-bold mb-2 ">DOCUMENTS:</h2>
          <div className="flex w-full justify-evenly">
            {/* s */}
            <div>
              <input
                type="radio"
                name="documents"
                id="Marksheet"
                value="Marksheet"
                checked={formData.documents === "Marksheet"}
                onChange={handleChange}
              />
              <label htmlFor="Marksheet">Marksheet</label>
            </div>
            {/* e */}
            {/* s */}
            <div>
              <input
                type="radio"
                name="documents"
                id="Certificate"
                value="Certificate"
                checked={formData.documents === "Certificate"}
                onChange={handleChange}
              />
              <label htmlFor="Certificate">Certificate</label>
            </div>
            {/* e */}
            {/* s */}
            <div>
              <input
                type="radio"
                name="documents"
                id="Aadhaar"
                value="Aadhaar"
                checked={formData.documents === "Aadhaar"}
                onChange={handleChange}
              />
              <label htmlFor="Aadhaar">Aadhaar</label>
            </div>
            {/* e */}
            {/* s */}
            <div>
              <input
                type="radio"
                name="documents"
                id="PAN"
                value="PAN"
                checked={formData.documents === "PAN"}
                onChange={handleChange}
              />
              <label htmlFor="PAN">PAN</label>
            </div>
            {/* e */}
          </div>
        </div>
        {/*  */}
        <div className="flex w-full mt-5 mb-4">
          <h2 className="font-bold w-36 mb-2 ">FEE RECEIPT:</h2>
          <div className="flex w-full justify-evenly">
            {/* s */}
            <div>
              <input
                type="radio"
                name="feereceipt"
                id="Registration"
                value="Registration"
                checked={formData.feereceipt === "Registration"}
                onChange={handleChange}
              />
              <label htmlFor="Registration">Registration</label>
            </div>
            {/* e */}
            {/* s */}
            <div>
              <input
                type="radio"
                name="feereceipt"
                id="Admission Fee"
                value="Admission Fee"
                checked={formData.feereceipt === "Admission Fee"}
                onChange={handleChange}
              />
              <label htmlFor="Admission Fee">Admission Fee</label>
            </div>
            {/* e */}
            {/* s */}
            <div>
              <input
                type="radio"
                name="feereceipt"
                id="Installment"
                value="Installment"
                checked={formData.feereceipt === "Installment"}
                onChange={handleChange}
              />
              <label htmlFor="Installment">Installment</label>
            </div>
            {/* e */}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-3">
          <label className="text-base font-bold" htmlFor="declarationdate">
            Date:
          </label>
          <input
            type="text"
            name="declarationdate"
            value={formData.declarationdate}
            onChange={handleChange}
            id="declarationdate"
            className="border-b border-dotted border-black"
          />
        </div>
        {/*  */}
        <div className="flex gap-3">
          <label className="text-base font-bold" htmlFor="declarationplace">
            Place:
          </label>
          <input
            type="text"
            name="declarationplace"
            value={formData.declarationplace}
            onChange={handleChange}
            id="declarationplace"
            className="border-b border-dotted border-black"
          />
        </div>
      </div>

      {/*  */}

      <div className="flex justify-between mt-8 mb-12">
        <div className="flex gap-3">
          <label className="text-base font-bold" htmlFor="signApplicant">
            Signature of the Applicant:
          </label>
          <input
            type="file"
            name="signApplicant"
            onChange={handleChange}
            id="signApplicant"
            hidden
            className="border-b border-dotted border-black"
          />
          <button
            type="button"
            className={`border pl-2 pr-2 border-black ${
              formData.signApplicant ? "bg-green-50" : "bg-red-50"
            }`}
            onClick={() => document.getElementById("signApplicant").click()}
          >
            {formData.signApplicant ? "Uploaded" : "Upload"}
          </button>
        </div>
        {/*  */}
        <div className="flex gap-3">
          <label className="text-base font-bold" htmlFor="signParent">
            Signature of the Parent/Guardian:
          </label>
          <input
            type="file"
            name="signParent"
            onChange={handleChange}
            id="signParent"
            hidden
            className="border-b border-dotted border-black"
          />
          <button
            type="button"
            className={`border pl-2 pr-2 border-black ${
              formData.signParent ? "bg-green-50" : "bg-red-50"
            }`}
            onClick={() => document.getElementById("signParent").click()}
          >
            {formData.signParent ? "Uploaded" : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
