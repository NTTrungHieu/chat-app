const GenderRadio = ({
  selectedGender,
  onGenderChange,
}: {
  selectedGender: string;
  onGenderChange: (gender: "male" | "female") => void;
}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text ">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio border-x-stone-50"
            checked={selectedGender == "male"}
            onChange={() => onGenderChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text ">Female</span>
          <input
            type="radio"
            name="gender"
            className="radio border-x-stone-50"
            checked={selectedGender == "female"}
            onChange={() => onGenderChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderRadio;
