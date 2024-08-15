// src/components/molecules/ProjectCard.tsx
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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, technologies, githubLink }) => (
  <div className="grid grid-cols-3 grid-rows-1 ">
    {/* Imagem ocupa as duas primeiras colunas */}
    <div className="col-span-2 relative">
      <Image
        src={imageSrc}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-full"
        layout="responsive"
      />
    </div>
    <div className="col-span-1 row-span-1 flex items-end border-b-2 border-primary px-2">
      <h3 className="text-3xl mb-2 ">{title}</h3>
    </div>
    <div className="col-span-1 row-span-1"></div>
    <div className="col-span-1 row-span-1"></div>

    {/* Conteúdo ocupa a última coluna */}
    <div className="col-span-1 px-2 my-6 py-4 flex flex-col justify-between ">
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="my-8 flex justify-between items-center flex-wrap">
        <div>
        {technologies.map((tech, index) => (
          <Tag key={index} tech={tech} />
        ))}
        </div>
        <Button href={githubLink} className="self-start">View on GitHub</Button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
