import React from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';
import Tag from '../atoms/Tag';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: React.ReactNode;
  technologies: string[];
  githubLink: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, technologies, githubLink, link }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Imagem ocupa as duas primeiras colunas no desktop, e a coluna inteira no mobile */}
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative group col-span-1 md:col-span-2 overflow-hidden"
    >
      <div className="relative w-full h-0 pb-[56.25%]">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:translate-x-2"
          fill
        />
        {/* Máscara escura que se move da direita para a esquerda */}
        <div className="absolute inset-0 bg-black opacity-30 transition-transform duration-500 ease-in-out group-hover:translate-x-[-100%]"></div>
      </div>
    </a>

    {/* Título do projeto */}
    <div className="col-span-1 md:col-span-1 flex items-end border-b-2 border-primary px-2">
      <h3 className="text-2xl md:text-3xl mb-2">{title}</h3>
    </div>

    <div className="col-span-1 row-span-1"></div>
    <div className="col-span-1 row-span-1"></div>

    {/* Conteúdo ocupa a última coluna */}
    <div className="col-span-1 md:col-span-1 px-2 my-0 md:my-6 py-0 md:py-4 flex flex-col justify-between">
      <p className="text-gray-700 mb-4 text-sm md:text-base">{description}</p>
      <div className="my-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Tag key={index} tech={tech} />
          ))}
        </div>
        <Button href={githubLink} className=" self-end md:self-start">View on GitHub</Button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
