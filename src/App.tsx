import { Brain, Notebook as Robot, Sparkles, ChevronRight, Users, Code, Cpu, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="absolute top-0 w-full z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* <div className="flex items-center space-x-2"> */}
              <div>
              {/* <Brain className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">NeuroBotLabs</span> */}
              <img src="/src/public/logo.jpg" alt="logo" className='h-16 w-52'/>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#programs" className="text-gray-600 hover:text-[#38A7B4]">Programs</a>
              <a href="#about" className="text-gray-600 hover:text-[#38A7B4]">About</a>
              <a href="#contact" className="text-gray-600 hover:text-[#38A7B4]">Contact</a>
            </div>
            <button className="bg-[#38A7B4] text-white px-6 py-2 rounded-full hover:bg-[#39bdcc] transition-colors">
              Enroll Now
            </button>
          </div>
        </nav>

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Engineering Tomorrow's Intelligence
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Empowering young minds with robotics and AI education. Help your child shape the future through hands-on learning and innovation.
                </p>
                <div className="mt-8 flex space-x-4">
                  <button className="bg-[#38A7B4] text-white px-8 py-3 rounded-full hover:bg-[#39bdcc] transition-colors flex items-center">
                    Get Started <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="border-2 border-[#38A7B4] text-[#38A7B4] px-8 py-3 rounded-full hover:bg-[#eaf9fb] transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?auto=format&fit=crop&w=800&q=80"
                  alt="Kids learning robotics"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <Robot className="w-12 h-12 text-[#38A7B4]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">Why Choose NeuroBotLabs?</h2>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-[#38A7B4]" />,
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of experience in robotics and AI."
              },
              {
                icon: <Code className="w-8 h-8 text-[#38A7B4]" />,
                title: "Hands-on Learning",
                description: "Build real robots and AI models through practical, engaging projects."
              },
              {
                icon: <Cpu className="w-8 h-8 text-[#38A7B4]" />,
                title: "Future-Ready Skills",
                description: "Develop critical thinking and problem-solving abilities for the AI age."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-[#c5e8ec] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#2b8e99] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <GraduationCap className="w-16 h-16 text-[#3fd4e4] mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Child's Journey in Technology Today
          </h2>
          <p className="text-[#49d0df] text-xl mb-8 max-w-2xl mx-auto">
            Join our community of young innovators and watch them transform into the tech leaders of tomorrow.
          </p>
          <button className="bg-white text-[#2b8e99] px-8 py-3 rounded-full hover:bg-[#eaf9fb] transition-colors text-lg font-semibold">
            Book a Free Trial Class
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <Brain className="w-6 h-6" />
              <span className="font-bold">NeuroBotLabs</span>
            </div>
            <p className="text-sm">Engineering tomorrow's intelligence through innovative education in robotics and AI.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Beginner Robotics</a></li>
              <li><a href="#" className="hover:text-white">AI Fundamentals</a></li>
              <li><a href="#" className="hover:text-white">Advanced Programming</a></li>
              <li><a href="#" className="hover:text-white">Summer Camps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;