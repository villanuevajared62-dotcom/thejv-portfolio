import { useState, useEffect } from 'react';

const projects = [
  { id: 1, title: 'Weather App', description: 'Real-time weather dashboard with API integration.', image: 'https://via.placeholder.com/400x200?text=Weather+App', link: 'https://example.com/project1' },
  { id: 2, title: 'Todo List Manager', description: 'Full-stack task app with local storage and drag-drop.', image: 'https://via.placeholder.com/400x200?text=Todo+List', link: 'https://example.com/project2' },
  { id: 3, title: 'E-Commerce Site', description: 'Online store with Stripe payments and React Router.', image: 'https://via.placeholder.com/400x200?text=E-Commerce', link: 'https://example.com/project3' },
];

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');

  useEffect(() => {
    if (showIntro) {
      const fullText = "Welcome to my world of code and creativity.";
      let i = 0;
      const timer = setInterval(() => {
        setTypewriterText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(timer);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [showIntro]);

  const handleContinue = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-bounce drop-shadow-2xl bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Hi, I'm Jared</h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 typewriter-text max-w-md">{typewriterText}</p>
          <button
            onClick={handleContinue}
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Visit My Profile →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-10 border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Robert Jared</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Home</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Projects</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            <img src="https://via.placeholder.com/150?text=Your+Photo" alt="Robert Jared" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
            <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Hi, I'm Robert Jared</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">Full-Stack Developer & Designer. Building cool stuff with code and creativity.</p>
            <a href="#projects" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              See My Work →
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 drop-shadow-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group bg-gradient-to-br from-white to-indigo-50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline transition-colors">
                    View Live →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-gray-100 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 drop-shadow-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">I'm passionate about creating user-friendly web experiences. With 2+ years in JS and React, I've worked on apps for startups and freelanced designs. Let's collaborate!</p>
          <div className="flex justify-center space-x-8 text-xl">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors transform hover:scale-110 shadow-lg p-3 rounded-full bg-white/80 backdrop-blur">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors transform hover:scale-110 shadow-lg p-3 rounded-full bg-white/80 backdrop-blur">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors transform hover:scale-110 shadow-lg p-3 rounded-full bg-white/80 backdrop-blur">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 drop-shadow-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</h2>
          <p className="text-gray-600 mb-8 text-lg">Shoot me an email: robert@example.com</p>
          <form className="max-w-md mx-auto space-y-4 bg-white rounded-2xl p-6 shadow-lg">
            <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" required />
            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" required />
            <textarea placeholder="Your Message" rows="4" className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none" required></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-8 text-center">
        <p className="text-gray-400">© 2025 Robert Jared. Built with React & Tailwind. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;