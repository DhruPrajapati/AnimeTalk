const GenderCheckbox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className="flex pt-2">
      <div className="form-control">
        <label
          className={`label gap-3 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}>
          <span className="label-text text-gray-200">male</span>
          <input
            type="checkbox"
            className="checkbox border-white"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}>
          <span className="label-text text-gray-200">female</span>
          <input
            type="checkbox"
            class="checkbox border-white"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
