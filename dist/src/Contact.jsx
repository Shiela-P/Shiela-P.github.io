import ContactButton from "./ContactButton";

const Contact = () => {
    return ( 
        <div className="contact">
            <h2 id="connect">Contact Me</h2>
            <div className="buttons">
                <ContactButton url="mailto:Shiela.Peters@icloud.com" image="src/assets/mail.png" text="Email" text2="Shiela.Peters@icloud.com"/>
                <ContactButton url="https://github.com/Shiela-P" image="src/assets/linkedin.png" text="Linkedin" text2="linkedin.com/in/shielafpeters"/>
                <ContactButton url="https://www.linkedin.com/in/shielafpeters" image="src/assets/github.png" text="GitHub" text2="github.com/Shiela-P"/>
            </div>
            
        </div>
     );
}
 
export default Contact;