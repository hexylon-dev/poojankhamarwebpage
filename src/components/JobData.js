const jobData = [
  {
    "job_id": "1",
    "workspace_id": "1",
    "role": "Frontend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Proficiency in React, HTML/CSS, JavaScript, TypeScript, Redux, state management libraries, responsive design techniques, strong understanding of accessibility standards.",
    "role_description": "Develop and maintain user interfaces for web applications. Work with designers and back-end developers to build responsive and user-friendly web apps. Optimize web pages for maximum speed and scalability."
  },
  {
    "job_id": "2",
    "workspace_id": "2",
    "role": "Backend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Experience with Node.js, MongoDB, API development, GraphQL, microservices architecture, Docker, cloud platforms (AWS, Azure), and security best practices.",
    "role_description": "Design, build, and maintain scalable backend systems. Collaborate with the frontend team to integrate APIs and work on data management strategies. Ensure the security and scalability of all back-end components."
  },
  {
    "job_id": "3",
    "workspace_id": "1",
    "role": "UI/UX Designer",
    "department": "Design",
    "location": "Ahmedabad",
    "qualifications": "Figma expertise, strong portfolio, UI/UX design skills, prototyping, wireframing, usability testing, interaction design, knowledge of user research methods, design systems.",
    "role_description": "Create user-centric designs and improve application interfaces. Work closely with product managers to define user needs and create visually appealing designs. Conduct usability tests and iterate based on feedback."
  },
  {
    "job_id": "4",
    "workspace_id": "2",
    "role": "Frontend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Familiarity with TypeScript, responsive design techniques, advanced JavaScript concepts, knowledge of frontend testing libraries (Jest, Cypress), UI performance optimization, Webpack, and Babel.",
    "role_description": "Implement interactive features and optimize UI performance. Work closely with designers and backend teams to ensure seamless integration of front-end and back-end functionalities."
  },
  {
    "job_id": "5",
    "workspace_id": "1",
    "role": "Backend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Proficiency in Python, Django, RESTful API design, knowledge of database management systems (PostgreSQL, MySQL), experience with authentication protocols (OAuth, JWT), experience with deployment pipelines.",
    "role_description": "Develop and maintain the server-side logic for applications. Collaborate with front-end developers to integrate APIs and ensure smooth deployment and system scalability."
  },
  {
    "job_id": "6",
    "workspace_id": "2",
    "role": "UI/UX Designer",
    "department": "Design",
    "location": "Ahmedabad",
    "qualifications": "Experience in wireframing, prototyping, usability testing, knowledge of Adobe XD, Sketch, Figma, experience working in Agile teams, strong understanding of visual design principles.",
    "role_description": "Collaborate with developers to create seamless user experiences. Design engaging and intuitive user interfaces. Contribute to all stages of the design process from conceptualization to implementation."
  },
  {
    "job_id": "7",
    "workspace_id": "1",
    "role": "Frontend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Experience with Redux, styled-components, web performance optimization, HTML5, CSS3, JavaScript frameworks like Vue.js or Angular, responsive design principles.",
    "role_description": "Build dynamic web pages and ensure responsive designs. Enhance the user experience by ensuring that web applications are fast, responsive, and work across different devices and screen sizes."
  },
  {
    "job_id": "8",
    "workspace_id": "2",
    "role": "Backend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Familiarity with SQL, PostgreSQL, microservices architecture, experience with Docker and Kubernetes, API versioning, and knowledge of caching techniques (Redis).",
    "role_description": "Design robust database structures, create and maintain RESTful APIs, and optimize database performance. Manage the scaling of systems and integrate with cloud services."
  },
  {
    "job_id": "9",
    "workspace_id": "1",
    "role": "UI/UX Designer",
    "department": "Design",
    "location": "Ahmedabad",
    "qualifications": "Strong understanding of color theory, typography, user flows, prototyping, responsive design, accessibility standards, experience in Agile teams.",
    "role_description": "Enhance the visual and interactive aspects of applications. Create user personas and journey maps to guide design decisions. Work with developers to ensure designs are implemented accurately."
  },
  {
    "job_id": "10",
    "workspace_id": "2",
    "role": "Frontend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Experience with Webpack, Babel, modern JavaScript frameworks, CI/CD workflows, version control (Git), experience with front-end security practices (XSS, CSRF).",
    "role_description": "Optimize loading speeds and improve client-side performance. Create reusable components, ensure web applications work seamlessly on all browsers and devices."
  },
  {
    "job_id": "11",
    "workspace_id": "1",
    "role": "Backend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Experience with GraphQL, NoSQL databases, containerization, cloud infrastructure (AWS, GCP), Docker, Kubernetes, and API authentication techniques.",
    "role_description": "Create efficient APIs, manage backend infrastructure, design and maintain database architectures, and integrate with external services."
  },
  {
    "job_id": "12",
    "workspace_id": "2",
    "role": "UI/UX Designer",
    "department": "Design",
    "location": "Ahmedabad",
    "qualifications": "Expertise in Adobe XD, Illustrator, and user testing, advanced prototyping techniques, ability to communicate design rationale effectively to stakeholders.",
    "role_description": "Design and iterate on user interface prototypes. Work closely with the development team to implement designs and refine features based on user feedback."
  },
  {
    "job_id": "13",
    "workspace_id": "1",
    "role": "Frontend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Strong knowledge of CSS preprocessors, responsive design, cross-browser compatibility, web performance best practices, advanced JavaScript, and web accessibility standards.",
    "role_description": "Implement mobile-friendly layouts and ensure cross-browser compatibility. Optimize user interfaces for fast loading times and smooth interactivity."
  },
  {
    "job_id": "14",
    "workspace_id": "2",
    "role": "Backend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Experience with serverless architecture, cloud platforms, and microservices. Knowledge of distributed systems, CI/CD pipelines, and deployment automation.",
    "role_description": "Manage and deploy scalable backend systems, ensure availability and scalability of backend services, and integrate with third-party APIs."
  },
  {
    "job_id": "15",
    "workspace_id": "1",
    "role": "UI/UX Designer",
    "department": "Design",
    "location": "Ahmedabad",
    "qualifications": "Ability to create pixel-perfect designs, knowledge of design systems, prototyping skills, user journey mapping, expert in design tools like Figma, Sketch, and InVision.",
    "role_description": "Collaborate with stakeholders to meet user needs and expectations. Conduct usability testing and iterate on designs to improve user satisfaction."
  },
  {
    "job_id": "16",
    "workspace_id": "2",
    "role": "Frontend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Proficiency in Vue.js, Nuxt, and front-end testing frameworks, modern JavaScript, CSS frameworks (Tailwind CSS, Bootstrap), and accessibility standards.",
    "role_description": "Develop reusable components, ensure high-quality UI features, and optimize applications for both speed and user experience."
  },
  {
    "job_id": "17",
    "workspace_id": "1",
    "role": "Backend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Experience in Go, Kubernetes, backend optimization, containerization, distributed systems, and API management.",
    "role_description": "Build fault-tolerant services, maintain system reliability, optimize backend components, and collaborate with the frontend team to ensure smooth integration."
  },
  {
    "job_id": "18",
    "workspace_id": "2",
    "role": "UI/UX Designer",
    "department": "Design",
    "location": "Ahmedabad",
    "qualifications": "Skilled in animation tools, dynamic user experiences, knowledge of user psychology, UI motion design, and prototyping.",
    "role_description": "Create interactive designs, oversee usability improvements, and ensure that designs are aligned with product vision and user needs."
  },
  {
    "job_id": "19",
    "workspace_id": "1",
    "role": "Frontend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Knowledge of state management libraries, GraphQL queries, experience with modern JavaScript frameworks, performance tuning, cross-platform development.",
    "role_description": "Enhance and debug front-end components for a seamless experience. Build reusable components and ensure responsive user interfaces."
  },
  {
    "job_id": "20",
    "workspace_id": "2",
    "role": "Backend Developer",
    "department": "Engineering",
    "location": "Ahmedabad",
    "qualifications": "Proficiency in Java, Spring Boot, and distributed systems, experience with cloud computing, RESTful APIs, and security best practices.",
    "role_description": "Develop and maintain robust backend architecture. Ensure the scalability and efficiency of services while integrating with other teams to build a cohesive product."
  }
]

export default jobData;
