import React, { useRef, useState } from 'react'
import {
  FaFileInvoiceDollar,
  FaRocket,
  FaChartLine,
  FaGraduationCap,
} from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import FadeInSection from '../components/FadeInSection'
import invoicerImage from '../assets/invoicerscreenshot.png'
import launchpadImage from '../assets/launchpadscreenshot.png'
import pugletAppImage from '../assets/puglet-appicon.png'
import peekastImage from '../assets/peekast-image.jpg'

type Project = {
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
  image: string | null
  link: string
  imageFit?: 'cover' | 'contain'
}

const projects: Project[] = [
  {
    title: 'Peekast',
    description:
      'An AI-powered freelancer dashboard for managing clients, projects, invoices and revenue in one place. Uses machine learning to forecast future income, track financial goals, generate professional invoices and provide actionable business insights. Built with React, Python, scikit-learn and Supabase.',
    tags: ['React', 'Python', 'Scikit-learn', 'Supabase'],
    icon: <FaChartLine className="text-accent text-5xl" />,
    image: peekastImage,
    link: 'https://peekast.com/',
  },
  {
    title: 'Educational iOS App',
    description:
      'An iOS educational app, includes a freemium model. Designed and developed a playful math adventure app for children, combining game mechanics, animated storytelling, and intuitive educational interactions.',
    tags: ['SwiftUI', 'Supabase', 'iOS', 'In-App Purchases'],
    icon: <FaGraduationCap className="text-accent text-5xl" />,
    image: pugletAppImage,
    imageFit: 'contain',
    link: 'https://apps.apple.com/gb/app/puglet/id6761605649',
  },
  {
    title: 'Invoicer',
    description:
      'A full-stack invoicing tool that creates, sends and tracks professional invoices. Includes client management, payment logging and PDF export - built with React and Supabase.',
    tags: ['React', 'Supabase'],
    icon: <FaFileInvoiceDollar className="text-accent text-5xl" />,
    image: invoicerImage,
    link: 'https://getinvoicer.netlify.app/',
  },
  {
    title: 'Launchpad',
    description:
      'A personal dashboard that tracks projects, revenue goals and weekly focus across multiple ventures. Supports CSV and JSON data export - built with React and Vite.',
    tags: ['React', 'Vite'],
    icon: <FaRocket className="text-accent text-5xl" />,
    image: launchpadImage,
    link: 'https://launchpadtracker.netlify.app',
  },
]

function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return

    const cardWidth = carouselRef.current.offsetWidth / 3

    const newIndex =
      direction === 'left'
        ? Math.max(0, activeIndex - 1)
        : Math.min(projects.length - 1, activeIndex + 1)

    setActiveIndex(newIndex)

    carouselRef.current.scrollTo({
      left: cardWidth * newIndex,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-24 bg-base-200" id="projects">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>

            <p className="text-base-content/60 max-w-xl mx-auto text-lg">
              A selection of projects we're proud of — from startups to
              enterprise.
            </p>
          </div>
        </FadeInSection>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth pb-6 scrollbar-hide"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex-none w-full md:w-1/2 lg:w-1/3 flex"
              >
                <div className="card w-full h-full flex flex-col bg-[#fcfaf7] dark:bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-3xl overflow-hidden border border-[#f1e8dc]/70 dark:border-base-300">

                  {project.image && (
                    <div className="p-5 bg-[#f7f0e7] dark:bg-base-200">
                      <div className="bg-white/80 dark:bg-base-100 p-2 rounded-2xl overflow-hidden shadow-sm">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full rounded-xl transition-all duration-500 hover:opacity-85 hover:scale-[1.02] ${
                            project.imageFit === 'contain'
                              ? 'h-72 object-contain bg-white p-4'
                              : 'h-56 object-cover'
                          }`}
                        />
                      </div>
                    </div>
                  )}

                  <div className="card-body flex flex-col flex-1 bg-[#fcfaf7] dark:bg-base-100">
                    <div className="mb-4">{project.icon}</div>

                    <h3 className="card-title text-xl">{project.title}</h3>

                    <p className="text-base-content/70 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge badge-outline badge-sm bg-white/50 dark:bg-base-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="card-actions justify-end mt-auto pt-6">
                      <a
                        href={project.link}
                        className="btn btn-secondary btn-sm rounded-full px-6"
                      >
                        View Project
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 btn btn-secondary btn-circle shadow-lg z-10"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 btn btn-secondary btn-circle shadow-lg z-10"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

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
                  behavior: 'smooth',
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