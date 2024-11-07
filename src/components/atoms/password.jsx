function InputPassword({ ...props }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm/6 font-medium text-white text-left"
        >
          Password
        </label>
      </div>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="**********"
        autoComplete="current-password"
        {...props}
        required
        className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400 sm:text-sm/6 bg-[#1D1825]"
      />
    </div>
  );
}

export default InputPassword;
