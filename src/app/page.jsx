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
            developer. My background combines hands-on development with a strong educational foundation in computer science and cyber security, 
            shaping how I approach projects - with performance, stability, and security in mind.</p><br />

            <p>I work closely with clients to understand their goals and turn ideas into practical, scalable solutions. Whether it's 
            a new build or an existing product, I focus on clear communication, thoughtful design, and delivering work that holds up 
            under real-world use. As a web developer, I strive to make the process simple, easy and as straightforward as possible for the client.</p><br />
    
            <p>Outside of coding, I enjoy travelling, hiking, boxin, and winding down with a good film or TV series.</p>
            <br />
            <p>Get in Touch: Joecann22@gmail.com</p>
            <p>BSc International Business Management</p>
            <p>MSc Computer Science with Cyber Security</p>
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
              <li>Unlimited external service integrations</li>
              <li>CMS/blog integration</li>
              <li>User authentication & login</li>
              <li>Full backend & API development</li>
              <li>Support & maintenance: Priority & ongoing</li>
            </ul>
          </Card>
        </div>
      </Container>
      
      <Container id={"projects"}>
        <h3>Projects</h3>
        <div className="image-wrap">
              {arr.map((src,index) => {
                return(  <Image key={index} src={src} alt="Image" width={70} height={70}></Image> )
              })}          
            </div>

          <Projects></Projects>
      </Container>
     
    </>
   
  );
}
