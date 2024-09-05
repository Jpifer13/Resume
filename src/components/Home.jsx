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
                <p>Phone: 828-406-4058</p>
                <p>Email: jakepifer3@gmail.com</p>
                <p>GitHub: <a href="https://github.com/Jpifer13" className="link">Jpifer13</a></p>
            </div>

            <div className="resume-section">
                <h2>Previous Work</h2>
                <br />
                <h3>JKBX (Feb/2023 - Feb/2024) - Lead Backend Engineer</h3>
                <p>As a founding engineer and lead backend developer at JKBX, I built the entire backend architecture, utilizing Python, Node, and AWS. I developed Infrastructure as Code (IaC) and established efficient DevOps pipelines to support the entire system.</p>
                <br />

                <h3>Floating Point Group (Apr/2022 - Nov/2022) - Backend Python Engineer</h3>
                <p>Contributed to building an institutional crypto brokerage platform with AWS and CDK. I also integrated Metamask Institutional for Flowvault, contributing to institutional crypto asset management services.</p>
                <br />

                <h3>Lululemon (July/2021 - Apr/2022) - Lead Backend Engineer</h3>
                <p>Developed serverless infrastructure for high-traffic VoIP systems using AWS services like API Gateway and Lambda. Led a team of junior developers and worked as a DevOps engineer.</p>
                <br />

                <h3>Q2 Solutions (Nov/2019 - July/2021) - Software Engineer</h3>
                <p>Primary API developer for global DNA/RNA sequencing projects. Built the API layer for data flow control in collaboration with frontend developers and other teams.</p>
                <br />

                <h3>TOURtech (Dec/2018 - Aug/2019) - Full Stack Developer</h3>
                <p>Primary developer on a small team, building web applications from the ground up, working across the full stack from database to client UI.</p>
            </div>

            <div className="resume-section">
                <h2>Skills</h2>
                <Skills />
            </div>

            <div className="resume-section">
                <h2>Education</h2>
                <p>Bachelor of Science in Computer Science, University of North Carolina at Wilmington (2018)</p>
                <p>Concentration: Systems and Modeling</p>
            </div>

            <div className="resume-section">
                <h2>Projects</h2>
                <h3>Backstage (JKBX)</h3>
                <p>Developed API and infrastructure for music rights fractionalization platform. Built data aggregation layer and API services interacting with third-party data and microservices for user management, payments, and security transfers.</p>

                <h3>Flowvault/MMI (Floating Point Group)</h3>
                <p>Enhanced testing efficiency and coding standards for the crypto asset management service. Worked on Metamask Institutional integration, building services for webhook monitoring and blockchain transaction signing.</p>

                <h3>Store Comms VoIP (Lululemon)</h3>
                <p>Designed and implemented infrastructure to replace Lululemon’s landline phones with a VoIP solution. Worked on APIs and services for softphones and usage metrics reporting.</p>

                <h3>ADMS (Q2 Solutions)</h3>
                <p>Built a REST application for controlling DNA/RNA data flow and analysis. Developed the API from scratch, integrated with Kafka for pipeline invocation, and supported the Angular-based UI.</p>

                <h3>TOURtech Event Coordination Service</h3>
                <p>Full stack developer for an event coordination and device monitoring web application, built using Python, Flask, Angular, and PostgreSQL.</p>

                <h3>Qiskit Quantum Computing Test Application</h3>
                <p>Developed a CLI application to build and run quantum circuits using IBMQ and Qiskit. Logs and graphs results using matplotlib.</p>

                <h3>Twitch Chat Bot</h3>
                <p>Built a Python chat bot for Twitch streams using IRC that automates responses and tracks user activity for giveaways. Continuously updated and running on my home server.</p>
            </div>
        </div>
    );
};

export default Resume;
