import typescript from '../../assets/images/typescript.svg';
import javascript from '../../assets/images/javascript.svg';
import react from '../../assets/images/react.svg';
import redux from '../../assets/images/redux.svg';
import html from '../../assets/images/html.svg';
import css from '../../assets/images/css.svg';
import sass from '../../assets/images/sass.svg';
import node from '../../assets/images/nodejs.svg';
import mongo from '../../assets/images/mongodb.svg';
import mysql from '../../assets/images/mysql.svg';
import express from '../../assets/images/express.svg';
import nestjs from '../../assets/images/nestjs.svg';
import csharp from '../../assets/images/csharp.svg';
import dart from '../../assets/images/dart.svg';
import flutter from '../../assets/images/flutter.svg';

import ImageCard from '../ImageCard';
import TextCard from '../TextCard';

function Services() {
  const techs = [
    {
      name: 'Typescript',
      image: typescript,
    },
    {
      name: 'Javascript',
      image: javascript,
    },
    {
      name: 'React',
      image: react,
    },

    {
      name: 'Redux',
      image: redux,
    },
    {
      name: 'Html',
      image: html,
    },
    {
      name: 'Css',
      image: css,
    },
    {
      name: 'Sass',
      image: sass,
    },
    {
      name: 'Nodejs',
      image: node,
    },
    {
      name: 'MongoDB',
      image: mongo,
    },
    {
      name: 'MySQL',
      image: mysql,
    },
    {
      name: 'Express',
      image: express,
    },
    {
      name: 'Nestjs',
      image: nestjs,
    },
    {
      name: 'C#',
      image: csharp,
    },
    {
      name: 'Dart',
      image: dart,
    },
    {
      name: 'Flutter',
      image: flutter,
    },
  ];

  const skills = [
    {
      title: "Frontend",
      text: "I have experience in JavaScript and TypeScript for creating dynamic and interactive web applications, React for building user interfaces, HTML and CSS for creating and styling web pages, and Sass for streamlining my styling process.",
    },
    {
      title: "Backend",
      text: "I have experience in Node.js for creating server-side applications, Express for building web applications with Node.js, Nest.js for building server-side applications with Node.js, and MongoDB and MySQL for storing data in web applications.",
    },
    {
      title: "Fullstack",
      text: "I have experience in both frontend and backend development, allowing me to create web applications that have both a user-facing interface and a server-side component. Additionally, I have experience in C# for backend development. I also have experience in Flutter for building native mobile applications with the Dart programming language.",
    },
  ];

  const sortedTechs = [
    {
      title: 'Backend',
      techs: [
        {
          name: 'Nodejs',
          image: node
        },
        {
          name: 'MongoDB',
          image: mongo
        },
        {
          name: 'MySQL',
          image: mysql
        },
        {
          name: 'Express',
          image: express
        },
        {
          name: 'Nestjs',
          image: nestjs
        },
        {
          name: 'C#',
          image: csharp
        },
      ]
    },
    {
      title: 'Frontend',
      techs: [
        {
          name: 'Typescript',
          image: typescript
        },
        {
          name: 'Javascript',
          image: javascript
        },
        {
          name: 'React',
          image: react
        },
        {
          name: 'Redux',
          image: redux
        },
        {
          name: 'Html',
          image: html
        },
        {
          name: 'Css',
          image: css
        },
        {
          name: 'Sass',
          image: sass
        },
        {
          name: 'Dart',
          image: dart
        },
        {
          name: 'Flutter',
          image: flutter
        }
      ]
    },
    {
      title: 'Fullstack',
      techs: [
        {
          name: 'Nodejs',
          image: node
        },
        {
          name: 'MongoDB',
          image: mongo
        },
        {
          name: 'MySQL',
          image: mysql
        },
        {
          name: 'Express',
          image: express
        },
        {
          name: 'Nestjs',
          image: nestjs
        },
        {
          name: 'C#',
          image: csharp
        },
        {
          name: 'Typescript',
          image: typescript
        },
        {
          name: 'Javascript',
          image: javascript
        },
        {
          name: 'React',
          image: react
        },
        {
          name: 'Redux',
          image: redux
        },
        {
          name: 'Html',
          image: html
        },
        {
          name: 'Css',
          image: css
        },
        {
          name: 'Sass',
          image: sass
        },
        {
          name: 'Dart',
          image: dart
        },
        {
          name: 'Flutter',
          image: flutter
        }
      ]
    }
  ];

  const onHover = (type) => {
    let foundTech = sortedTechs.find((t) => t.title === type);
    if (foundTech) {
      foundTech.techs.forEach((tech) => {
        document.getElementById(tech.name).classList.add('hovering');
      })
    }
  }

  const onLeave = (type) => {
    let foundTech = sortedTechs.find((t) => t.title === type);
    if (foundTech) {
      foundTech.techs.forEach((tech) => {
        document.getElementById(tech.name).classList.remove('hovering');
      })
    }
  }

  return (
    <section id="services" className="w-full h-screen pt-32">
      <div className="text-center">
        <h1 className="text-6xl">How can i help you?</h1>
        <p className="text-2xl pt-2">Here's some tools that i'm most proficient with</p>
      </div>
      <div className="w-full h-fit bg-neutral-400 bg-opacity-10 rounded mt-16">

        <div className='flex justify-around items-center p-3 flex-wrap'>
          {
            techs.map((tech, index) => (
              <ImageCard key={index} image={tech.image} id={tech.name} />
            ))
          }
        </div>
        <div className='flex justify-center flex-wrap'>
          {
            skills.map((skill, index) => (
              <TextCard key={index} title={skill.title} text={skill.text} onHover={() => onHover(skill.title)} onLeave={() => onLeave(skill.title)} />
            ))
          }
        </div>
      </div>
      <div className='w-full h-fit bg-white bg-opacity-20 mt-60 text-center p-20'>
        <h4 className="font-bold text-lg mb-4">More stats</h4>
        <div className='flex justify-center'>
          <div className='flex flex-col items-center p-3 transition-colors border-r-2 border-black'>
            <p className="text-2xl font-bold">3+ Years of Study</p>
          </div>
          <div className='flex flex-col items-center p-3 transition-colors border-r-2 border-black'>
            <p className="text-2xl font-bold">∞ Lines of code</p>
          </div>
          <div className='flex flex-col items-center p-3 transition-colors'>
            <p className="text-2xl font-bold">1 More cup of coffee</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Services;
