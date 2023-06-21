function TextCard({ title, text, onHover, onLeave }) {
  return (
    <div className="rounded-lg shadow-lg bg-main text-white mx-4 my-6 max-w-sm w-ful transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-900 font-semibold xsm:text-sm xsm:w-auto xsm:h-auto md:h-fit lg:h-56" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="p-4">
        <h3 className="font-semibold text-lg bg-opacity-30">{title}</h3>
        <p className="text-gray-600 mt-2">{text}</p>
      </div>
    </div>
  );
}

export default TextCard;
