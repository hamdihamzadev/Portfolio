import React from 'react';
import ProjectCard from './ProjectCard';
import imgStore from '../assets/store.png'
import siteClinic from '../assets/clinic.png'
import coffee from '../assets/coffee.png'
import decor from '../assets/decor.png'
import app from '../assets/app.png'
import lava from '../assets/lava.png'
import calc from '../assets/calc.PNG'
import amazon from '../assets/amazon.png'

import Footer from './Footer'
import Header from './Header';

// Données de exemple pour les projets
const projects = [
  {
    id: 1,
    title: "Site E-commerce ",
    description: "Un site de commerce électronique moderne avec panier et paiement.",
    image: imgStore,
    link: "https://storefood-4i27.vercel.app/vegetable"
  },
  {
    id: 2,
    title: "Application de Gestion E-commerce",
    description: "Une application web pour la gestion de projets et de tâches.",
    image: app ,
    link: "https://dashbord-38yz.vercel.app/"
  },
  {
    id: 3,
    title: "Site hopital",
    description: "Un blog responsive avec système de gestion de contenu.",
    image:siteClinic,
    link: "https://hopital-chi.vercel.app/"
  },
  {
    id: 2,
    title: "Site de coffee",
    description: "Une application web pour la gestion de projets et de tâches.",
    image: coffee ,
    link: "https://web-coffee-nine.vercel.app/"
  },
  {
    id: 3,
    title: "Site E-commerce",
    description: "Un blog responsive avec système de gestion de contenu.",
    image:decor,
    link: "/projets/blog"
  },
  {
    id: 3,
    title: "Site E-commerce",
    description: "Site E-commerce sur afrique.",
    image:amazon,
    link: "https://amazonafric1.youcan.store/"
  },
  {
    id: 3,
    title: "Calculatrice",
    description: "Un blog responsive avec système de gestion de contenu.",
    image:calc,
    link: "https://calculator-weld-kappa.vercel.app/"
  },
  // Ajoutez d'autres projets ici
];

function ProjectGrid() {
  return (
    <div  className='porfolio' >
       <Header/>
      <div className='container mx-auto px-8 mt-10 mb-8' >
        <div >
          <p className='mb-4 text-2xl font-bold' >Mes projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
}

export default ProjectGrid;

