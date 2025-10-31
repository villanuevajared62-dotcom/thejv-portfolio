import { useState } from 'react';

const projects = [
  { id: 1, title: 'Project 1: Weather App', description: 'A responsive app showing real-time weather using API.', image: 'https://via.placeholder.com/400x200?text=Weather+App', link: 'https://example.com/project1' },
  { id: 2, title: 'Project 2: Todo List', description: 'Full-stack task manager with local storage.', image: 'https://via.placeholder.com/400x200?text=Todo+List', link: 'https://example.com/project2' },
  // Add more: { id: 3, title: 'Your Project', description: '...', image: 'your-img', link: 'your-link' },
];

function App() {
  const [showIntro, setShowIntro] = useState(true); // Start with intro visible

  const handleContinue = () => {
    setShowIntro(false); // Hide intro, show portfolio
  };

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-bounce">Hi, I'm Jared</h1>
        <p className="text-xl md:text-2xl mb-12 opacity-90">Welcome to my world of code and creativity.</p>
        <button
          onClick={handleContinue}
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Visit My Profile →
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Robert Jared</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm Robert Jared</h2>
          <p className="text-xl mb-8">Full-Stack Developer & Designer. Building cool stuff with code.</p>
          <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">See My Work</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-500 font-semibold hover:underline">View Live →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600 mb-8">I'm passionate about creating user-friendly web experiences. With 2+ years in JS and React, I've worked on apps for startups and freelanced designs.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500">LinkedIn</a>
            <a href="#" className="text-gray-500">GitHub</a>
            <a href="#" className="text-pink-500">Twitter</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mb-8">Shoot me an email: robert@example.com</p>
          <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded-md"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Robert Jared. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;