import React from 'react';
import ProjectCard from './ProjectCard';
import SubcategoryCard from './SubcategoryCard';

const ImplementedProjects = () => {
  const subcategories = [
    { title: 'HR Department', description: 'Transform your workforce management with our HR solutions, designed to streamline recruitment, payroll automation, and employee data tracking.' },
    { title: 'Sales Department', description: 'Drive revenue growth with Hexylon Analytics\' powerful sales tools for lead tracking, performance analysis, and CRM integration.' },
    { title: 'ERP', description: 'Optimize your core business operations with our ERP solutions, unifying finance, supply chain, and operations into a single system.' },
    { title: 'Purchasing Department', description: 'Simplify procurement with smart tools that track purchases, manage vendors, and control costs effectively.' },
    { title: 'Store Department', description: 'Maintain real-time inventory accuracy and reduce waste with our innovative store management solutions.' },
    { title: 'QC Department', description: 'Ensure product excellence with robust quality control systems that monitor, analyze, and reduce defects.' },
    { title: 'Assembly', description: 'Enhance your assembly line efficiency with tools that optimize workflows, minimize downtime, and improve accuracy.' },
    { title: 'CSD', description: 'Deliver exceptional customer experiences with tools for ticketing, complaint resolution, and performance tracking.' },
    { title: 'SPD', description: 'Execute strategic and complex projects with precision using tailored solutions from Hexylon Analytics.' },
    { title: 'Admin', description: 'Simplify administrative workflows with tools for scheduling, document management, and reporting.' },
    { title: 'Automation', description: 'Unlock unparalleled efficiency by automating repetitive tasks, improving accuracy, and scaling operations effortlessly.' },
    { title: 'Dashboard', description: 'Access real-time business insights on a centralized platform with our intuitive dashboards.' },
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 10% 10%, rgba(255, 102, 0, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 90% 20%, rgba(255, 102, 0, 0.06) 0%, transparent 45%),
          radial-gradient(circle at 15% 50%, rgba(255, 102, 0, 0.07) 0%, transparent 50%),
          radial-gradient(circle at 85% 80%, rgba(255, 102, 0, 0.05) 0%, transparent 55%),
          linear-gradient(135deg, rgba(255, 102, 0, 0.03) 0%, transparent 15%),
          linear-gradient(45deg, rgba(255, 102, 0, 0.02) 0%, transparent 25%)
        `,
        opacity: 0.9,
        zIndex: 1,
        pointerEvents: 'none',
        animation: 'gradientShift 15s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          linear-gradient(45deg, transparent 48%, rgba(255, 102, 0, 0.03) 49%, rgba(255, 102, 0, 0.03) 51%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(255, 102, 0, 0.03) 49%, rgba(255, 102, 0, 0.03) 51%, transparent 52%),
          radial-gradient(circle at 50% 50%, rgba(255, 102, 0, 0.02) 0%, transparent 100%)
        `,
        backgroundSize: '80px 80px, 80px 80px, 100% 100%',
        opacity: 0.7,
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 0%;
            }
            50% {
              background-position: 100% 100%;
            }
            100% {
              background-position: 0% 0%;
            }
          }
        `}
      </style>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '3rem clamp(1rem, 5vw, 2rem)',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
        <h2 className="2xl:text-7xl md:text-6xl text-4xl font-bold uppercase  mb-4 text-black pb-2 inline-block text-center w-[100%]">
            Implemented Projects by Hexylon
          </h2>
          <p style={{ 
            fontSize: 'clamp(2rem, 2.5vw, 1.125rem)', 
            color: '#ff6600' 
          }}>
            Turning Vision into Reality with AI-Powered Solutions
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)', 
          marginBottom: 'clamp(1.5rem, 3vw, 2rem)' 
        }}>
          <ProjectCard
            title="Custom AI Solutions by Hexylon"
            description="At Hexylon, we specialize in creating advanced AI-powered solutions tailored to meet the unique needs of our clients. Whether it's enhancing operational efficiency or delivering personalized user experiences, our custom AI systems are designed to align seamlessly with specific business goals."
            metaTitle="Education AI Platform"
            metaDescription="One of our flagship solutions, the Education AI system, provides students with customized learning paths tailored to their needs and abilities. The platform offers multilingual support, interactive learning environments, progress tracking, and career assessments. This innovative tool empowers students to navigate their educational journeys with clarity and efficiency while making informed career decisions."
          />
          <ProjectCard
            title="Custom Web Development & Digital Solutions"
            description="We specialize in creating bespoke websites and digital platforms, designed to meet your unique business needs. From enhancing your online presence to optimizing functionality, we deliver solutions that drive growth and success."
            metaTitle="About Reequitiz"
            metaDescription="As a prime example of our expertise, Reequitiz showcases our ability to develop AI-driven platforms crafted for specific industries. This stock market-focused platform empowers investors with real-time insights, personalized strategies, and advanced portfolio management tools. It highlights our commitment to crafting innovative digital solutions that align with our clients' vision and goals."
          />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)', 
          marginBottom: 'clamp(1.5rem, 3vw, 2rem)' 
        }}>
          <ProjectCard
            title="Transforming Business Operations with AI"
            description="At Hexylon, we provide innovative AI-driven solutions to revolutionize business operations. By leveraging advanced automation and intuitive technology, we help organizations streamline processes, improve decision-making, and boost overall efficiency."
            metaTitle="Our Services Across Pan India"
            metaDescription="We specialize in automating key business functions such as HR, Sales, and Purchasing, along with enhancing productivity in Customer Support, Assembly, and Administrative tasks. With user-friendly dashboards offering real-time insights, our services empower businesses across Pan India to achieve operational excellence and sustainable growth."
          />
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(0.5rem, 2vw, 1rem)' 
          }}>
            {subcategories.slice(0, 4).map((category, index) => (
              <SubcategoryCard
                key={index}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(0.75rem, 2vw, 1rem)' 
        }}>
          {subcategories.slice(4).map((category, index) => (
            <SubcategoryCard
              key={index + 4}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImplementedProjects;
