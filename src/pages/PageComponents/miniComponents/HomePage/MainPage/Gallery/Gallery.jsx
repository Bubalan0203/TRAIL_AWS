import React, { useState } from 'react';
import styled from 'styled-components';

import image1 from '../../../../../../assets/mainpage/gallery/img1.jpg';
import image2 from '../../../../../../assets/mainpage/gallery/img2.jpg';
import image3 from '../../../../../../assets/mainpage/gallery/img3.jpg';
import image4 from '../../../../../../assets/mainpage/gallery/img4.jpg';
import image5 from '../../../../../../assets/mainpage/gallery/img5.jpg';
import image6 from '../../../../../../assets/mainpage/gallery/img6.jpg';
import image7 from '../../../../../../assets/mainpage/gallery/img7.jpg';
import image8 from '../../../../../../assets/mainpage/gallery/img8.jpg';
import image9 from '../../../../../../assets/mainpage/gallery/img9.jpg';
import image10 from '../../../../../../assets/mainpage/gallery/img10.jpg';
import image11 from '../../../../../../assets/mainpage/gallery/img11 (1).jpg';
import image12 from '../../../../../../assets/mainpage/gallery/img11 (2).jpg';
import image13 from '../../../../../../assets/mainpage/gallery/img11 (3).jpg';
import image14 from '../../../../../../assets/mainpage/gallery/img11 (4).jpg';
import image15 from '../../../../../../assets/mainpage/gallery/img11 (5).jpg';
import image16 from '../../../../../../assets/mainpage/gallery/img11 (6).jpg';
import image17 from '../../../../../../assets/mainpage/gallery/img11 (7).jpg';
import image18 from '../../../../../../assets/mainpage/gallery/img11 (8).jpg';
import image19 from '../../../../../../assets/mainpage/gallery/img11 (9).jpg';
import image20 from '../../../../../../assets/mainpage/gallery/img11 (10).jpg';
import image21 from '../../../../../../assets/mainpage/gallery/img11 (11).jpg';
import image22 from '../../../../../../assets/mainpage/gallery/img11 (12).jpg';
import image23 from '../../../../../../assets/mainpage/gallery/img14 (1).jpg';
import image24 from '../../../../../../assets/mainpage/gallery/img14 (2).jpg';
import image25 from '../../../../../../assets/mainpage/gallery/img14 (3).jpg';
import image26 from '../../../../../../assets/mainpage/gallery/img14 (4).jpg';
import image27 from '../../../../../../assets/mainpage/gallery/img14 (5).jpg';
import image28 from '../../../../../../assets/mainpage/gallery/img14 (6).jpg';
import image29 from '../../../../../../assets/mainpage/gallery/img14 (7).jpg';
import image30 from '../../../../../../assets/mainpage/gallery/img14 (8).jpg';
import image31 from '../../../../../../assets/mainpage/gallery/img14 (9).jpg';
import image32 from '../../../../../../assets/mainpage/gallery/img14 (10).jpg';
import image33 from '../../../../../../assets/mainpage/gallery/img14 (11).jpg';
import image34 from '../../../../../../assets/mainpage/gallery/img14 (12).jpg';
import image35 from '../../../../../../assets/mainpage/gallery/img14 (13).jpg';
import image36 from '../../../../../../assets/mainpage/gallery/img14 (14).jpg';
import image37 from '../../../../../../assets/mainpage/gallery/img14 (15).jpg';
import image38 from '../../../../../../assets/mainpage/gallery/img14 (16).jpg';
import image39 from '../../../../../../assets/mainpage/gallery/img14 (17).jpg';
import image40 from '../../../../../../assets/mainpage/gallery/img14 (18).jpg';
import image41 from '../../../../../../assets/mainpage/gallery/img14 (19).jpg';
import image42 from '../../../../../../assets/mainpage/gallery/img14 (20).jpg';
import image43 from '../../../../../../assets/mainpage/gallery/img14 (21).jpg';
import image44 from '../../../../../../assets/mainpage/gallery/img14 (22).jpg';
import image45 from '../../../../../../assets/mainpage/gallery/img14 (23).jpg';
import image46 from '../../../../../../assets/mainpage/gallery/img14 (24).jpg';
import image47 from '../../../../../../assets/mainpage/gallery/img14 (1).jpg';
import image48 from '../../../../../../assets/mainpage/gallery/img14 (2).jpg';
import image49 from '../../../../../../assets/mainpage/gallery/img14 (3).jpg';
import image50 from '../../../../../../assets/mainpage/gallery/img14 (4).jpg';
import image51 from '../../../../../../assets/mainpage/gallery/img15 (1).jpg';
import image52 from '../../../../../../assets/mainpage/gallery/img15 (3).jpg';
import image53 from '../../../../../../assets/mainpage/gallery/img15 (4).jpg';
import image54 from '../../../../../../assets/mainpage/gallery/img15 (5).jpg';
import image55 from '../../../../../../assets/mainpage/gallery/img15 (6).jpg';
import image56 from '../../../../../../assets/mainpage/gallery/img15 (7).jpg';
import image57 from '../../../../../../assets/mainpage/gallery/img15 (8).jpg';
import image58 from '../../../../../../assets/mainpage/gallery/img15 (9).jpg';
import image59 from '../../../../../../assets/mainpage/gallery/img15 (10).jpg';
import image60 from '../../../../../../assets/mainpage/gallery/img15 (11).jpg';
import image61 from '../../../../../../assets/mainpage/gallery/img15 (12).jpg';
import image62 from '../../../../../../assets/mainpage/gallery/img15 (13).jpg';
import image63 from '../../../../../../assets/mainpage/gallery/img15 (14).jpg';
import image64 from '../../../../../../assets/mainpage/gallery/img15 (15).jpg';
import image65 from '../../../../../../assets/mainpage/gallery/img15 (16).jpg';
import image66 from '../../../../../../assets/mainpage/gallery/img15 (17).jpg';
import image67 from '../../../../../../assets/mainpage/gallery/img15 (18).jpg';
import image68 from '../../../../../../assets/mainpage/gallery/img15 (19).jpg';
import image69 from '../../../../../../assets/mainpage/gallery/img15 (20).jpg';
import image70 from '../../../../../../assets/mainpage/gallery/img15 (21).jpg';
import image71 from '../../../../../../assets/mainpage/gallery/img15 (22).jpg';
import image72 from '../../../../../../assets/mainpage/gallery/img15 (23).jpg';
import image73 from '../../../../../../assets/mainpage/gallery/img15 (24).jpg';
import image74 from '../../../../../../assets/mainpage/gallery/img15 (24).jpg';
import image75 from '../../../../../../assets/mainpage/gallery/img16 (1).jpg';
import image76 from '../../../../../../assets/mainpage/gallery/img16 (2).jpg';
import image77 from '../../../../../../assets/mainpage/gallery/img16 (3).jpg';
import image78 from '../../../../../../assets/mainpage/gallery/img16 (4).jpg';
import image79 from '../../../../../../assets/mainpage/gallery/img16 (5).jpg';
import image80 from '../../../../../../assets/mainpage/gallery/img16 (6).jpg';
import image81 from '../../../../../../assets/mainpage/gallery/img16 (7).jpg';
import image82 from '../../../../../../assets/mainpage/gallery/img16 (8).jpg';
import image83 from '../../../../../../assets/mainpage/gallery/img16 (9).jpg';
import image84 from '../../../../../../assets/mainpage/gallery/img16 (10).jpg';
import image85 from '../../../../../../assets/mainpage/gallery/img16 (11).jpg';
import image86 from '../../../../../../assets/mainpage/gallery/img16 (12).jpg';
import image87 from '../../../../../../assets/mainpage/gallery/img16 (13).jpg';
import image88 from '../../../../../../assets/mainpage/gallery/img16 (14).jpg';
import image89 from '../../../../../../assets/mainpage/gallery/img16 (15).jpg';
import image90 from '../../../../../../assets/mainpage/gallery/img16 (16).jpg';
import image91 from '../../../../../../assets/mainpage/gallery/img16 (17).jpg';
import image92 from '../../../../../../assets/mainpage/gallery/img16 (18).jpg';
import image93 from '../../../../../../assets/mainpage/gallery/img16 (19).jpg';
import image94 from '../../../../../../assets/mainpage/gallery/img16 (20).jpg';
import image95 from '../../../../../../assets/mainpage/gallery/img16 (21).jpg';
import image96 from '../../../../../../assets/mainpage/gallery/img16 (22).jpg';
import image97 from '../../../../../../assets/mainpage/gallery/img16 (23).jpg';
import image98 from '../../../../../../assets/mainpage/gallery/img16 (24).jpg';
import image99 from '../../../../../../assets/mainpage/gallery/img16 (25).jpg';
import image100 from '../../../../../../assets/mainpage/gallery/img16 (26).jpg';


const GalleryContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  color: #666;
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 13px;

  @media (max-width: 768px) {
    align-items: center;
    gap: 10px;
  }
`;
const CategoryButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  position: relative;
  width: 120px;
  height: 45px;
  font-size: 16px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #f16dcb, #f16dcb);
    transition: width 0.3s ease;
  }
  &.active::after {
    width: 100%;
  }

  @media (max-width: 1200px) {
    width: 100px;
    height: 40px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;


const GalleryGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GalleryRow = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: ${props => props.large ? 2 : 1};
`;

const GalleryItem = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    height: ${props => props.large ? '400px' : '190px'};
    @media (max-width: 768px) {
      height: auto;
    }
  }
`;
const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const VideoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const VideoColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  flex: 1;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const VideoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  iframe {
    border-radius: 8px;
  }

  @media (max-width: 1200px) {
    flex-direction: row;
    align-items: stretch;
    padding: 15px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    padding: 10px;
    gap: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
    gap: 10px;

    iframe {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 380px) {
    iframe {
      width: 100%;
      height: auto;
    }
  }
`;


const VideoContent = styled.div`
  flex: 1;
  text-align: left;

`;

const LoadMoreButton = styled.button`
  padding: 10px 15px;
  background: linear-gradient(90deg, #f16dcb, #f16dcb);
  border: none;
  border-radius: 15px;
  margin: 20px auto;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, #ed39ba, #ed39ba);
  }
  @media (max-width: 1200px) {
    padding: 10px 18px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding: 6px 14px;
    font-size: 10px;
  }
  @media (max-width: 320px) {
    padding: 4px 12px;
    font-size: 8px;
  }
`;

const allImages = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9,
  image10, image11, image12, image13, image14, image15, image16, image17,
  image18, image19, image20, image21, image22, image23, image24, image25,
  image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, 
  image36, image37, image38, image39, image40, image41, image42, image43, image44,
  image45, image46, image47, image48, image49, image50, image51, image52, image53,
  image54, image55, image56, image57, image58, image59, image60, image61, image62,
  image63, image64, image65, image66, image67, image68, image69, image70, image71,
  image72, image73, image74, image75, image76, image77, image78, image79, image80,
  image81, image82, image83, image84, image85, image86, image87, image88, image89,
  image90, image91, image92, image93, image94, image95, image96, image97, image98,
  image99, image100
];

const getNextImageSet = (currentIndex, setSize) => {
  const endIndex = currentIndex + setSize;
  return allImages.slice(currentIndex, endIndex);
};

const Gallery = () => {
  const [currentSection, setCurrentSection] = useState('images');
  const [imageIndex, setImageIndex] = useState(0);
  const [loadedImageSets, setLoadedImageSets] = useState([
    getNextImageSet(0, 5),
    getNextImageSet(5, 5)
  ]);
  const [loadedVideoSets, setLoadedVideoSets] = useState([
    { src: "https://youtube.com/embed/WEE2mK2jtxk?t=15", title: "Consectetur adipisicing elit", likes: 234, comments: 123 },
    { src: "https://youtube.com/embed/iQEPX5mx8ZY?t=4", title: "Explicabo illo", likes: 456, comments: 264 },
    { src: "https://youtube.com/embed/xXnl2mqOnTo", title: "Video 3", likes: 345, comments: 456 },
    { src: "https://youtube.com/embed/T-ex-DxTtQA?t=1", title: "Video 4", likes: 567, comments: 678 },
    { src: "https://youtube.com/embed/V3fIBT-BPBw", title: "Video 5", likes: 789, comments: 890 },
    { src: "https://youtube.com/embed/oqc_bKZAws4", title: "Video 6", likes: 101, comments: 112 },
    { src: "https://youtube.com/embed/WEE2mK2jtxk?t=15", title: "Video 7", likes: 123, comments: 234 },
    { src: "https://youtube.com/embed/iQEPX5mx8ZY?t=4", title: "Video 8", likes: 345, comments: 456 },
  ]);

  const handleImageClick = () => {
    setCurrentSection('images');
  };

  const handleVideoClick = () => {
    setCurrentSection('videos');
  };

  const handleLoadMoreImages = () => {
    const newSet = getNextImageSet(imageIndex + loadedImageSets.length * 5, 5);
    if (newSet.length > 0) {
      setLoadedImageSets(prevSets => [...prevSets, newSet]);
    }
  };

  const handleLoadMoreVideos = () => {
    const newVideos = [
      { src: "https://youtube.com/embed/V3fIBT-BPBw", title: "Video 9", likes: 567, comments: 678 },
      { src: "https://youtube.com/embed/T-ex-DxTtQA?t=1", title: "Video 10", likes: 789, comments: 890 }
    ];
    setLoadedVideoSets(prevSets => [...prevSets, ...newVideos]);
  };

  return (
    <GalleryContainer>
      <Heading>Our Gallery</Heading>
      <Paragraph>This project is created in order to help business</Paragraph>
      <Categories>
        <CategoryButton onClick={handleImageClick} className={currentSection === 'images' ? 'active' : ''}>Images</CategoryButton>
        <CategoryButton onClick={handleVideoClick} className={currentSection === 'videos' ? 'active' : ''}>Videos</CategoryButton>
      </Categories>
      {currentSection === 'images' && (
        <GalleryGrid>
          {loadedImageSets.map((imageSet, setIndex) => (
            <GalleryRow key={`set-${setIndex}`}>
              <GalleryColumn large>
                <GalleryItem large>
                  <img src={imageSet[0]} alt={`Image 1 of set ${setIndex}`} />
                </GalleryItem>
              </GalleryColumn>
              <GalleryColumn>
                {imageSet.slice(1, 3).map((image, index) => (
                  <GalleryItem key={`image-${setIndex}-${index}`}>
                    <img src={image} alt={`Image ${index + 2} of set ${setIndex}`} />
                  </GalleryItem>
                ))}
              </GalleryColumn>
              <GalleryColumn>
                {imageSet.slice(3, 5).map((image, index) => (
                  <GalleryItem key={`image-${setIndex}-${index + 2}`}>
                    <img src={image} alt={`Image ${index + 4} of set ${setIndex}`} />
                  </GalleryItem>
                ))}
              </GalleryColumn>
            </GalleryRow>
          ))}
        </GalleryGrid>
      )}
      {currentSection === 'videos' && (
        <VideoSection>
          {loadedVideoSets.map((video, index) => (
            index % 2 === 0 && (
              <VideoRow key={`video-row-${Math.floor(index / 2)}`}>
                <VideoColumn>
                  <VideoItem>
                    <iframe width="350" height="200" src={video.src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    <VideoContent>
                      <h4>{video.title}</h4>
                      <p>By: Admin <span>{video.likes} Likes</span> <span>{video.comments} Comments</span></p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </VideoContent>
                  </VideoItem>
                </VideoColumn>
                {loadedVideoSets[index + 1] && (
                  <VideoColumn>
                    <VideoItem>
                      <iframe width="350" height="200" src={loadedVideoSets[index + 1].src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                      <VideoContent>
                        <h4>{loadedVideoSets[index + 1].title}</h4>
                        <p>By: Admin <span>{loadedVideoSets[index + 1].likes} Likes</span> <span>{loadedVideoSets[index + 1].comments} Comments</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </VideoContent>
                    </VideoItem>
                  </VideoColumn>
                )}
              </VideoRow>
            )
          ))}
        </VideoSection>
      )}
      {currentSection === 'images' && (
        <LoadMoreButton onClick={handleLoadMoreImages}>Load More Images →</LoadMoreButton>
      )}
      {currentSection === 'videos' && (
        <LoadMoreButton onClick={handleLoadMoreVideos}>Load More Videos →</LoadMoreButton>
      )}
    </GalleryContainer>
  );
};

export default Gallery;
