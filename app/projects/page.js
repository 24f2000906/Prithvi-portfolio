"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projectsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
  X,
  Cpu,
  Layers,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Info,
} from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <main className={`bg-transparent text-blue-100 px-4 md:px-20 py-10 flex flex-col relative ${selectedProject ? "h-100 overflow-hidden" : ""}`}>

      {/* Page Title & Header */}
      <div className="my-8 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-blue-100 mb-4"
        >
          My Projects
        </motion.h1>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 w-full">
        {projects.map((project, index) => {
          const coverImageSrc = `/projects/${project.folder}/${project.images[0]}`;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                setSelectedProject(project);
                setActiveImageIndex(0);
              }}
              className="bg-slate-900 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col border-2 border-blue-100 shadow-blue-100/30"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <Image
                  src={coverImageSrc}
                  alt={`${project.title} Cover`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Tech Quick Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 z-10">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-950 text-blue-100 text-xs px-2.5 py-1 rounded-full hover:scale-110 duration-300 transform"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="bg-slate-950 text-blue-100 text-xs px-2 py-1 rounded-full hover:scale-110 duration-300 transform">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-100 group-hover:text-blue-300 transition-colors duration-300 mb-1 flex items-center justify-between">
                    {project.title}
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-blue-300" />
                  </h3>
                  <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-blue-100 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs font-bold text-blue-300 border-t border-slate-400/60">
                  <span className="flex items-center gap-1">
                    <Cpu size={14} />
                    <span>{project.techStack.length} Techs integrated</span>
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Details Overlay / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-slate-900 rounded-3xl w-full max-w-5xl h-[85vh] md:h-[75vh] overflow-hidden flex flex-col relative p-6 sm:p-10 inset-shadow-sm inset-shadow-blue-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-blue-100 cursor-pointer rounded-full p-2 inset-shadow-sm inset-shadow-blue-100 bg-slate-900/80 hover:scale-110 transform duration-300"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-100">
                  {selectedProject.title}
                </h2>
                <p className="text-blue-300 font-medium mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-grow overflow-y-scroll lg:overflow-y-visible">

                {/* Slideshow (Left Column) */}
                <div className="lg:col-span-7 w-full flex flex-col gap-4">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg shadow-blue-100/10">
                    <Swiper
                      modules={[Autoplay, Pagination, Navigation]}
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      pagination={{
                        type: 'progressbar',
                        className: 'swiper-pagination-blue'
                      }}
                      navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                      }}
                      loop
                      onSlideChange={(swiper) => setActiveImageIndex(swiper.realIndex)}
                      className="h-full w-full"
                    >
                      {selectedProject.images.map((img, idx) => (
                        <SwiperSlide key={idx} className="relative w-full h-full">
                          <Image
                            className="object-contain"
                            src={`/projects/${selectedProject.folder}/${img}`}
                            alt={`${selectedProject.title} screenshot ${idx + 1}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            priority
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Navigation Buttons Overlay */}
                    <button className="swiper-button-prev-custom absolute left-3 top-1/2 -translate-y-1/2 z-25 text-blue-300 cursor-pointer rounded-full p-2 bg-slate-900/80 border border-slate-800 hover:bg-slate-950 transition duration-300">
                      <ChevronLeft size={20} />
                    </button>
                    <button className="swiper-button-next-custom absolute right-3 top-1/2 -translate-y-1/2 z-25 text-blue-300 cursor-pointer rounded-full p-2 bg-slate-900/80 border border-slate-800 hover:bg-slate-950 transition duration-300">
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Thumbnail Row Indicator */}
                  <div className="flex gap-2 items-center justify-between px-1 text-xs text-blue-300">
                    <span>
                      Screenshot {activeImageIndex + 1} of {selectedProject.images.length}
                    </span>
                    <div className="flex gap-1.5 overflow-x-auto max-w-[70%] py-1">
                      {selectedProject.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeImageIndex ? 'w-6 bg-blue-300' : 'w-1.5 bg-slate-700'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details Section (Right Column) */}
                <div className="lg:col-span-5 flex flex-col gap-6  md:h-3/5 overflow-y-scroll">

                  {/* Tech Stack */}
                  <div className="bg-slate-900 inset-shadow-sm inset-shadow-blue-100 rounded-2xl">
                    <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 py-3 bg-blue-100 px-6 rounded-t-2xl">
                      <Layers size={16} className="text-slate-900" />
                      Technologies Integrated
                    </h4>
                    <div className="flex flex-wrap gap-3 py-4 px-6">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-950 border border-blue-900/40 text-blue-200 text-sm font-semibold px-3 py-1.5 rounded-full hover:scale-110 hover:shadow-blue-50/10 hover:shadow-lg transform duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>


                  {/* What it Does */}
                  <div className="bg-slate-900 inset-shadow-sm inset-shadow-blue-100 rounded-2xl">
                    <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 py-3 bg-blue-100 px-6 rounded-t-2xl">
                      <Info size={16} className="text-slate-900" />
                      About the Project
                    </h4>
                    <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed px-6 py-3">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
