import Image from "next/image";
import Card from "./componants/card";
import Container from "./componants/container";
import Projects from "./componants/projects";
import Testimonials from "./componants/testimonials";
import ScrollToTop from "./lib/ScrollToTop";

export default function Home() {  

  const scrollToTop = () =>{
    window.scrollTo({top: 0,behavior: 'smooth'});
  }
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
            <p>Hey there I'm Joe. I am a UK based, freelance web developer and passionate backend software 
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

            <ul className="conditions">
                <li>*Prices are subject to requirements and are listed as an approximate price.</li>
                <li>**Fees will vary, based on requirements and thrid party integration.</li>
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
            <ul className="conditions">
                <li>*Prices are subject to requirements and are listed as an approximate price.</li>
                <li>**Fees will vary, based on requirements and thrid party integration.</li>
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
            <ul className="conditions">
                <li>*Prices are subject to requirements and are listed as an approximate price.</li>
                <li>**Fees will vary, based on requirements and thrid party integration.</li>
              </ul>
          </Card>
        </div>
      </Container>
      
      <Container id={"projects"}>           
        <h3>Projects</h3>
        <div className="projects-grid">
          <Projects img={"/PRO1.png"}>
            <Image src={"/PRO1.png"} alt="Website Logo Image" width={1000} height={1000} loading="lazy"></Image>                  
              <div className="project-des">
                <a href="https://www.bodyhealthgatwick.co.uk/" target="_blank"><h4>bodyhealthgatwick.co.uk</h4></a>
                <p>Designed for a sports rehabilitation and performance centre, the client wanted a clean, simple and professional 
                  grid-style layout that easily showcased services and key information. We used structured sections, minimal styling, 
                  and strong visual hierarchy to deliver a professional, modern user experience across all devices.</p>
                <br /><p>Built with Javascript, React & NextJs, and hosted on Vercel. We have intergrated Sanity's headless CMS,
                  Google's review and maps API, and Mindbody's booking and payment API.</p>
              </div>
          </Projects>

          <Projects>
            <Image src={"/PRO2.png"} alt="Website Logo Image" width={1000} height={1000} loading="lazy"></Image>  
              <div className="project-des">
                <a href="https://www.scdg.co.uk/" target="_blank"> <h4>scdg.co.uk</h4></a>
                <p>A modern website built for a supply chain consultancy. The client favoured a grid-style, flip-card layout with 
                  a professional, corporate aesthetic, to present services in a clear and engaging way. The ability to contact the client was 
                  another key requirements so we intergrated a booking calander and a enquiry form that are visible are all pages.</p>
                  <br /><p>Built with Javascript, React & NextJs, and hosted on Vercel. We have intergarted Sanity's headless CMS,
                    Cal.com's booking API for calendar bookings, and EmailJs API for the enquiry form.
                  </p>
              </div>
          </Projects>

          <Projects>
          <Image src={"/PRO3.png"} alt="Website Logo Image" width={1000} height={1000} loading="lazy"></Image>  
            <div className="project-des">
              <a href="https://www.cipherpic.com/" target="_blank"><h4>cipherpic.com</h4></a>
              <p>A personal steganography project featuring a fixed sidebar layout and clear, focused navigation. The site combines fully 
                functional steganography tools with an educational learn-to-code feature. It is presented in a structured, minimal interface 
                with a strong focus on security.</p>
                <br /><p>Built with Javascript, React and Vite, and hosted on IONOS. The backend is coded in Java, using Javalin's lightweight
                  framework, supported by a Nginx proxy server and a Cloudflared tunnel. Backend services deployed on a Ubuntu-based Virtual 
                  Dedicated Server (VDS).</p>
            </div>
      

          </Projects>
        </div>
       
      </Container>

      <Container id={"testimonials"}>
            <h3>Testimonials</h3>
            <div className="test-grid"></div>
            <Testimonials>
                <p>"Joe designed my website for my company Body Health Gatwick. He was incredibly easy to work with, I felt like I 
                  could ask him any question and not feel silly through my own lack of knowledge in this field. I knew roughly 
                  what I wanted as I had a very basic WordPress website prior, but it was outdated and didn't show the level of 
                  professionalism that my company has. He took my vision and created a beautiful website that's easy to use and 
                  navigate and has massively boosted my business through careful planning, it allows me to truly show off and 
                  increased my revenue. I would 100% recommend Joe to anyone."</p>
                  
                  <h4 style={{marginTop:"10px"}}>Dani, Owner</h4>
                  <h4>Body Health Gatwick</h4>
                  <Image src={"/logo.jpg"} alt={"Body Health Gatwick logo"} width={90} height={40} style={{marginLeft:"5px"}}></Image>
                  
            </Testimonials>
      </Container> 

      <Container id={"contacts"}>
        <h3>Contact</h3>
        <p>If you're looking to hire a web developer or collaborate on a project, I'd love to hear from you. 
          Reach out and let's discuss how we can work together:</p><br />
          <br />
          <div className="card-grid-contacts">
            <Card>
              <h4>Email</h4>
              <p>joecann22@gmail.com</p>
            </Card>
            <Card>
              <h4>WhatsApp</h4>
              <p style={{textWrap:"nowrap"}}>(+44)7889 634857</p>
            </Card>
          </div>
      </Container> 
      <ScrollToTop/>
    </>
   
  );
}
