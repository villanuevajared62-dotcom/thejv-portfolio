// Sample projects—lagyan mo ng real mo!
const projects = [
  { id: 1, title: 'Your Project 1', description: 'Brief desc.', image: 'https://via.placeholder.com/400x200?text=Project+1', link: 'https://your-link.com' },
  { id: 2, title: 'Your Project 2', description: 'Brief desc.', image: 'https://via.placeholder.com/400x200?text=Project+2', link: 'https://your-link.com' },
];

function App() {
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

      {/* Home */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm Robert Jared</h2>
          <p className="text-xl mb-8">Full-Stack Developer & Designer.</p>
          <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">See My Work</a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-500 hover:underline">View Live →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600 mb-8">Passionate dev with 2+ years in JS/React.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500">LinkedIn</a> | <a href="#" className="text-gray-500">GitHub</a> | <a href="#" className="text-pink-500">Twitter</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mb-8">robert@example.com</p>
          <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded-md"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Robert Jared. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;