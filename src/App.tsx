import { useState } from 'react'
import FaultyTerminal from './components/FaultyTerminal'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Terminal Background */}
      <div className="absolute inset-0">
        <FaultyTerminal 
          tint="#0066ff" 
          brightness={0.6}
          scale={1.5}
          gridMul={[2.5, 1.5]}
          glitchAmount={0.8}
          scanlineIntensity={0.3}
          mouseReact={true}
          mouseStrength={0.4}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen pointer-events-none">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-black/30 backdrop-blur-sm border-b border-blue-500/30 pointer-events-auto">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div>
              <span className="text-blue-400 font-mono text-lg font-bold">NICHOLAS_KLOS</span>
              <span className="text-blue-300/70 font-mono text-xs ml-3">FDE.PALANTIR.SYS</span>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-6">
            <button onClick={() => scrollToSection('overview')} className={`font-mono text-sm transition-colors ${activeSection === 'overview' ? 'text-blue-300' : 'text-blue-400 hover:text-blue-300'}`}>OVERVIEW</button>
            <button onClick={() => scrollToSection('experience')} className={`font-mono text-sm transition-colors ${activeSection === 'experience' ? 'text-blue-300' : 'text-blue-400 hover:text-blue-300'}`}>EXPERIENCE</button>
            <button onClick={() => scrollToSection('capabilities')} className={`font-mono text-sm transition-colors ${activeSection === 'capabilities' ? 'text-blue-300' : 'text-blue-400 hover:text-blue-300'}`}>CAPABILITIES</button>
            <button onClick={() => scrollToSection('deployments')} className={`font-mono text-sm transition-colors ${activeSection === 'deployments' ? 'text-blue-300' : 'text-blue-400 hover:text-blue-300'}`}>DEPLOYMENTS</button>
            <button onClick={() => scrollToSection('contact')} className={`font-mono text-sm transition-colors ${activeSection === 'contact' ? 'text-blue-300' : 'text-blue-400 hover:text-blue-300'}`}>CONTACT</button>
          </nav>
        </header>

        {/* Main Content */}
        <div className="overflow-y-auto h-[calc(100vh-140px)]">
          {/* Hero Section */}
          <section id="overview" className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-12">
                <h1 className="text-5xl md:text-7xl font-mono font-bold text-blue-400 mb-6 drop-shadow-lg">
                  NICHOLAS <span className="text-blue-300">KLOS</span>
                </h1>
                <div className="text-blue-300/90 font-mono text-xl md:text-2xl mb-4">
                  &gt; FORWARD_DEPLOYED_ENGINEER
                </div>
                <div className="text-blue-400/70 font-mono text-lg mb-8">
                  PALANTIR_TECHNOLOGIES | DATA_INTEGRATION_SPECIALIST
                </div>
                <div className="max-w-2xl mx-auto text-blue-300/80 font-mono text-base leading-relaxed">
                  Mission-critical data integration and analytics deployment specialist. 
                  Transforming complex enterprise data landscapes into actionable intelligence 
                  through Palantir's cutting-edge platforms.
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pointer-events-auto">
                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-blue-400 font-mono text-lg font-bold mb-2">FOUNDRY</div>
                  <div className="text-blue-300/70 text-sm">Data Integration</div>
                </div>
                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-blue-400 font-mono text-lg font-bold mb-2">GOTHAM</div>
                  <div className="text-blue-300/70 text-sm">Intelligence Analysis</div>
                </div>
                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-blue-400 font-mono text-lg font-bold mb-2">APOLLO</div>
                  <div className="text-blue-300/70 text-sm">Model Operations</div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-5xl mx-auto pointer-events-auto">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-blue-400 mb-8 text-center">
                &gt; DEPLOYMENT_HISTORY
              </h2>
              
              <div className="space-y-8">
                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-blue-400 font-mono text-xl font-bold">Forward Deployed Engineer</h3>
                      <p className="text-blue-300/80 font-mono">Palantir Technologies</p>
                    </div>
                    <span className="text-blue-400/60 font-mono text-sm">2022 - Present</span>
                  </div>
                  <ul className="text-blue-300/70 space-y-2 text-sm">
                    <li>• Deployed Foundry at 15+ enterprise clients, enabling data-driven decision making</li>
                    <li>• Built custom ontologies and data pipelines processing 100TB+ daily volumes</li>
                    <li>• Led cross-functional teams through complex data integration projects</li>
                    <li>• Developed Python/Typescript applications on Palantir platforms</li>
                  </ul>
                </div>

                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-blue-400 font-mono text-xl font-bold">Senior Data Engineer</h3>
                      <p className="text-blue-300/80 font-mono">Previous Enterprise Role</p>
                    </div>
                    <span className="text-blue-400/60 font-mono text-sm">2020 - 2022</span>
                  </div>
                  <ul className="text-blue-300/70 space-y-2 text-sm">
                    <li>• Architected cloud-native data platforms on AWS/Azure</li>
                    <li>• Implemented real-time streaming pipelines with Kafka and Spark</li>
                    <li>• Reduced data processing latency by 75% through optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section id="capabilities" className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-5xl mx-auto pointer-events-auto">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-blue-400 mb-8 text-center">
                &gt; TECHNICAL_ARSENAL
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-blue-400 font-mono text-xl font-bold mb-4">PALANTIR_PLATFORMS</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-blue-300 font-mono text-sm">Foundry</div>
                      <div className="w-full bg-blue-900/30 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-300 font-mono text-sm">Gotham</div>
                      <div className="w-full bg-blue-900/30 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-300 font-mono text-sm">Apollo</div>
                      <div className="w-full bg-blue-900/30 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-blue-400 font-mono text-xl font-bold mb-4">CORE_TECHNOLOGIES</h3>
                  <div className="grid grid-cols-2 gap-3 text-blue-300/80 font-mono text-sm">
                    <div>• Python</div>
                    <div>• TypeScript</div>
                    <div>• PySpark</div>
                    <div>• SQL</div>
                    <div>• React</div>
                    <div>• Docker</div>
                    <div>• AWS</div>
                    <div>• Kubernetes</div>
                  </div>
                </div>

                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-blue-400 font-mono text-xl font-bold mb-4">DATA_ENGINEERING</h3>
                  <div className="grid grid-cols-2 gap-3 text-blue-300/80 font-mono text-sm">
                    <div>• ETL/ELT Pipelines</div>
                    <div>• Data Modeling</div>
                    <div>• Stream Processing</div>
                    <div>• Data Governance</div>
                    <div>• API Development</div>
                    <div>• Performance Tuning</div>
                  </div>
                </div>

                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-blue-400 font-mono text-xl font-bold mb-4">DEPLOYMENT_SKILLS</h3>
                  <div className="grid grid-cols-2 gap-3 text-blue-300/80 font-mono text-sm">
                    <div>• Client Consulting</div>
                    <div>• Technical Training</div>
                    <div>• Solution Architecture</div>
                    <div>• Project Leadership</div>
                    <div>• Stakeholder Mgmt</div>
                    <div>• Requirements Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deployments Section */}
          <section id="deployments" className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-5xl mx-auto pointer-events-auto">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-blue-400 mb-8 text-center">
                &gt; MISSION_DEPLOYMENTS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-blue-400 font-mono text-lg font-bold mb-3">FINANCIAL_INTELLIGENCE</h3>
                  <p className="text-blue-300/70 text-sm mb-3">
                    Deployed Foundry for major financial institution to consolidate 50+ data sources 
                    and enable real-time fraud detection capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">Foundry</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">PySpark</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">Real-time</span>
                  </div>
                </div>

                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-blue-400 font-mono text-lg font-bold mb-3">SUPPLY_CHAIN_OPTIMIZATION</h3>
                  <p className="text-blue-300/70 text-sm mb-3">
                    Built comprehensive supply chain visibility platform, integrating IoT sensors, 
                    logistics data, and predictive analytics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">Gotham</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">IoT</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">Analytics</span>
                  </div>
                </div>

                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-blue-400 font-mono text-lg font-bold mb-3">HEALTHCARE_ANALYTICS</h3>
                  <p className="text-blue-300/70 text-sm mb-3">
                    Implemented patient data integration platform enabling population health insights 
                    across 100+ healthcare facilities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">Foundry</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">HIPAA</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">Population Health</span>
                  </div>
                </div>

                <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-blue-400 font-mono text-lg font-bold mb-3">DEFENSE_INTELLIGENCE</h3>
                  <p className="text-blue-300/70 text-sm mb-3">
                    Deployed secure intelligence analysis platform supporting critical 
                    national security operations with multi-classification data handling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">Gotham</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">Security</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs">Intelligence</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-3xl mx-auto text-center pointer-events-auto">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-blue-400 mb-8">
                &gt; ESTABLISH_CONNECTION
              </h2>
              
              <div className="bg-black/40 border border-blue-500/30 rounded-lg p-8 backdrop-blur-sm">
                <p className="text-blue-300/80 font-mono text-lg mb-8">
                  Ready to deploy next-generation data solutions? Let's connect.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <a href="mailto:nicholas.klos@example.com" className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500 text-blue-400 font-mono py-4 px-6 rounded transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    EMAIL_PROTOCOL
                  </a>
                  <a href="https://linkedin.com/in/nicholas-klos" className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500 text-blue-400 font-mono py-4 px-6 rounded transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    LINKEDIN_NETWORK
                  </a>
                </div>
                
                <div className="text-blue-400/60 font-mono text-sm">
                  CLEARANCE_LEVEL: SECRET | AVAILABILITY: IMMEDIATE
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="p-4 bg-black/30 backdrop-blur-sm border-t border-blue-500/30 pointer-events-auto">
          <div className="flex justify-between items-center text-blue-400/60 font-mono text-xs max-w-7xl mx-auto">
            <span>&copy; 2024 NICHOLAS_KLOS | FDE_PORTFOLIO</span>
            <span>LAST_DEPLOYMENT: {new Date().toLocaleDateString()}</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
