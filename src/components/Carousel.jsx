import React from 'react';
import Slider from 'react-slick';
import './App.jsx'; // Pastikan untuk mengimpor CSS slider jika belum

const ImageCarousel = () => {
  const images = [
    { id: 1, src: '/images/image1.jpg', alt: 'Gambar 1' },
    { id: 2, src: '/images/image2.jpg', alt: 'Gambar 2' },
    { id: 3, src: '/images/image3.jpg', alt: 'Gambar 3' },
    { id: 4, src: '/images/image4.jpg', alt: 'Gambar 4' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Menampilkan 3 card per slide
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="card">
            <img src={image.src} alt={image.alt} className="card-image" />
            <div className="card-content">
              <h3>{image.alt}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
