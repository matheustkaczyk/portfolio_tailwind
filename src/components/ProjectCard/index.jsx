const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-5">
      <div className="flex flex-col w-full h-full">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.name}</div>
          <div className="mb-2">
            {
              project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2"
                >
                  {tag}
                </span>
              ))
            }
          </div>
        </div>
        <div className="px-6 py-4 mt-auto">
          <a
            href={project.url}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
