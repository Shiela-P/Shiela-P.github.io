const ContactButton = ({url, image, text, text2}) => {
    return ( 
        <div className="contactButton" >
            <a href={url} target="_blank">
                <img src={image} />
                <p>{text}</p>
                <p className="smallText">{text2}</p>
            </a>
            

        </div>
     );
}
 
export default ContactButton;