export default function Step5({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-md font-bold mt-4 mb-4">Fee Status</h2>
      <div className="flex gap-8">
        <div className="flex gap-2">
          <input
            type="radio"
            value="Partially Paid"
            checked={formData.fullypaid === "Partially Paid"}
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
            checked={formData.fullypaid === "Fully Paid"}
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
        />
      </div>

      <div className="flex flex-col border border-black mb-8">
        <div className="flex">
          <div className="w-1/3 font-bold">MONTH</div>
          <div className="w-1/3 font-bold">DATE</div>
          <div className="w-1/3 font-bold">AMOUNT</div>
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex  mt-2">
            <div className="w-1/3 border border-black">
              <input
                type="text"
                name={`t${index + 1}1`}
                className="border-none w-full"
                value={formData[`t${index + 1}1`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3">
              <input
                type="text"
                name={`t${index + 1}2`}
                className="border-none w-full"
                value={formData[`t${index + 1}2`] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3">
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
    </div>
  );
}
