import React from "react";

const Step2 = ({ formData, handleChange }) => {
  const columns = [
    { label: "Qualification", width: "w-1/6" },
    { label: "Subject/Stream/Group", width: "w-1/4" },
    { label: "Board & Name of the Institution/University", width: "w-1/4" },
    { label: "Medium of Instruction", width: "w-1/6" },
    { label: "Year of Passing", width: "w-1/12" },
    { label: "% of Mark", width: "w-1/12" },
  ];

  const rows = [
    {
      label: "10th or O Level Equivalent",
      fields: ["textbox11", "textbox12", "textbox13", "textbox14", "textbox15"],
    },
    {
      label: "PUC/12th or A Level Equivalent",
      fields: ["textbox21", "textbox22", "textbox23", "textbox24", "textbox25"],
    },
    {
      label: "Graduation",
      fields: ["textbox31", "textbox32", "textbox33", "textbox34", "textbox35"],
    },
    {
      label: "Any Other",
      fields: ["textbox41", "textbox42", "textbox43", "textbox44", "textbox45"],
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Academic Qualification</h2>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full max-w-5xl">
          <div className="flex flex-wrap border border-black">
            {columns.map((column, idx) => (
              <div
                key={idx}
                className={`${column.width} p-2 font-bold border-r border-black`}
              >
                {column.label}
              </div>
            ))}
          </div>

          {rows.map((row, index) => (
            <div key={index} className="flex flex-wrap border-b border-black">
              <div
                className={`${columns[0].width} p-2 border-r border-l border-black`}
              >
                {row.label}
              </div>
              {row.fields.map((field, idx) => (
                <div
                  key={idx}
                  className={`${columns[idx + 1].width}  border-r border-black`}
                >
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full h-full border"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 mt-8">
        Parent / Guardian Information:
      </h2>
      <div>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="parentname">Name of the Parent/ Guardian</label>
            <input
              type="text"
              value={formData.parentname}
              onChange={handleChange}
              className="border border-black"
              id="parentname"
              name="parentname"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="relationshiptostudent">
              Relationship to the Student
            </label>
            <input
              type="text"
              className="border border-black"
              id="relationshiptostudent"
              name="relationshiptostudent"
              value={formData.relationshiptostudent}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              className="border border-black"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="addressforcoresspondence"
          className="text-xl font-bold mb-3 mt-8"
        >
          Address for Correspondence
        </label>
        <textarea
          name="addressforcoresspondence"
          id="addressforcoresspondence"
          cols="160"
          rows="4"
          className="border border-black"
          value={formData.addressforcoresspondence}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between mb-10 mt-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            value={formData.mobile}
            onChange={handleChange}
            className="border border-black"
            id="mobile"
            name="mobile"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="border border-black"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* TODO: add mobile and email */}

      <label
        htmlFor="personalhealthhistory"
        className="text-xl font-bold mb-3 mt-8"
      >
        Personal Health History :
      </label>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <label htmlFor="challenge" className="flex-1">
            Are you Physically Challenged? (If Yes, Please Indicate)
          </label>
          <div className="flex-1 flex">
            <label className="mr-4">
              <input
                type="radio"
                id="yes1"
                name="challenge"
                value="yes"
                checked={formData.challenge === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                id="no1"
                name="challenge"
                value="no"
                checked={formData.challenge === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="flex-1">
            <input
              type="checkbox"
              id="hearing"
              name="hearing"
              checked={formData.hearing}
              onChange={handleChange}
            />
            Hearing
          </label>
          <label className="flex-1">
            <input
              type="checkbox"
              id="ortho"
              name="ortho"
              checked={formData.ortho}
              onChange={handleChange}
            />
            Orthopedic
          </label>
          <label className="flex-1">
            <input
              type="checkbox"
              id="visual"
              name="visual"
              checked={formData.visual}
              onChange={handleChange}
            />
            Visual
          </label>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="blind" className="flex-1">
            Do you have Color Blindness?
          </label>
          <div className="flex-1 flex">
            <label className="mr-4">
              <input
                type="radio"
                id="yes2"
                name="blind"
                value="yes"
                checked={formData.blind === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                id="no2"
                name="blind"
                value="no"
                checked={formData.blind === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="disable" className="flex-1">
            Do you have Development (or) Learning Disability?
          </label>
          <div className="flex-1 flex">
            <label className="mr-4">
              <input
                type="radio"
                id="yes3"
                name="disable"
                value="yes"
                checked={formData.disable === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                id="no3"
                name="disable"
                value="no"
                checked={formData.disable === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
