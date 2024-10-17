import { Link } from 'react-router-dom';// import { useState } from "react"
import './projects-dashboard.css';

// https://www.zooniverse.org/projects/cfllopes/splus-science-hunters

interface Project {
  id: number;
  title: string;
  description: string;
}
const PROJECTS: Project[] = [
  {id: 1, title: 'Galaxies Hunters', description: 'Galaxies Hunters description'},
  {id: 2, title: 'Commercial', description: 'Commercial description'},
  {id: 3, title: 'One more', description: 'One more description'},
];

export const ProjectsDashboard = () => {


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Projects Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map(project => (
            <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}

const ProjectCard: React.FC<Project> = ({ id, title, description }) => (
  <Link to={`/projects/${id}`} className="block relative">
    <div 
      className="h-36 bg-black-base shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      style={{
        backgroundImage: `url('/space/space-bg-cut.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h2 className="text-xl text-white font-bold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
    <img 
      src={`/space/galaxy-optimised.png`} 
      alt={`${title} icon`}
      className="absolute -top-16 -right-4 w-56 h-48 object-cover"
    />
  </Link>
);