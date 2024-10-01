import React from 'react';
import ReactPlayer from 'react-player';
import './Gallery.css';

const Gallery = () => {
    const galleryImages = [
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/11347342/pexels-photo-11347342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/8819336/pexels-photo-8819336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    return (
        <div className="gallery-container">
            <video className="background-video" autoPlay muted loop>
                <source src="https://videos.pexels.com/video-files/9341381/9341381-uhd_2560_1440_24fps.mp4" type="video/mp4" />
            </video>
            <div className="content">
                <div className="section-container">
                    <div className="section-box freshers-stream">
                        <h2>Freshers Stream</h2>
                        <div className="image-grid">
                            {galleryImages.map((src, index) => (
                                <img key={index} src={src} alt={`Freshers Stream ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section-container">
                    <div className="section-box annual-fest">
                        <h2>Annual Fest</h2>
                        <div className="image-grid">
                            {galleryImages.map((src, index) => (
                                <img key={index} src={src} alt={`Annual Fest ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section-container">
                    <div className="section-box video-section">
                        <h2>Video Section</h2>
                        <ReactPlayer
                            url="https://youtu.be/VypuBgTLPBY?si=prbWHeAF2XKWVod4"
                            controls={true}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
