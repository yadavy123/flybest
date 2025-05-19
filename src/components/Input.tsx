const InputBox = ({ label, value, onChange }: any) => {
  return (
    <div className="h-[75px] w-full min-w-0">
      <label className="block text-sm text-[#cccccc] mb-1">
        {label}
      </label>
      <input
        name="email"
        type="text"
        value={value}
        onChange={onChange}
        className="w-full px-3 py-3 bg-[#111111] border border-[#333333] rounded text-white focus:outline-none focus:ring-1 focus:ring-[#5ecbde]"
      />
    </div>
  );
};

export default InputBox;
