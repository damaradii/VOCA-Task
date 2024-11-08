function InputName({ label, type, id, name, autoComplete, ...title }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm/6 font-medium text-white text-left"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        {...title}
        required
        className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400  sm:text-sm/6 bg-[#1D1825]"
      />
    </div>
  );
}

export default InputName;
