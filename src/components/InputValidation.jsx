function InputValidation({type, validation}) {
  return (
    <input
      type={type}
      {...validation}
      className="w-full bg-zinc-600 text-white my-1 px-4 py-2 rounded-md"
    />
  );
}

export default InputValidation;
