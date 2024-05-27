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

      <h2 className="text-xl font-bold mb-4 mt-8">Parent / Guardian Information:</h2>
      <div>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col gap-2">
            <label for="parentname">Name of the Parent/ Guardian</label>
            <input
              type="text"
              value={formData.parentname}
              onChange={handleChange}
              className="border border-black"
              id="parentname"
              name="parentname"
            />
          </div>
          {/*  */}
          <div className="flex flex-col gap-2">
            <label for="relationshiptostudent">Relationship to the Student</label>
            <input
              type="text"
              className="border border-black"
              id="relationshiptostudent"
              name="relationshiptostudent"
              value={formData.relationshiptostudent}
            ></input>
          </div>
        </div>


        <div className="flex justify-between">
          
          {/*  */}
          <div className="flex flex-col gap-2">
            <label for="occupation">Occupation</label>
            <input
              type="text"
              className="border border-black"
              id="occupation"
              name="occupation"
              value={formData.occupation}
            ></input>
          </div>
        </div>
      </div>
      

      <div className="flex flex-col">
      <label for="addressforcoresspondence" 
             className="text-xl font-bold mb-3 mt-8">
              Address for Correspondence
      </label>
      <textarea 
                name="addressforcoresspondence" 
                id="addressforcoresspondence" 
                cols="160"
                rows="4" 
                className="border border-black"
                value={formData.addressforcoresspondence}
                onChange={handleChange}/>
      </div>


      <label for="personalhealthhistory :" 
             className="text-xl font-bold mb-3 mt-8">
              Personal Health History :
      </label>
                

                {/* hey chatgpt, here */}
    
    
    
    </div>
  );
};

export default Step2;
