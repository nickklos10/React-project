import { useState } from 'react'
import FaultyTerminal from './components/FaultyTerminal'
import TargetCursor from './components/TargetCursor'

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
      {/* Custom Cursor */}
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={3}
        hideDefaultCursor={true}
      />
      
      {/* Terminal Background */}
      <div className="absolute inset-0">
        <FaultyTerminal 
          tint="#00ddff" 
          brightness={0.5}
          scale={1.5}
          gridMul={[2.5, 1.5]}
          glitchAmount={1.0}
          scanlineIntensity={0.4}
          mouseReact={true}
          mouseStrength={0.5}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen pointer-events-none">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-gradient-to-r from-black/40 via-blue-900/20 to-black/40 backdrop-blur-sm border-b border-cyan-400/30 pointer-events-auto relative">
          {/* Cyber grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
          
          <div className="flex items-center space-x-4 relative z-10">
            <div className="relative">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping"></div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400"></div>
              <div>
                <span className="text-cyan-300 font-mono text-lg font-bold tracking-wider">NICHOLAS_KLOS</span>
                <div className="text-blue-300/80 font-mono text-xs tracking-widest">FDE.PALANTIR.SYS_v2.1.4</div>
              </div>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8 relative z-10">
            <button onClick={() => scrollToSection('overview')} className={`cursor-target font-mono text-sm tracking-wider transition-all duration-300 ${activeSection === 'overview' ? 'text-cyan-300 glow-text' : 'text-blue-400 hover:text-cyan-300 hover:glow-text'} relative`}>
              <span className="relative z-10">OVERVIEW</span>
              {activeSection === 'overview' && <div className="absolute inset-0 bg-cyan-400/10 blur-sm"></div>}
            </button>
            <button onClick={() => scrollToSection('experience')} className={`cursor-target font-mono text-sm tracking-wider transition-all duration-300 ${activeSection === 'experience' ? 'text-cyan-300 glow-text' : 'text-blue-400 hover:text-cyan-300 hover:glow-text'} relative`}>
              <span className="relative z-10">EXPERIENCE</span>
              {activeSection === 'experience' && <div className="absolute inset-0 bg-cyan-400/10 blur-sm"></div>}
            </button>
            <button onClick={() => scrollToSection('capabilities')} className={`cursor-target font-mono text-sm tracking-wider transition-all duration-300 ${activeSection === 'capabilities' ? 'text-cyan-300 glow-text' : 'text-blue-400 hover:text-cyan-300 hover:glow-text'} relative`}>
              <span className="relative z-10">CAPABILITIES</span>
              {activeSection === 'capabilities' && <div className="absolute inset-0 bg-cyan-400/10 blur-sm"></div>}
            </button>
            <button onClick={() => scrollToSection('deployments')} className={`cursor-target font-mono text-sm tracking-wider transition-all duration-300 ${activeSection === 'deployments' ? 'text-cyan-300 glow-text' : 'text-blue-400 hover:text-cyan-300 hover:glow-text'} relative`}>
              <span className="relative z-10">DEPLOYMENTS</span>
              {activeSection === 'deployments' && <div className="absolute inset-0 bg-cyan-400/10 blur-sm"></div>}
            </button>
            <button onClick={() => scrollToSection('contact')} className={`cursor-target font-mono text-sm tracking-wider transition-all duration-300 ${activeSection === 'contact' ? 'text-cyan-300 glow-text' : 'text-blue-400 hover:text-cyan-300 hover:glow-text'} relative`}>
              <span className="relative z-10">CONTACT</span>
              {activeSection === 'contact' && <div className="absolute inset-0 bg-cyan-400/10 blur-sm"></div>}
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <div className="overflow-y-auto h-[calc(100vh-140px)]">
          {/* Hero Section */}
          <section id="overview" className="min-h-screen flex items-center justify-center p-6 relative">
            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/20 rotate-45 animate-pulse"></div>
              <div className="absolute top-40 right-20 w-16 h-16 border border-blue-400/20 rotate-12 animate-bounce" style={{animationDuration: '3s'}}></div>
              <div className="absolute bottom-40 left-20 w-12 h-12 border border-cyan-300/20 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 right-40 w-24 h-24 border border-blue-300/15 rotate-12 animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-12">
                {/* Glitch effect container */}
                <div className="relative inline-block mb-6">
                  <h1 className="text-5xl md:text-7xl font-mono font-bold text-cyan-300 mb-6 drop-shadow-lg tracking-wider relative z-10 glitch-text">
                    NICHOLAS <span className="text-blue-300 cyber-glow">KLOS</span>
                  </h1>
                  {/* Glitch layers */}
                  <h1 className="absolute inset-0 text-5xl md:text-7xl font-mono font-bold text-red-500/30 tracking-wider glitch-layer-1">
                    NICHOLAS <span className="text-blue-300">KLOS</span>
                  </h1>
                  <h1 className="absolute inset-0 text-5xl md:text-7xl font-mono font-bold text-cyan-500/30 tracking-wider glitch-layer-2">
                    NICHOLAS <span className="text-blue-300">KLOS</span>
                  </h1>
                </div>
                
                <div className="relative mb-4">
                  <div className="text-cyan-400/90 font-mono text-xl md:text-2xl mb-4 tracking-wider cyber-glow">
                    &gt; FORWARD_DEPLOYED_ENGINEER
                  </div>
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                </div>
                
                <div className="text-blue-400/80 font-mono text-lg mb-8 tracking-widest">
                  <span className="text-cyan-300">PALANTIR_TECHNOLOGIES</span> | DATA_INTEGRATION_SPECIALIST
                </div>
                
                <div className="max-w-2xl mx-auto relative">
                  {/* Hexagonal border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-cyan-400/5 transform rotate-1"></div>
                  <div className="relative bg-black/20 border border-cyan-400/30 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-cyan-300/90 font-mono text-base leading-relaxed">
                      Mission-critical data integration and analytics deployment specialist. 
                      Transforming complex enterprise data landscapes into actionable intelligence 
                      through Palantir's cutting-edge platforms.
                    </div>
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen flex items-center justify-center p-6 relative">
            {/* Floating data elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-10 left-20 text-cyan-400/30 font-mono text-xs animate-pulse">01010110</div>
              <div className="absolute top-60 right-10 text-blue-400/30 font-mono text-xs animate-pulse" style={{animationDelay: '1s'}}>EXEC_STATUS</div>
              <div className="absolute bottom-40 left-10 text-cyan-300/30 font-mono text-xs animate-pulse" style={{animationDelay: '2s'}}>DATA_STREAM</div>
            </div>

            <div className="max-w-5xl mx-auto pointer-events-auto relative z-10">
              <div className="relative mb-8">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-cyan-300 text-center cyber-glow tracking-wider">
                  &gt; DEPLOYMENT_HISTORY
                </h2>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>
              </div>
              
              <div className="space-y-8">
                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-cyan-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-300/60 transition-all duration-300 data-stream group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-cyan-300 font-mono text-xl font-bold tracking-wide group-hover:glow-text transition-all">Forward Deployed Engineer</h3>
                      <p className="text-blue-300/80 font-mono tracking-wider">Palantir Technologies</p>
                    </div>
                    <div className="text-right">
                      <span className="text-cyan-400/80 font-mono text-sm tracking-widest bg-cyan-400/10 px-2 py-1 rounded">2022 - Present</span>
                      <div className="text-green-400 font-mono text-xs mt-1">STATUS: ACTIVE</div>
                    </div>
                  </div>
                  <ul className="text-cyan-200/80 space-y-2 text-sm font-mono">
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">&gt;</span> Deployed Foundry at 15+ enterprise clients, enabling data-driven decision making</li>
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">&gt;</span> Built custom ontologies and data pipelines processing 100TB+ daily volumes</li>
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">&gt;</span> Led cross-functional teams through complex data integration projects</li>
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">&gt;</span> Developed Python/Typescript applications on Palantir platforms</li>
                  </ul>
                  {/* Corner tech details */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-blue-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-blue-300/60 transition-all duration-300 data-stream group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-blue-300 font-mono text-xl font-bold tracking-wide group-hover:glow-text transition-all">Senior Data Engineer</h3>
                      <p className="text-blue-300/80 font-mono tracking-wider">Previous Enterprise Role</p>
                    </div>
                    <div className="text-right">
                      <span className="text-blue-400/80 font-mono text-sm tracking-widest bg-blue-400/10 px-2 py-1 rounded">2020 - 2022</span>
                      <div className="text-gray-400 font-mono text-xs mt-1">STATUS: ARCHIVED</div>
                    </div>
                  </div>
                  <ul className="text-blue-200/80 space-y-2 text-sm font-mono">
                    <li className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> Architected cloud-native data platforms on AWS/Azure</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> Implemented real-time streaming pipelines with Kafka and Spark</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> Reduced data processing latency by 75% through optimization</li>
                  </ul>
                  {/* Corner tech details */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section id="capabilities" className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-5xl mx-auto pointer-events-auto">
              <div className="relative mb-8">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-cyan-300 text-center cyber-glow tracking-wider">
                  &gt; TECHNICAL_ARSENAL
                </h2>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-cyan-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-300/60 transition-all duration-300 data-stream group">
                  <h3 className="text-cyan-300 font-mono text-xl font-bold mb-4 tracking-wider group-hover:cyber-glow">PALANTIR_PLATFORMS</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-cyan-200 font-mono text-sm tracking-wide">Foundry</span>
                        <span className="text-cyan-400 font-mono text-xs">95%</span>
                      </div>
                      <div className="w-full bg-cyan-900/30 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full relative" style={{width: '95%'}}>
                          <div className="absolute inset-0 bg-cyan-400/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-blue-200 font-mono text-sm tracking-wide">Gotham</span>
                        <span className="text-blue-400 font-mono text-xs">90%</span>
                      </div>
                      <div className="w-full bg-blue-900/30 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full relative" style={{width: '90%'}}>
                          <div className="absolute inset-0 bg-blue-400/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-purple-200 font-mono text-sm tracking-wide">Apollo</span>
                        <span className="text-purple-400 font-mono text-xs">85%</span>
                      </div>
                      <div className="w-full bg-purple-900/30 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full relative" style={{width: '85%'}}>
                          <div className="absolute inset-0 bg-purple-400/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-blue-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-blue-300/60 transition-all duration-300 data-stream group">
                  <h3 className="text-blue-300 font-mono text-xl font-bold mb-4 tracking-wider group-hover:cyber-glow">CORE_TECHNOLOGIES</h3>
                  <div className="grid grid-cols-2 gap-3 text-blue-200/80 font-mono text-sm">
                    <div className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> Python</div>
                    <div className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> TypeScript</div>
                    <div className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> PySpark</div>
                    <div className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> SQL</div>
                    <div className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> React</div>
                    <div className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> Docker</div>
                    <div className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> AWS</div>
                    <div className="flex items-center"><span className="text-blue-400 mr-2">&gt;</span> Kubernetes</div>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>

                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-purple-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-purple-300/60 transition-all duration-300 data-stream group">
                  <h3 className="text-purple-300 font-mono text-xl font-bold mb-4 tracking-wider group-hover:cyber-glow">DATA_ENGINEERING</h3>
                  <div className="grid grid-cols-2 gap-3 text-purple-200/80 font-mono text-sm">
                    <div className="flex items-center"><span className="text-purple-400 mr-2">&gt;</span> ETL/ELT Pipelines</div>
                    <div className="flex items-center"><span className="text-purple-400 mr-2">&gt;</span> Data Modeling</div>
                    <div className="flex items-center"><span className="text-purple-400 mr-2">&gt;</span> Stream Processing</div>
                    <div className="flex items-center"><span className="text-purple-400 mr-2">&gt;</span> Data Governance</div>
                    <div className="flex items-center"><span className="text-purple-400 mr-2">&gt;</span> API Development</div>
                    <div className="flex items-center"><span className="text-purple-400 mr-2">&gt;</span> Performance Tuning</div>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>

                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-green-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-green-300/60 transition-all duration-300 data-stream group">
                  <h3 className="text-green-300 font-mono text-xl font-bold mb-4 tracking-wider group-hover:cyber-glow">DEPLOYMENT_SKILLS</h3>
                  <div className="grid grid-cols-2 gap-3 text-green-200/80 font-mono text-sm">
                    <div className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Client Consulting</div>
                    <div className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Technical Training</div>
                    <div className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Solution Architecture</div>
                    <div className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Project Leadership</div>
                    <div className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Stakeholder Mgmt</div>
                    <div className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Requirements Analysis</div>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Deployments Section */}
          <section id="deployments" className="min-h-screen flex items-center justify-center p-6 relative">
            {/* Binary rain effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
              <div className="absolute top-5 left-5 text-cyan-400/40 font-mono text-xs animate-pulse">DEPLOY_001</div>
              <div className="absolute top-32 right-8 text-green-400/40 font-mono text-xs animate-pulse" style={{animationDelay: '0.5s'}}>SUCCESS</div>
              <div className="absolute bottom-20 left-8 text-blue-400/40 font-mono text-xs animate-pulse" style={{animationDelay: '1s'}}>MISSION_COMPLETE</div>
            </div>

            <div className="max-w-5xl mx-auto pointer-events-auto relative z-10">
              <div className="relative mb-8">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-cyan-300 text-center cyber-glow tracking-wider">
                  &gt; MISSION_DEPLOYMENTS
                </h2>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-cyan-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-300/60 transition-all duration-300 data-stream group">
                  <h3 className="text-cyan-300 font-mono text-lg font-bold mb-3 tracking-wide group-hover:glow-text">FINANCIAL_INTELLIGENCE</h3>
                  <p className="text-cyan-200/80 text-sm mb-3 font-mono leading-relaxed">
                    Deployed Foundry for major financial institution to consolidate 50+ data sources 
                    and enable real-time fraud detection capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded font-mono text-xs border border-cyan-500/30">Foundry</span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded font-mono text-xs border border-cyan-500/30">PySpark</span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded font-mono text-xs border border-cyan-500/30">Real-time</span>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-blue-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-blue-300/60 transition-all duration-300 data-stream group">
                  <h3 className="text-blue-300 font-mono text-lg font-bold mb-3 tracking-wide group-hover:glow-text">SUPPLY_CHAIN_OPTIMIZATION</h3>
                  <p className="text-blue-200/80 text-sm mb-3 font-mono leading-relaxed">
                    Built comprehensive supply chain visibility platform, integrating IoT sensors, 
                    logistics data, and predictive analytics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs border border-blue-500/30">Gotham</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs border border-blue-500/30">IoT</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono text-xs border border-blue-500/30">Analytics</span>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-green-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-green-300/60 transition-all duration-300 data-stream group">
                  <h3 className="text-green-300 font-mono text-lg font-bold mb-3 tracking-wide group-hover:glow-text">HEALTHCARE_ANALYTICS</h3>
                  <p className="text-green-200/80 text-sm mb-3 font-mono leading-relaxed">
                    Implemented patient data integration platform enabling population health insights 
                    across 100+ healthcare facilities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded font-mono text-xs border border-green-500/30">Foundry</span>
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded font-mono text-xs border border-green-500/30">HIPAA</span>
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded font-mono text-xs border border-green-500/30">Population Health</span>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="cursor-target cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-red-400/40 rounded-lg p-6 backdrop-blur-sm hover:border-red-300/60 transition-all duration-300 data-stream group">
                  <h3 className="text-red-300 font-mono text-lg font-bold mb-3 tracking-wide group-hover:glow-text">DEFENSE_INTELLIGENCE</h3>
                  <p className="text-red-200/80 text-sm mb-3 font-mono leading-relaxed">
                    Deployed secure intelligence analysis platform supporting critical 
                    national security operations with multi-classification data handling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded font-mono text-xs border border-red-500/30">Gotham</span>
                    <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded font-mono text-xs border border-red-500/30">Security</span>
                    <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded font-mono text-xs border border-red-500/30">Intelligence</span>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-3xl mx-auto text-center pointer-events-auto">
              <div className="relative mb-8">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-cyan-300 text-center cyber-glow tracking-wider">
                  &gt; ESTABLISH_CONNECTION
                </h2>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>
              </div>
              
              <div className="cyber-border bg-gradient-to-br from-black/50 to-black/30 border border-cyan-400/40 rounded-lg p-8 backdrop-blur-sm relative">
                <p className="text-cyan-300/90 font-mono text-lg mb-8 tracking-wide text-center">
                  Ready to deploy next-generation data solutions? Let's connect.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <a href="mailto:nicholas.klos@example.com" className="cursor-target cyber-border bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500 text-cyan-300 font-mono py-4 px-6 rounded transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-center tracking-wider data-stream">
                    EMAIL_PROTOCOL
                  </a>
                  <a href="https://linkedin.com/in/nicholas-klos" className="cursor-target cyber-border bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500 text-blue-300 font-mono py-4 px-6 rounded transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-center tracking-wider data-stream">
                    LINKEDIN_NETWORK
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="text-cyan-400/80 font-mono text-sm tracking-widest bg-cyan-400/10 inline-block px-4 py-2 rounded border border-cyan-400/30">
                    CLEARANCE_LEVEL: SECRET | AVAILABILITY: IMMEDIATE
                  </div>
                </div>
                
                {/* Status indicators */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="p-4 bg-gradient-to-r from-black/40 via-cyan-900/10 to-black/40 backdrop-blur-sm border-t border-cyan-400/30 pointer-events-auto relative">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
          <div className="flex justify-between items-center text-cyan-400/70 font-mono text-xs max-w-7xl mx-auto relative z-10 tracking-wider">
            <span>&copy; 2024 NICHOLAS_KLOS | FDE_PORTFOLIO_v2.1.4</span>
            <div className="flex items-center space-x-4">
              <span>LAST_DEPLOYMENT: {new Date().toLocaleDateString()}</span>
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">ONLINE</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
