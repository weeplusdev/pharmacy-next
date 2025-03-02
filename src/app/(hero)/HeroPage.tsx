// src/app/(hero)/HeroPage.tsx
import React from 'react';

const HeroPage: React.FC = () => {
  return (
    <div className="hero-container">
      {/* Background Image */}
      <div className="hero-background" style={{ backgroundImage: 'https://n743nxusas82zqwf.public.blob.vercel-storage.com/Hero-nVcrwXKr4Pdioi5VXNvL9BUbgJtL4g.webp' }}>
        
      
        {/* Title */}
        <h1 className="hero-title">We can get your Drug Prescriptions to You</h1>
        {/* Contact Information */}
        <div className="contact-info">

          <p>Email: Pharmacy@mail.com</p>
          <p>Phone: 099-9999999</p>
          <p>Location: 555 ถ.มิตรภาพ จอหอ ...</p>
        </div>
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for drugs in our store" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;