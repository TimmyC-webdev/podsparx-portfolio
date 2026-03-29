import { motion } from 'framer-motion'
import heroImg from '../assets/techlandscape.png'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center" id="hero">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        {/* Overlay so text is readable */}
        <div className="absolute inset-0 bg-base-100/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
           <div className="badge badge-accent badge-outline mb-4">Now Taking On New Projects</div>
<h1 className="text-5xl lg:text-6xl font-bold leading-tight">
  We Build <span className="text-accent">AI-Powered</span> Digital Products
</h1>
<p className="py-6 text-lg text-base-content/70 max-w-lg">
  PodSparx is a boutique tech studio specialising in AI-powered SaaS, modern web apps and iOS experiences - built with precision, designed to scale.
</p>
<div className="flex gap-4 flex-wrap">
  <a href="#projects" className="btn btn-secondary btn-lg rounded-full px-8">See Our Work</a>
  <a href="#contact" className="btn btn-outline btn-lg rounded-full px-8">Start a Project</a>
</div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Hero