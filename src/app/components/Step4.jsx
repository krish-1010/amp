export default function Step4({ formData, handleChange }) {
  return (
    <div>
      <h2 className="font-bold uppercase text-md mb-4">Notes:</h2>
      <p className="">
        {" "}
        Any false information given in the Application shall be reason for
        disciplinary action against the Applicant. <br />
        <br /> Registration Fee, Admission Fee, once paid, are Non-refunded.{" "}
        <br />
        <br /> Government Medical Practitioner Certified Medical Certified and
        Evaluation Report Should be produced in case od any medical condition{" "}
        <br />
        <br /> Admission of the student will be confirmed only after thorough
        verification of the submitted Medical Certificate (or) Evaluation Report
        and Monolith reserves the authority to either accept or reject the
        application or withdraw the admission at any point during the course.
      </p>

      <div className="flex flex-col">
        <label htmlFor="comments" className="text-xl font-bold mb-3 mt-8">
          Comments from the Interview :
        </label>
        <textarea
          name="comments"
          id="comments"
          cols="160"
          rows="4"
          className="border border-black"
          value={formData.comments}
          onChange={handleChange}
        />

        <div className="text-xl font-bold mb-3 mt-8">Payment Mode:</div>
        <div className="grid grid-cols-5 gap-2">
          <label>
            <input
              type="checkbox"
              name="cash"
              checked={formData.cash}
              onChange={handleChange}
            />
            Cash
          </label>
          <label>
            <input
              type="checkbox"
              name="cheque"
              checked={formData.cheque}
              onChange={handleChange}
            />
            Cheque
          </label>
          <label>
            <input
              type="checkbox"
              name="dd"
              checked={formData.dd}
              onChange={handleChange}
            />
            DD
          </label>
          <label>
            <input
              type="checkbox"
              name="neft"
              checked={formData.neft}
              onChange={handleChange}
            />
            NEFT
          </label>
          <label>
            <input
              type="checkbox"
              name="rtgs"
              checked={formData.rtgs}
              onChange={handleChange}
            />
            RTGS
          </label>
          <label>
            <input
              type="checkbox"
              name="nach"
              checked={formData.nach}
              onChange={handleChange}
            />
            NACH
          </label>
          <label>
            <input
              type="checkbox"
              name="credit"
              checked={formData.credit}
              onChange={handleChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="checkbox"
              name="debit"
              checked={formData.debit}
              onChange={handleChange}
            />
            Debit Card
          </label>
          <label>
            <input
              type="checkbox"
              name="gpay"
              checked={formData.gpay}
              onChange={handleChange}
            />
            GPay
          </label>
          <label>
            <input
              type="checkbox"
              name="phnpe"
              checked={formData.phnpe}
              onChange={handleChange}
            />
            Phone Pe
          </label>
        </div>

        <div className="mt-8 mb-8">
          <label>
            <b className="mr-2">Others </b>
            <input
              type="text"
              id="otherpay"
              name="otherpay"
              className="border-b border-dotted border-black"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
