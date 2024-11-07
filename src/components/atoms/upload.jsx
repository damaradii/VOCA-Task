function Upload({ src, ...props }) {
  return (
    <div>
      {src && (
        <img
          src={src}
          alt="preview"
          className="h-32 mx-auto object-cover rounded-full w-32 mb-5"
        />
      )}
      <div>
        <label
          htmlFor="profileUrl"
          className="block text-sm/6 font-medium text-white text-left"
        >
          Profile URL
        </label>
        <input
          id="profileUrl"
          name="profileUrl"
          type="url"
          autoComplete="profileUrl"
          placeholder="<image URL>"
          required
          {...props}
          className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400  sm:text-sm/6 bg-[#1D1825]"
        />
      </div>
    </div>
  );
}

export default Upload;
