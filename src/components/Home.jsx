import React, { useEffect } from 'react';
import Skills from './Skills';
import '../styles/scrollEffect.css';  // Include the updated CSS for the fantasy look

const Resume = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.resume-section');
      const triggerHeight = window.innerHeight / 1.2;

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerHeight) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    const scrollableDiv = document.getElementById('scrollable-content');
    scrollableDiv.addEventListener('scroll', handleScroll);
    return () => scrollableDiv.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="scrollable-content" className="scrollable-content">
      <h1 className="open">SCROLL DOWN</h1>
      <h1 className="arrow-down"></h1>
      <br />
      {/* <h1 className="arrow-down"></h1> */}

      <div className="resume-section">
        <h2>Jake Pifer</h2>
        <p>Email: jakepifer3@gmail.com</p>
        <p>GitHub: <a href="https://github.com/Jpifer13" className="link">Jpifer13</a></p>
      </div>

      <div className="resume-section">
        <h2>Previous Work</h2>
        <br />
        <h3>JKBX - Lead Backend Engineer</h3>
        <p>Founding engineer and lead. As a Lead Backend Engineer at JKBX, I spearheaded the development and
          deployment of a robust backend architecture, leveraging my expertise in Python, Node, and AWS. My
          role was pivotal in building the entire infrastructure from the ground up, employing Infrastructure as
          Code (IaC) principles and establishing efficient DevOps pipelines.</p>
        <br />

        <h3>Floating Point Group - Backend Python Engineer</h3>
        <p> Worked among highly skilled engineers to build out an institutional crypto brokerage platform. AWS
          usage with CDK managing all services. Worked in getting core Flowvault, Python, system fleshed out as
          well as contributed heavily to Metamask Institutional integration, Node, with the Flowvault system.</p>
        <br />

        <h3>Lululemon - Lead Backend Engineer</h3>
        <p>Lead backend engineer on Store Comms team developing serverless infrastructure solutions for high
          traffic Voice Over IP systems. High use of AWS’s API Gateway, Lambda, Serverless Application Model,
          S3, Python and Node. Team DevOps engineer leveraging Gitlab CI/CD. As well as working on Reporting
          team creating and managing Event stream logs with Kafka. Leading other junior backend developers
          and working alongside frontend lead.</p>
        <br />

        <h3>Q2 Solutions - Software Engineer</h3>
        <p>Primary API developer and secondary database developer on a large team whose project is to be used
          globally(see below for project details). Started at the ground level of the project and have designed and
          built up the API layer from nothing to MVP, so far. Collaborate with client side developers and other
          teams regularly as my team’s project controls the flow of all DNA/RNA sequencing data company wide.</p>
        <br />

        <h3>TOURtech - Full Stack Developer</h3>
        <p>Primary software developer on a team of three. Built main web application from ground to release one.
          Worked on all aspects of each project from the database to the middleware/api to the client ui.
        </p>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <Skills />
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <br />
        <p>Bachelor of Science in Computer Science, University of North Carolina at Wilmington (2018)</p>
        <p>Concentration: Systems and Modeling</p>
      </div>

      <div className="resume-section">
        <h2>Projects</h2>
        <br />
        <h3>Backstage (JKBX)</h3>
        <p>Developed API and infrastructure for music rights fractionalization platform. Built data aggregation layer and API services interacting with third-party data and microservices for user management, payments, and security transfers.</p>
        <br />

        <h3>Flowvault/MMI (Floating Point Group)</h3>
        <p>Enhanced testing efficiency and coding standards for the crypto asset management service. Worked on Metamask Institutional integration, building services for webhook monitoring and blockchain transaction signing.</p>
        <br />

        <h3>Store Comms VoIP (Lululemon)</h3>
        <p>Designed and implemented infrastructure to replace Lululemon’s landline phones with a VoIP solution. Worked on APIs and services for softphones and usage metrics reporting.</p>
        <br />

        <h3>ADMS (Q2 Solutions)</h3>
        <p>Built a REST application for controlling DNA/RNA data flow and analysis. Developed the API from scratch, integrated with Kafka for pipeline invocation, and supported the Angular-based UI.</p>
        <br />

        <h3>TOURtech Event Coordination Service</h3>
        <p>Full stack developer for an event coordination and device monitoring web application, built using Python, Flask, Angular, and PostgreSQL.</p>
        <br />

        <h3>Qiskit Quantum Computing Test Application</h3>
        <p>Developed a CLI application to build and run quantum circuits using IBMQ and Qiskit. Logs and graphs results using matplotlib.</p>
        <br />

        <h3>Twitch Chat Bot</h3>
        <p>Built a Python chat bot for Twitch streams using IRC that automates responses and tracks user activity for giveaways. Continuously updated and running on my home server.</p>
      </div>
      
      <footer>
        <p>© {new Date().getFullYear()} Jake Pifer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;
