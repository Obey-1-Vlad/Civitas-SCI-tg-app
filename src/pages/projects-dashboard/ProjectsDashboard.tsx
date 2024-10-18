import { Link } from 'react-router-dom';// import { useState } from "react"

import { Header } from '../../components/Header';
import { PROJECTS_IDS } from '../../constants';
import './projects-dashboard.css';

// https://www.zooniverse.org/projects/cfllopes/splus-science-hunters

interface Project {
  id: PROJECTS_IDS;
  title: string;
  description: string;
  bgPath: string; 
  imgPath: string;
  customImgStyles?: string;
}
const PROJECTS: Project[] = [
  {
    id: PROJECTS_IDS.SPACE_1,
    title: 'Galaxies Hunters',
    description: 'Hunt galaxies, asteroids and unusual objects to help scientists',
    bgPath: '/space/space-bg-cut.jpg',
    imgPath: '/space/galaxy-optimised.png'
  },
  {
    id: PROJECTS_IDS.INSURANCE,
    title: 'Insurance Inspectors',
    description: 'Annotate cars damage as insurance expert',
    bgPath: '/insurance/black-table.jpg',
    imgPath: '/insurance/crash-test-car.png',
    customImgStyles: '-top-16 -right-28 w-56 h-auto rotate-[10deg]'
  },
  {
    id: PROJECTS_IDS.OTHER,
    title: 'Recognition Detectives',
    description: 'Annotate faces in the crowd as real detectives',
    bgPath: '/faces/street-crowd.jpg',
    imgPath: '/faces/the-face-small.png',
    customImgStyles: '-top-6 -right-16 w-48 h-auto'
  },
];

export const ProjectsDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-6 overflow-x-hidden">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map(project => (
            <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}

const ProjectCard: React.FC<Project> = ({ id, title, description, imgPath, customImgStyles }) => (
  <Link to={`/projects/${id}`} className="block relative">
    <div 
      className="h-40 bg-black-base shadow-md py-6 px-4 hover:shadow-lg transition-shadow duration-300 relative"
      // style={{
      //   backgroundImage: `url(${bgPath})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'top'
      // }}
    >
      <img 
        src={imgPath} 
        alt={`${title} icon`}
        className={`absolute -top-12 -right-12 w-56 h-auto object-cover pointer-events-none ${customImgStyles}`}
      />

      <div className="">
        {/* <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm pl-4 pr-4 pb-1 mb-2 inline-block max-w-fit"> */}
        <div className="backdrop-filter backdrop-blur-sm pl-4 pr-4 pb-1 mb-2 inline-block max-w-fit">
          <h2 className="text-2xl text-white font-bold break-words">{title}</h2>
        </div>
        <div className="backdrop-filter backdrop-blur-sm pl-4 pr-4 pt-1 pb-2 inline-block max-w-fit">
          <p className="text-base text-white break-words">{description}</p>
        </div>
      </div>
    </div>
  </Link>
);