function InputName({ ...title }) {
  return (
    <div>
      <label
        htmlFor="name"
        className="block text-sm/6 font-medium text-white text-left"
      >
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Sarah Santoso"
        {...title}
        required
        className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400  sm:text-sm/6 bg-[#1D1825]"
      />
    </div>
  );
}

export default InputName;
