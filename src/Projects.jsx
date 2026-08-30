
import Card from "./Card";
import myProjects from "./data/Projects.json";

const Projects = () => {
    return ( 
        <div className="projects">
            <h2 id="projects">Projects</h2>
            <div className="cards">
                {myProjects.map((item, i) => (
                    <Card 
                        key={i}
                        title={item.title}
                        image={item.image}
                        type={item.type}
                        description={item.description}
                        skill_1={item.skill_1}
                        skill_2={item.skill_2}
                        skill_3={item.skill_3}
                        skill_4={item.skill_4}
                        url={item.url}
                    />
                ))}
            </div>

        </div>

     );
}
 
export default Projects;