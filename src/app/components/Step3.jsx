import React from "react";

const Step3 = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Programs</h2>

      <div className="degree-container flex flex-col mb-4">
        <h2 className="text-lg font-semibold">Degree</h2>
        <div className="flex mb-4">
          <div className="w-1/4">
            <label htmlFor="ug"><b>UG</b></label>
          </div>
          <div className="flex-1">
            <input
              type="radio"
              name="program"
              id="ug"
              value="B. Sc Creative Media Technologies"
              checked={formData.program === "B. Sc Creative Media Technologies"}
              onChange={handleChange}
            />
            <label htmlFor="ug">B. Sc Creative Media Technologies</label>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/4">
            <label htmlFor="pg"><b>PG</b></label>
          </div>
          <div className="flex-1">
            <input
              type="radio"
              name="program"
              id="pg"
              value="M. Sc Creative Media Technologies"
              checked={formData.program === "M. Sc Creative Media Technologies"}
              onChange={handleChange}
            />
            <label htmlFor="pg">M. Sc Creative Media Technologies</label>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Certificate Courses</h2>
      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="cc1"><b>(a)</b></label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            name="program"
            id="cc1"
            value="Master Certification in AR/VR"
            checked={formData.program === "Master Certification in AR/VR"}
            onChange={handleChange}
          />
          <label htmlFor="cc1">Master Certification in AR/VR</label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="cc2"><b>(b)</b></label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            name="program"
            id="cc2"
            value="Foundation in Unreal Engine"
            checked={formData.program === "Foundation in Unreal Engine"}
            onChange={handleChange}
          />
          <label htmlFor="cc2">Foundation in Unreal Engine</label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="cc3"><b>(c)</b></label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            name="program"
            id="cc3"
            value="Foundation in Toon Boom"
            checked={formData.program === "Foundation in Toon Boom"}
            onChange={handleChange}
          />
          <label htmlFor="cc3">Foundation in Toon Boom</label>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Diploma Courses</h2>
      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="dc1"><b>(a)</b></label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            name="program"
            id="dc1"
            value="Advanced Diploma in Game Design & Development"
            checked={formData.program === "Advanced Diploma in Game Design & Development"}
            onChange={handleChange}
          />
          <label htmlFor="dc1">Advanced Diploma in Game Design & Development</label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="dc2"><b>(b)</b></label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            name="program"
            id="dc2"
            value="Advanced Diploma in 3D Animation"
            checked={formData.program === "Advanced Diploma in 3D Animation"}
            onChange={handleChange}
          />
          <label htmlFor="dc2">Advanced Diploma in 3D Animation</label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="dc3"><b>(c)</b></label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            name="program"
            id="dc3"
            value="Advanced Diploma in 2D Animation"
            checked={formData.program === "Advanced Diploma in 2D Animation"}
            onChange={handleChange}
          />
          <label htmlFor="dc3">Advanced Diploma in 2D Animation</label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="dc4"><b>(d)</b></label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            name="program"
            id="dc4"
            value="PG Diploma in 2D Animation"
            checked={formData.program === "PG Diploma in 2D Animation"}
            onChange={handleChange}
          />
          <label htmlFor="dc4">PG Diploma in 2D Animation</label>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Online Courses</h2>
      <div className="flex flex-wrap justify-between">
        <div className="flex-1">
          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc1"><b>(a)</b></label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                name="program"
                id="oc1"
                value="Toon Boom Storyboard Pro"
                checked={formData.program === "Toon Boom Storyboard Pro"}
                onChange={handleChange}
              />
              <label htmlFor="oc1">Toon Boom Storyboard Pro</label>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc2"><b>(b)</b></label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                name="program"
                id="oc2"
                value="Toon Boom Harmony"
                checked={formData.program === "Toon Boom Harmony"}
                onChange={handleChange}
              />
              <label htmlFor="oc2">Toon Boom Harmony</label>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc3"><b>(c)</b></label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                name="program"
                id="oc3"
                value="Game Design"
                checked={formData.program === "Game Design"}
                onChange={handleChange}
              />
              <label htmlFor="oc3">Game Design</label>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc4"><b>(d)</b></label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                name="program"
                id="oc4"
                value="Game Development"
                checked={formData.program === "Game Development"}
                onChange={handleChange}
              />
              <label htmlFor="oc4">Game Development</label>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc5"><b>(e)</b></label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                name="program"
                id="oc5"
                value="Unreal Engine"
                checked={formData.program === "Unreal Engine"}
               
                onChange={handleChange}
              />
              <label htmlFor="oc5">Unreal Engine</label>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc6"><b>(f)</b></label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                name="program"
                id="oc6"
                value="AR/VR"
                checked={formData.program === "AR/VR"}
                onChange={handleChange}
              />
              <label htmlFor="oc6">AR/VR</label>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc7"><b>(g)</b></label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                name="program"
                id="oc7"
                value="3D Animation"
                checked={formData.program === "3D Animation"}
                onChange={handleChange}
              />
              <label htmlFor="oc7">3D Animation</label>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Step3;
