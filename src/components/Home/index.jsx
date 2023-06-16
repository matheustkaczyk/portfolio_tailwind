import { AiOutlineArrowDown } from 'react-icons/ai';

import ReactTypingEffect from 'react-typing-effect';

import me from '../../assets/images/me.png';

function Home() {
  const typingText = ['Front-end developer!', 'Back-end developer!', 'FullStack developer!'];
  return (
    <section id='home' className="h-screen flex justify-center items-center mx-auto">
      <div className='text-center w-fit font-mono text-5xl leading-snug text-yellow-50'>
        <h1>Hello! <span role='img' aria-label="waving">👋</span></h1>
        <h1>I'm Matheus Tkaczyk</h1>
        <ReactTypingEffect
          text={typingText}
          speed={80}
          eraseDelay={1000}
          eraseSpeed={100}
          typingDelay={80}
          className='typer'
        />
        <div className='flex justify-start mt-5 text-3xl'>
          <a href="https://www.linkedin.com/in/matheustkaczykribeiro/" target='__blank' className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-xl">
            Connect with me!
          </a>
          <a href="https://github.com/matheustkaczyk" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2 text-xl">
            Go to GitHub
          </a>
          <a href="https://wa.link/4dkaii" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 text-xl">
            WhatsApp
          </a>
        </div>
      </div>
      <div>
      </div>
      <div className='w-2/5 ml-20 max-w-xl'>
        <img className='rounded-full w-4/5 border-y-white border-x-2 right-fadein' src={me} alt="Matheus Tkaczyk" />
      </div>
      <a href='#services' className='text-5xl absolute bottom-5 animate-bounce cursor-pointer'>
        <AiOutlineArrowDown className=' text-white' />
      </a>
    </section>
  );
}

export default Home;
