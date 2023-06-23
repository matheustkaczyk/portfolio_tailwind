import ProjectCard from '../ProjectCard';

const Projects = () => {
  const projects = [
    {
      name: 'Easybank',
      url: 'https://easybank-bsk1zeve9-matheustkaczyk.vercel.app/',
      tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
    },
    {
      name: 'Trafalgar',
      url: 'https://trafalgar-tkaczyk.netlify.app/',
      tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
    },
    {
      name: 'Trivia',
      url: 'https://project-trivia-4beq4455q-matheustkaczyk.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    },
    {
      name: 'Finance',
      url: 'https://finance-tkaczyk.netlify.app/',
      tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
    },
    {
      name: 'Webchat',
      url: 'https://webchattkaczyk.netlify.app/',
      tags: ['HTML', 'SCSS', 'JavaScript', 'React', 'Node.js', 'Socket.io'],
    },
    {
      name: 'Splitter',
      url: 'https://splitter-challenge-l9x093db2-matheustkaczyk.vercel.app/',
      tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
    },
    {
      name: 'QrCode',
      url: 'https://qrcode-gen-tka.netlify.app/',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    }
  ];

  return (
    <section className="w-screen h-auto my-10">
      <h1 className="text-center text-white text-6xl m-5">Projects</h1>
      <div className='flex justify-center items-center'>
        <div className='container w-4/5'>
          <p className='text-white text-2xl m-3 text-justify'>
            Here's a selection of some frontend projects that I've created. You can explore them by clicking on the respective buttons below. However, this is just a glimpse of my work. My GitHub profile contains numerous projects, including a wide range of backend and process automation projects.
          </p>
          <hr />
          <div className='flex flex-wrap justify-center mt-10'>
            {
              projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
