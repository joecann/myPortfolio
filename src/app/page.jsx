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
          <p>I turn ideas into sleek, user-friendly web applications, building modern frontends with React and Next.js. 
            I work closely with clients to deliver solutions that look great, perform flawlessly, and scale with your needs.</p>
        </div>
      </div>

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
              <li>E-commerce</li>
              <li>Full backend & API development</li>
              <li>Support & maintenance: Priority & ongoing</li>
            </ul>
          </Card>
        </div>
        <ul>
          <li style={{listStyleType:"none"}} className="tc">*Prices are subject to requirements and are listed as an approximate price.</li>
          <li style={{listStyleType:"none"}} className="tc">**Fees will vary, based on requirements and thrid party integration.</li>
        </ul>
      </Container>

      <Container id={"about"}>
        <div className="service-container">
          <div className="text-container">
            <h3>About</h3>
            <p>I'm a freelance full-stack developer building well-designed, reliable software for the web. My background combines 
            hands-on development with a strong foundation in computer science and cyber security, shaping how I approach projects 
            - with performance, stability, and security in mind.</p><br />
            <p>I work across the stack, creating modern frontends with <strong>React and Next.js</strong> and building dependable 
            back-end systems using <strong>Java and Python</strong>. I’m comfortable scripting with <strong>Bash</strong>, running 
            services with <strong>Nginx</strong>, <strong>Javalin</strong>, and <strong>Spring Boot</strong>, and working in <strong>
            Linux and Ubuntu</strong> environments from development through to deployment.</p><br />
            <p>I work closely with clients to understand their goals and turn ideas into practical, scalable solutions. Whether it's 
              a new build or an existing product, I focus on clear communication, thoughtful design, and delivering work that holds up 
              under real-world use.</p><br />
            <p>Outside of coding, I enjoy <strong>travelling</strong>, <strong>hiking</strong>, <strong>boxing</strong>, and winding down 
            with a good <strong>film or TV series</strong>.</p>
            <br />
            <p>Get in Touch: Joecann22@gmail.com</p>
          </div>

          <div className="image-container">
            <Image src={"/IMG1.png"} alt="Joseph Cann Cartoon Image" width={1000} height={1000} loading="eager"></Image>
          </div>
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
