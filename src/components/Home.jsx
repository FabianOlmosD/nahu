import React, { useEffect, useState } from 'react';
import '../index.css';

const Home = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    './fate5.png',
    './pf.png',
    './im.png',
  ];

  return (
    <div className="video-container">
      <video autoPlay muted loop id="background-video" className="video-fluid">
        <source src="./video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="home-container">
        <div className="overlay-text">
          <p className="p">BIENVENIDO AL SITIO OFICIAL DE</p>
          <div className="logo-container">
            <div>NAHUEL CORDONE</div>
          </div>
        </div>

        <div className="content-container">
          {/* Imagen PNG del piloto sobre el video */}
          <img src="./logo3.png" alt="Piloto" className="piloto-image" />

          {/* Banners con imágenes */}
          <div className="banner-container">
            <img src={banners[bannerIndex]} alt={`Banner ${bannerIndex + 1}`} className="banner-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
