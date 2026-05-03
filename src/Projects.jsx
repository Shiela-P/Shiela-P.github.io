
import Card from "./Card";
import myProjects from "./data/Projects.json";

const Projects = () => {
    return ( 
        <div className="projects">
            <h2>Projects</h2>
            {/* <Card url="https://www.apple.com" image="src/assets/hero.jpg" title="TEST" type="TEST" description="TEST" skill_1="TEST" skill_2="TEST" skill_3="TEST" skill_4="TEST" /> */}
            <div>
                {myProjects.map((item) => (
                    <Card 
                        title={item.title}
                        image={item.image}
                        type={item.type}
                        description={item.description}
                        skill_1={item.skill_1}
                        skill_2={item.skill_2}
                        skill_3={item.skill_3}
                        skill_4={item.skill_4}

                    />
                ))}
            </div>

        </div>

     );
}
 
export default Projects;