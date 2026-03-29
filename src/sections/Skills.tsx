import FadeInSection from '../components/FadeInSection'
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiVuedotjs, SiNodedotjs, SiPython, SiGraphql, SiPostgresql, SiMongodb, SiSwift, SiXcode, SiSupabase, SiFigma } from 'react-icons/si'
import { MdOutlineDesignServices, MdPhoneIphone } from 'react-icons/md'
import { FaCode, FaServer } from 'react-icons/fa'

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode className="text-accent text-2xl" />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "React Native", icon: <SiReact /> },
    ]
  },
  {
    title: "Backend",
    icon: <FaServer className="text-accent text-2xl" />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "REST APIs", icon: null },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ]
  },
  {
    title: "iOS Development",
    icon: <MdPhoneIphone className="text-accent text-2xl" />,
    skills: [
      { name: "SwiftUI", icon: <SiSwift /> },
      { name: "Swift", icon: <SiSwift /> },
      { name: "Xcode", icon: <SiXcode /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "In-App Purchases", icon: null },
      { name: "App Store Connect", icon: null },
    ]
  },
  {
    title: "Design & UX",
    icon: <MdOutlineDesignServices className="text-accent text-2xl" />,
    skills: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Adobe XD", icon: null },
      { name: "User Research", icon: null },
      { name: "Wireframing", icon: null },
      { name: "Prototyping", icon: null },
      { name: "Design Systems", icon: null },
    ]
  },
]

function Skills() {
  return (
    <section className="py-24 bg-base-100" id="skills">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Skills</h2>
            <p className="text-base-content/60 max-w-xl mx-auto text-lg">
              We work across the full stack — from pixel-perfect UIs to scalable cloud infrastructure.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <FadeInSection key={category.title} delay={index * 0.1}>
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-xl mb-4">
                    <span>{category.icon}</span>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="badge badge-lg gap-2 bg-base-content text-base-100 border-none"
                      >
                        {skill.icon && <span className="text-sm">{skill.icon}</span>}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills