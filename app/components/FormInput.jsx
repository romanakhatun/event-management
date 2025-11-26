"use-client";
const FormInput = ({
  label,
  type,
  name,
  placeholder,
  required,
  isRequired = true,
  value,
  handleChange,
}) => {
  return (
    <div>
      <label className="label text-sm font-semibold">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="input input-bordered w-full"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
