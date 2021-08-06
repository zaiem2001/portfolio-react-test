import "./contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="cLeft">
          <img src="assets/shake.svg" alt="svg" />
        </div>
        <div className="cRight">
          <h1>Contact Me</h1>
          <form
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="text" placeholder="Enter Your Email." />
            <textarea placeholder="Enter Your Message." />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
       <a href="#intro"><img className="topArrow" src="assets/arrow.png" alt="arrow" /></a> 
    </div>
  );
}
