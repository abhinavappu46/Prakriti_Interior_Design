
import '../styles/PrakritiProjects.css';
import livingImg from '../assets/Living.png';
import bedroomImg from '../assets/bedroom.png';
import screenImg from '../assets/screen.png';
import livingRoomImg from '../assets/living_room.png';
import newImg from '../assets/new.jpg';

function PrakritiProjects() {
  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Villa",
      category: "Residential",
      image: livingImg,
    },
    {
      id: 2,
      title: "Luxury Urban Apartment",
      category: "Interior Architecture",
      image: bedroomImg,
    },
    {
      id: 3,
      title: "Boutique Corporate Office",
      category: "Commercial Space",
      image: screenImg,
    },
    {
      id: 4,
      title: "Serene Coastal Retreat",
      category: "Residential",
      image: livingRoomImg,
    },
    {
      id: 5,
      title: "Contemporary Heritage",
      category: "Renovation",
      image: newImg,
    }
  ];

  return (
    <section className="ProjectsContainer" id="Projects">
      <div className="ProjectsHeader">
        <h2>Curated Portfolio</h2>
        <p>A selection of our most distinguished projects, blending aesthetic brilliance with unparalleled functionality.</p>
      </div>

      <div className="ProjectsGrid">
        {projects.map((project) => (
          <div key={project.id} className="ProjectCard">
            <img src={project.image} alt={project.title} className="ProjectImage" />
            <div className="ProjectOverlay">
              <div className="ProjectInfo">
                <span className="ProjectCategory">{project.category}</span>
                <h3 className="ProjectTitle">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrakritiProjects;
