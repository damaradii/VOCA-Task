function InputEmail({ ...props }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-white text-left"
      >
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="sarah.santoso@gmail.com"
        required
        {...props}
        className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400  sm:text-sm/6 bg-[#1D1825]"
      />
    </div>
  );
}

export default InputEmail;
