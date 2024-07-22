import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [currentSection, setCurrentSection] = useState('images');
  const [loadedImageSets, setLoadedImageSets] = useState([
    ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg'],
    ['image5.jpeg', 'image6.jpeg', 'image7.jpeg', 'image8.jpeg', 'image1.jpeg']
  ]);
  const [loadedVideoSets, setLoadedVideoSets] = useState([
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Consectetur adipisicing elit", likes: 234, comments: 123 },
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Explicabo illo", likes: 456, comments: 264 },
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video 3", likes: 345, comments: 456 },
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video 4", likes: 567, comments: 678 },
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video 5", likes: 789, comments: 890 },
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video 6", likes: 101, comments: 112 },
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video 7", likes: 123, comments: 234 },
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video 8", likes: 345, comments: 456 },
  ]);

  const handleImageClick = () => {
    setCurrentSection('images');
  };

  const handleVideoClick = () => {
    setCurrentSection('videos');
  };

  const handleLoadMoreImages = () => {
    const newSet = ['image3.jpeg', 'image2.jpeg', 'image7.jpeg', 'image4.jpeg', 'image1.jpeg'];
    setLoadedImageSets(prevSets => [...prevSets, newSet]);
  };

  const handleLoadMoreVideos = () => {
    const newVideos = [
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video 9", likes: 567, comments: 678 },
      { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video 10", likes: 789, comments: 890 }
    ];
    setLoadedVideoSets(prevSets => [...prevSets, ...newVideos]);
  };

  return (
    <div className="gallery-container">
      <h2>Our Gallery</h2>
      <p>This project is created in order to help business</p>
      <div className="categories">
        <button onClick={handleImageClick} className={currentSection === 'images' ? 'active' : ''}>Images</button>
        <button onClick={handleVideoClick} className={currentSection === 'videos' ? 'active' : ''}>Videos</button>
      </div>
      {currentSection === 'images' && (
        <div className="gallery-grid">
          {loadedImageSets.map((imageSet, setIndex) => (
            <div className="gallery-row" key={`set-${setIndex}`}>
              <div className="gallery-column large-column">
                <div className="gallery-item large-image">
                  <img src={`${process.env.PUBLIC_URL}/${imageSet[0]}`} alt={`Image 1 of set ${setIndex}`} />
                </div>
              </div>
              <div className="gallery-column small-column">
                {imageSet.slice(1, 3).map((image, index) => (
                  <div className="gallery-item small-image" key={`image-${setIndex}-${index}`}>
                    <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`Image ${index + 2} of set ${setIndex}`} />
                  </div>
                ))}
              </div>
              <div className="gallery-column small-column">
                {imageSet.slice(3, 5).map((image, index) => (
                  <div className="gallery-item small-image" key={`image-${setIndex}-${index + 2}`}>
                    <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`Image ${index + 4} of set ${setIndex}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {currentSection === 'videos' && (
        <div className="video-section">
          {loadedVideoSets.map((video, index) => (
            index % 2 === 0 && (
              <div className="video-row" key={`video-row-${Math.floor(index / 2)}`}>
                <div className="video-column">
                  <div className="video-item">
                    <iframe width="350" height="200" src={video.src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    <div className="video-content">
                      <h4>{video.title}</h4>
                      <p>By: Admin <span>{video.likes} Likes</span> <span>{video.comments} Comments</span></p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                  </div>
                </div>
                {loadedVideoSets[index + 1] && (
                  <div className="video-column">
                    <div className="video-item">
                      <iframe width="350" height="200" src={loadedVideoSets[index + 1].src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                      <div className="video-content">
                        <h4>{loadedVideoSets[index + 1].title}</h4>
                        <p>By: Admin <span>{loadedVideoSets[index + 1].likes} Likes</span> <span>{loadedVideoSets[index + 1].comments} Comments</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      )}
      {currentSection === 'images' && (
        <button className="load-more" onClick={handleLoadMoreImages}>Load More Images →</button>
      )}
      {currentSection === 'videos' && (
        <button className="load-more" onClick={handleLoadMoreVideos}>Load More Videos →</button>
      )}
    </div>
  );
};

export default Gallery;
