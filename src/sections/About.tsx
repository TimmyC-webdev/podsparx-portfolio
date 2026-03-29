import FadeInSection from '../components/FadeInSection'
import avatar from '../assets/avatar.png'


const stats = [
  { label: "Projects Delivered", value: "3+" },
  { label: "Technologies", value: "10+" },
  { label: "App Store", value: "2026" },
  { label: "Response Time", value: "24h" },
]

function About() {
  return (
    <section className="py-24 bg-base-100" id="about">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-base-content/60 max-w-xl mx-auto text-lg">
              We are a passionate team of engineers and designers building software that matters.
            </p>
          </div>
        </FadeInSection>

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
         <div className="lg:w-1/2 w-full">
  <FadeInSection delay={0.1}>
    <img 
      src={avatar} 
      alt="About Podsparx" 
      className="w-full aspect-square object-cover rounded-2xl"
    />
  </FadeInSection>
</div>
          <FadeInSection delay={0.2}>
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold">Who We Are</h3>
             <p className="text-base-content/70 text-lg leading-relaxed">
  PodSparx is a boutique tech studio specialising in AI-powered SaaS products, modern web applications and iOS experiences. We help founders and businesses turn bold ideas into polished, scalable digital products.
</p>
<p className="text-base-content/70 text-lg leading-relaxed">
  From intelligent automation to beautiful interfaces - we combine cutting-edge AI with thoughtful design and solid engineering to deliver products that users love and businesses rely on.
</p>
              <a href="#contact" className="btn btn-secondary rounded-full">Work With Us</a>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="stat bg-base-200 rounded-2xl text-center">
                <div className="stat-value text-accent">{stat.value}</div>
                <div className="stat-desc text-base font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>

      </div>
    </section>
  )
}

export default About