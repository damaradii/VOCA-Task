function Image({ src }) {
  return (
    src && (
      <img
        src={src}
        alt="preview"
        className="h-32 mx-auto object-cover rounded-full w-32 mb-5"
      />
    )
  );
}

export default Image;
