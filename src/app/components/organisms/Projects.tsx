/* eslint-disable react/no-unescaped-entities */
// src/components/organisms/ProjectsSection.tsx
import React from 'react';
import ProjectCard from '../molecules/ProjectCard';

const projects = [
  {
    imageSrc: '/blacksquare.png',
    title: 'Black Square',
    description: 'A modern e-commerce platform crafted with Next.js for fast server-side rendering, ensuring quick load times and excellent SEO. Styled using Tailwind CSS, the design is both responsive and visually appealing. TypeScript enhances code safety and maintainability, while Prisma streamlines efficient database interactions. Deployed on Vercel, the site benefits from high performance and reliability. This project exemplifies how leveraging cutting-edge technologies and design decisions can create an exceptional and user-friendly online shopping experience.',
    technologies: ['NEXT.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubLink: 'https://github.com/user/project-one',
    link: 'https://blacksquare.vercel.app/',
  },
  {
    imageSrc: '/mithrilmap.png',
    title: 'Mithril Map',
    description: (
      <>
        <p>Tolkien Reading Journey Tracker is a React application designed to track reading progress through Tolkien’s works. It leverages React’s component-based architecture to modularize the code and enhance reusability, using Hooks like useState and useEffect for efficient local state and side effects management.</p>
        <p>The Context API is utilized for global state management, handling features such as authentication and reading progress, while React Router provides seamless page navigation based on URLs.</p>
        <p>The application adopts a modern approach by using functional components, reflecting React’s emphasis on simplicity and scalability. Firebase Authentication is integrated for secure user login and authentication, and Firebase Firestore serves as the NoSQL database for real-time data synchronization, such as tracking reading progress through chapters.</p>
      </>
    ),
    technologies: ['React.js', 'JavaScript', 'CSS', 'Firebase'],
    githubLink: 'https://github.com/user/project-two',
    link: 'https://mithrilmap.netlify.app/', 
  },
  {
    imageSrc: '/superbock.png',
    title: 'Super Bock Group',
    description: (
      <>
        <p>The "Super Bock Group" project was developed during my time at LPM Comunicação, aiming to create a website for Portugal's largest beverage company. The team utilized technologies such as HTML, CSS, JavaScript, PHP, and WordPress with Advanced Custom Fields (ACF) to build a dynamic and customized platform. PHP and ACF enabled efficient site management, allowing Super Bock Group to update product and campaign information in real time. Figma was used to ensure that the design accurately reflected the company's visual identity, providing a consistent user experience aligned with the brand. This project showcased collaborative teamwork and the application of advanced technologies to effectively promote the company's products and brands.</p>
      </>
    ),
    technologies: ['PHP', 'JavaScript', 'CSS', 'WordPress'],
    githubLink: 'https://github.com/user/project-three',
    link: 'https://superbockgroup.com/', 
  },
];

const ProjectsSection: React.FC = () => (
  <section className="py-12" id="projects">
    <h2 className="text-4xl text-center my-16 md:my-24">Projects.</h2>
    <div className="grid grid-cols-1 gap-24">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageSrc={project.imageSrc}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          githubLink={project.githubLink}
          link={project.link || undefined} // Passa undefined se o link estiver vazio
        />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
