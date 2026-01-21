import Image from "next/image";
import Card from "./componants/card";
import Container from "./componants/container";
import Projects from "./componants/projects";

export default function Home() {
  
  const arr = ["/backend/java.png","/backend/nodejs.jpg","/frontend/html5.png","/frontend/css.png","/frontend/js.png",
  "/frontend/react.png","/logos/next.svg","/scripting/bash-logo.png","/scripting/python.svg","/server/javalin.png",
  "/server/linux.png","/server/nginx.svg","/server/springboot.png","/server/ubuntu.png"]
  
  return (
    <>
      <div className="landing">
        <div className="landing-image">
          <Image src={"/IMG1.png"} alt="Joseph Cann Cartoon Image" width={1000} height={1000} loading="eager"></Image>
        </div>

        <div className="landing-text">
          <h1>Joseph Cann</h1>
          <h2>Full Stack Web Developer</h2>
          <p>I turn ideas into sleek, modern, user-friendly web applications. Working closely with clients to deliver solutions 
            that don't just look great, but perform flawlessly, and scale with your needs.</p>
        </div>
      </div>

      <Container id={"about"}>
        <div className="service-container">
          <div className="text-container">
            <h3>About</h3>
            <p>Hey there I'm Joe. I am UK based, freelance web developer and passionate backend software 
            developer. My background combines hands-on development with a strong educational foundation in computer science and cyber security. 
            I strive to ensure my projects are built with performance, stability, and security in mind.</p><br />

            <p>I work closely with clients to understand their goals and turn ideas into practical, scalable solutions. Whether it's 
            a new build or an existing product, I focus on clear communication, thoughtful design, and delivering work that holds up 
            under real-world use. I strive to make the process simple, easy and as straightforward as possible for the non technical client.</p><br />
    
            <p>Outside of development, I enjoy travelling around the world, hiking for the best views or socialising in a cosy pub with friends.              
            I also enjoy boxing and football, with regular visits to the CBS Arena to watch my home club Coventry City FC. To wind down I enjoy 
            watching movies & TV.</p>
            <br />
            <h4 style={{borderBottom:"2px Solid var(--text-color)", width:"fit-content", marginBottom:"5px"}}>Education</h4>
            <ul style={{listStyleType:"none"}}>
              <p>BSc International Business Management</p>
              <p>MSc Computer Science with Cyber Security</p>
            </ul>
          </div>

          <div className="image-container">
            <Image src={"/IMG3.jpeg"} alt="Joseph Cann Cartoon Image" width={1000} height={1000} loading="eager"></Image>
          </div>
        </div>
                
      </Container>

      <Container id={"services"}>
        <h3>Web Services</h3>
        <div className="card-grid">
          <Card>
            <h4>Basic Package: £700 approx*</h4>
            <h5>Plus annual domain & maintenance fees**</h5>
            <ul>
                <li>Domain Management</li>
                <li>Up to 3 web pages</li>
                <li>Basic SEO & analytics setup</li>
                <li>Responsive frontend design</li>
                <li>Support & maintenance: Standard</li>
            </ul>
           
          </Card>
          
          <Card>
            <h4>Standard Package: £1300 approx*</h4>
            <h5>Plus annual domain & maintenance fees**</h5>
            <ul>
              <li>Domain Management</li>
              <li>Up to 7 web pages</li>
              <li>Advanced SEO & analytics setup</li>
              <li>Responsive frontend design</li>
              <li>Up to 3 external service integrations</li>
              <li>CMS/blog integration</li>
              <li>Support & maintenance: Ongoing</li>
            </ul>
          </Card>

          <Card>
            <h4>Premium Package: £Enquire*</h4>
            <h5>Plus annual domain & maintenance fees**</h5>
            <ul>
              <li>Domain Management</li>
              <li>Unlimited web pages</li>
              <li>Advanced SEO & analytics setup</li>
              <li>Responsive frontend design</li>
              <li>Unlimited external service integrations (CMS/blog)</li>
              <li>User authentication & login</li>
              <li>Full backend & API development</li>
              <li>Support & maintenance: Priority & ongoing</li>
            </ul>
          </Card>
        </div>
        <div className="image-wrap" style={{display:"none"}}>
              {arr.map((src,index) => {
                return(  <Image key={index} src={src} alt="Image" width={70} height={70}></Image> )
              })}          
            </div>
      </Container>
      
      <Container id={"projects"}>
        <h3>Projects</h3>
        <div className="projects-grid">
          <Projects img={"/PRO1.png"}>
            <a href="https://www.bodyhealthgatwick.co.uk/" target="_blank"><h4>Body Health Gatwick</h4></a>
            <p>A clean, grid-based website designed for a sports rehabilitation and performance centre. The block-style homepage presents 
              services and key information clearly, using structured sections, minimal styling, and strong visual hierarchy to deliver a 
              professional, modern user experience across all devices.</p>
          </Projects>

          <Projects img={"/PRO2.png"}>
            <a href="https://www.scdg.co.uk/" target="_blank"> <h4>Supply Chain Dynamics Group</h4></a>
            <p>A modern website built for a supply chain consultancy, featuring a flip-card grid layout to present services in a clear 
              and engaging way. Interactive cards and slider functionality ensure content remains accessible and intuitive across desktop 
              and mobile devices, while maintaining a professional, corporate aesthetic.</p>
          </Projects>

          <Projects img={"/PRO3.png"}>
            <a href="https://www.cipherpic.com/" target="_blank"><h4>Project CipherPic</h4></a>
            <p>A personal steganography project featuring a fixed sidebar layout and clear, focused navigation. The site combines fully 
              functional steganography tools with an educational learn-to-code feature, supported by a backend running on Nginx and Javalin, 
              and presented in a structured, minimal interface with a strong focus on security.</p>
          </Projects>
          
        </div>
       
      </Container>

      <Container id={"contacts"}>
        <h3>Contact</h3>
        <p>If you're looking to hire a web developer or collaborate on a project, I'd love to hear from you. 
          Reach out and let's discuss how we can work together:</p><br />
          <p>Email: contact@josephcann.com</p><br />
          <p>WhatsApp: (+44) 07889 634857</p>
      </Container>     
    </>
   
  );
}
