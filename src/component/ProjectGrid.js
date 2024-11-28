import React from 'react';
import ProjectCard from './ProjectCard';
import imgStore from '../assets/store.png'
import siteClinic from '../assets/clinic.png'
import coffee from '../assets/coffee.png'
import rocacier from '../assets/rocacier.png'
import app from '../assets/app.png'

import calc from '../assets/calc.PNG'
import amazon from '../assets/amazon.png'

import Footer from './Footer'
import Header from './Header';

// Données de exemple pour les projets
const projects = [
  {
    id: 3,
    title: "Site E-commerce Wordpress ",
    description: "Création et développement d'une boutique avec wordpress elementor hostinger.",
    image:rocacier,
    link: "https://rocacier.org/"
  },
  {
    id: 1,
    title: "Site E-commerce ",
    description: "boutique en ligne complète avec gestion des produits, des commandes et des utilisateurs..",
    image: imgStore,
    link: "https://storefood-4i27.vercel.app/ogani"
  },

  {
    id: 3,
    title: "Site hopital",
    description: "Site web statique pour présenter les services d'un hôpital.",
    image:siteClinic,
    link: "https://hopital-chi.vercel.app/"
  },
  {
    id: 2,
    title: "Site de coffee",
    description: "Site web statique pour présenter une marque de café.",
    image: coffee ,
    link: "https://web-coffee-nine.vercel.app/"
  },
  {
    id: 3,
    title: "Site E-commerce",
    description: "Site E-commerce general sur afrique.",
    image:amazon,
    link: "https://amazonafric1.youcan.store/"
  },

  {
    id: 2,
    title: "Application de Gestion E-commerce",
    description: "Une application web pour la gestion complète pour un magasin électronique,.",
    image: app ,
    link: "https://dashbord-38yz.vercel.app/"
  },
  {
    id: 3,
    title: "Calculatrice",
    description: "Calculatrice avec javascript.",
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

