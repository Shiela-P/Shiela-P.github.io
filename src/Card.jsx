const Card = ({url, image, title, type, description, skill_1, skill_2, skill_3, skill_4}) => {
    return ( 
        <div className="card">
            <a href={url}>
                <div className="card-image">
                    <img src={image} />
                    <h1>{title}</h1>
                </div>
                <h2>{type}</h2>
                <p>{description} </p>   
            <div className="skills">
                <p>{skill_1}</p>
                <p>{skill_2}</p>
                <p>{skill_3}</p>
                <p>{skill_4}</p>
            </div>
            </a>
            
        </div>
     );
}
 
export default Card;