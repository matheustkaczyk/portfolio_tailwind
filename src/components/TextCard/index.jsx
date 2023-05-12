function TextCard({ title, text, onHover, onLeave }) {
  return (
    <div className="rounded-lg shadow-lg bg-white dark:bg-yellow-300 mx-4 my-6 max-w-sm w-ful transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:bg-yellow-400 font-semibold" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="p-4">
        <h3 className="font-semibold text-lg bg-opacity-30">{title}</h3>
        <p className="text-gray-600 dark:text-black mt-2">{text}</p>
      </div>
    </div>
  );
}

export default TextCard;
