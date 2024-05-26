export default function Step4() {
  return (
    <div>
      <div className="mt-4">
        <label htmlFor="presadd">Present Address</label>
        <textarea
          className="border border-black w-full h-[100px] mt-4 ml-2"
          id="presadd"
          name="presadd"
          rows="3"
        ></textarea>
      </div>
      <div className="mt-4">
        <label htmlFor="permadd">Permanent Address</label>
        <textarea
          className="border border-black w-full h-[100px] mt-4 ml-2"
          id="permadd"
          name="permadd"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}