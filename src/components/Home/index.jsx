import { AiOutlineArrowDown } from 'react-icons/ai';

import me from '../../assets/images/me.png';

function Home() {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className='text-center w-fit font-mono text-5xl leading-snug text-yellow-50'>
        <h1>Hello!</h1>
        <h1>I'm Matheus Tkaczyk</h1>
        <h4>Fullstack developer</h4>
        <div className='flex justify-start mt-5'>
          <a href="https://www.linkedin.com/in/matheustkaczykribeiro/" target='__blank' class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-2xl">
            Connect with me!
          </a>
        </div>
      </div>
      <div>
      </div>
      <div className='w-2/5 ml-20'>
        <img className='rounded-full w-fit border-amber-400 border-x-2' src={me} alt="Matheus Tkaczyk" />
      </div>
      <AiOutlineArrowDown className='text-5xl absolute bottom-5 animate-bounce text-black cursor-pointer' />
    </section>
  );
}

export default Home;