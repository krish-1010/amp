export default function Step3() {
  return (
    <div>
      <div className="mt-8">
        <p className="mb-4">Gender</p>
        <div className="flex justify-between">
          <div>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male" className="ml-2">
              Male
            </label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female" className="ml-2">
              Female
            </label>
          </div>
          <div>
            <input type="radio" id="trans" name="gender" value="transgender" />
            <label htmlFor="trans" className="ml-2">
              Transgender
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}