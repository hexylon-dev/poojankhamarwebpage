import React from 'react';

const SubcategoryCard = ({ title, description }) => {
  return (
    <div
      className="subcategory-card"
      style={{
        backgroundColor: '#1a1a1a',
        borderRadius: '1rem',
        boxShadow: '0 4px 15px rgba(255, 102, 0, 0.1)',
        padding: '2rem',
        transition: 'all 0.3s ease',
        border: '1px solid #333',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 102, 0, 0.2)';
        e.currentTarget.style.backgroundColor = '#242424';
        e.currentTarget.style.border = '1px solid #ff6600';
        e.currentTarget.querySelector('h3').style.color = '#ff6600';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 102, 0, 0.1)';
        e.currentTarget.style.backgroundColor = '#1a1a1a';
        e.currentTarget.style.border = '1px solid #333';
        e.currentTarget.querySelector('h3').style.color = 'white';
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'white',
            position: 'relative',
            paddingLeft: '1.25rem',
            borderLeft: '3px solid #ff6600',
            transition: 'all 0.3s ease',
            letterSpacing: '0.025em',
          }}
        >
          {title}
        </h3>
      </div>
      <p style={{ 
        fontSize: '1.1rem',
        color: '#a0aec0',
        lineHeight: '1.75',
        flex: '1',
        position: 'relative',
      }}>
        {description}
      </p>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '100px',
        background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.15) 0%, transparent 100%)',
        borderRadius: '0 1rem 0 6rem',
        transition: 'all 0.3s ease',
      }} />
    </div>
  );
};

export default SubcategoryCard;
