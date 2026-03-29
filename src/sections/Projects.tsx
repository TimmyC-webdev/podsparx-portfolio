import { useRef, useState } from 'react'
import { FaFileInvoiceDollar, FaRocket, FaChartLine, FaGraduationCap } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import FadeInSection from '../components/FadeInSection'
import invoicerImage from '../assets/invoicerscreenshot.png'
import launchpadImage from '../assets/launchpadscreenshot.png'

const projects = [
  {
    title: "Invoicer",
    description: "A full-stack invoicing tool that creates, sends and tracks professional invoices. Includes client management, payment logging and PDF export - built with React and Supabase.",
    tags: ["React", "Supabase"],
    icon: <FaFileInvoiceDollar className="text-accent text-5xl" />,
    image: invoicerImage,
    link: "https://getinvoicer.netlify.app/"
  },
  {
    title: "Launchpad",
    description: "A personal dashboard that tracks projects, revenue goals and weekly focus across multiple ventures. Supports CSV and JSON data export - built with React and Vite.",
    tags: ["React", "Vite"],
    icon: <FaRocket className="text-accent text-5xl" />,
    image: launchpadImage,
    link: "launchpadtracker.netlify.app"
  },
  {
    title: "Revcast",
    description: "A machine learning web app that analyses uploaded revenue data and generates 3, 6 and 12 month forecasts. Includes goal tracking and trend insights - built with React, Python and scikit-learn.",
    tags: ["React", "Python", "Scikit-learn", "Supabase"],
    icon: <FaChartLine className="text-accent text-5xl" />,
    image: null,
    link: "#"
  },
  {
    title: "Educational iOS App",
    description: "An iOS educational app, includes a freemium model. Coming soon to the App Store.",
    tags: ["SwiftUI", "Supabase", "iOS", "In-App Purchases"],
    icon: <FaGraduationCap className="text-accent text-5xl" />,
    image: null,
    link: "#"
  },
]

function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const cardWidth = carouselRef.current.offsetWidth / 3
    const newIndex = direction === 'left'
      ? Math.max(0, activeIndex - 1)
      : Math.min(projects.length - 1, activeIndex + 1)

    setActiveIndex(newIndex)
    carouselRef.current.scrollTo({
      left: cardWidth * newIndex,
      behavior: 'smooth'
    })
  }

  return (
    <section className="py-24 bg-base-200" id="projects">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-base-content/60 max-w-xl mx-auto text-lg">
              A selection of projects we're proud of — from startups to enterprise.
            </p>
          </div>
        </FadeInSection>

        {/* Carousel with arrows */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 scrollbar-hide"
          >
            {projects.map((project) => (
              <div key={project.title} className="flex-none w-full md:w-1/2 lg:w-1/3">
                <div className="group card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 w-full relative overflow-hidden">

                  {/* Default view */}
                  <div className="card-body transition-opacity duration-300 group-hover:opacity-0">
                    <div className="mb-4">{project.icon}</div>
                    <h3 className="card-title text-xl">{project.title}</h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge badge-outline badge-sm">{tag}</span>
                      ))}
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <a href={project.link} className="btn btn-secondary btn-sm rounded-full px-6">View Demo</a>
                    </div>
                  </div>

                  {/* Hover image overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.image ? (
                      <div className="relative w-full h-full">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                          <a href={project.link} className="btn btn-secondary btn-sm rounded-full px-6">View Project</a>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex flex-col items-center justify-center rounded-2xl gap-4">
                        {project.icon}
                        <p className="text-base-content/60 text-sm">Project coming soon</p>
                        <a href={project.link} className="btn btn-secondary btn-sm rounded-full px-6">View Project</a>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 btn btn-secondary btn-circle shadow-lg z-10"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 btn btn-secondary btn-circle shadow-lg z-10"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!carouselRef.current) return
                const cardWidth = carouselRef.current.offsetWidth / 3
                setActiveIndex(index)
                carouselRef.current.scrollTo({
                  left: cardWidth * index,
                  behavior: 'smooth'
                })
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-accent opacity-100 scale-125'
                  : 'bg-base-content opacity-30 hover:opacity-60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects