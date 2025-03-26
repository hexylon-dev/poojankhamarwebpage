import React from 'react';

const ProjectCard = ({ title, description, metaTitle, metaDescription, className = '' }) => {
  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        borderRadius: '1rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        padding: '2rem',
        transition: 'all 0.3s ease',
        border: '1px solid #333',
        ...(className && { className }),
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
        e.currentTarget.style.border = '1px solid #ff6600';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.border = '1px solid #333';
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: 'white',
          letterSpacing: '0.025em',
        }}
      >
        {title}
      </h3>
      <p style={{ 
        color: '#a0aec0',
        lineHeight: '1.75',
        marginBottom: '1.5rem',
        fontSize: '1.1rem'
      }}>
        {description}
      </p>
      
      {metaTitle && (
        <div style={{ 
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: 'rgba(255, 102, 0, 0.1)',
          borderRadius: '0.5rem'
        }}>
          <h4 style={{ 
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            color: '#ff6600',
            letterSpacing: '0.025em',
          }}>
            {metaTitle}
          </h4>
          <p style={{ 
            color: '#a0aec0',
            lineHeight: '1.6',
            fontSize: '1rem'
          }}>
            {metaDescription}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
