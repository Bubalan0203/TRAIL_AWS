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
  gap: 20px;

 
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const VideoColumn = styled.div`
  flex: 1 1 48%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const VideoItem = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
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

const allVideos = [
  { src: "https://youtube.com/embed/_gqQiByItxc?list=PLX-Fsvk5Eo-Azx8yKHa3Htg8HnqbYfAdU" },
  { src: "https://youtube.com/embed/5LMls1knA9Q?list=PLX-Fsvk5Eo-AALUCRZ0ewQt8qTempnI4y" },
  { src: "https://youtube.com/embed/ZF2Cwmxmupo?list=PLX-Fsvk5Eo-AOQzT4VdcsnrA8HGGucXoC" },
  { src: "https://youtube.com/embed/742EVOHhZ3M?list=PLX-Fsvk5Eo-DmDQbNwkTqnB9TiBB4k2Rg" },
  { src: "https://youtube.com/embed/kXANweJGvcE?list=PLX-Fsvk5Eo-Bwr2YuVhsKqz18CR0-ZDy-" },
  { src: "https://youtube.com/embed/o4hcgISUbeg?list=PLX-Fsvk5Eo-CY23xVgDYqpZBjXiZC0-ge" },
  { src: "https://youtube.com/embed/X6XQJy3AEpg?list=PLX-Fsvk5Eo-CH1_5sKU9ZxPeQfv4OhDCu" },
  { src: "https://youtube.com/embed/M-1UOoPzUCg?list=PLX-Fsvk5Eo-CdtkBqg3zZQdAFGEL9ah8Q" },
  { src: "https://youtube.com/embed/F6qCqrJvv4E?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/_uCjVUw_o5I?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },

  { src: "https://youtube.com/embed/_uCjVUw_o5I?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/wCCqpIm4NMQ?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/tc8SQJx-Iq0?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/wFl0GpCLHD0?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/6cfIl4Jhz4Q?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/rKRdunHmT2I?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/bthG7j9haJU?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/nxT4DAHV-CE" },
  { src: "https://youtube.com/embed/nxT4DAHV-CE?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/EId8NptPUfU?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },

  { src: "https://youtube.com/embed/7qKUeldK43A?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/L7rBwbyBhEA?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/W0kIy1rVA2k?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/XE1G9cO2spc?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/Vfyhe-cgGWA?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/vR9inP3d5Ms?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/YfHU5xx9TSY?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/ox7cpE_V2yI?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/Uj-VXUt7lkI?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/_LCMZCmUk1E?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },

  { src: "https://youtube.com/embed/kfPhH0c6ago?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/VEF95-EgJgE?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/5gl-xaPy0oc?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/cvpT235AItU?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/Ch54-crdIhQ?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/1wtot31PcCY?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/nRNSPOXMTO0?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/VvsrfCpDYGk?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/VN7lpG5Yx5c?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/8ITdt0jdwBI?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },

  { src: "https://youtube.com/embed/UL9Diif6RwE?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/S975tEnuTag?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/jVl-4qd4C6k" },
  { src: "https://youtube.com/embed/5Eki58IooCk" },
  { src: "https://youtube.com/embed/xP0iUxARiH0?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/9Si3gC85LoM?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/0Sk578RrkTc?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/qAbEnuH1pw0?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/1GSjPdyx29c?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/NIEkq2oCfMI?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" },
  { src: "https://youtube.com/embed/rlEnR3w_DM4?list=PLX-Fsvk5Eo-Dtkuj2kW3YGpdhxac9SWKQ" }
];


const getNextImageSet = (currentIndex, setSize) => {
  const endIndex = currentIndex + setSize;
  return allImages.slice(currentIndex, endIndex);
};

const getNextVideoSet = (currentIndex, setSize) => {
  const endIndex = currentIndex + setSize;
  return allVideos.slice(currentIndex, endIndex);
};

const Gallery = () => {
  const [currentSection, setCurrentSection] = useState('images');
  const [imageIndex, setImageIndex] = useState(0);
  const [loadedImageSets, setLoadedImageSets] = useState([
    getNextImageSet(0, 5),
    getNextImageSet(5, 5)
  ]);
  const [videoIndex, setVideoIndex] = useState(0);
  const [loadedVideoSets, setLoadedVideoSets] = useState(getNextVideoSet(0, 12));

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
    const newSet = getNextVideoSet(videoIndex + loadedVideoSets.length, 3);
    if (newSet.length > 0) {
      setLoadedVideoSets(prevSets => [...prevSets, ...newSet]);
    }
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
            index % 3 === 0 && (
              <VideoRow key={`video-row-${Math.floor(index / 3)}`}>
                <VideoColumn>
                  <VideoItem>
                    <iframe src={video.src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                  </VideoItem>
                </VideoColumn>
                {loadedVideoSets[index + 1] && (
                  <VideoColumn>
                    <VideoItem>
                      <iframe src={loadedVideoSets[index + 1].src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    </VideoItem>
                  </VideoColumn>
                )}
                {loadedVideoSets[index + 2] && (
                  <VideoColumn>
                    <VideoItem>
                      <iframe src={loadedVideoSets[index + 2].src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    </VideoItem>
                  </VideoColumn>
                )}
              </VideoRow>
            )
          ))}
        </VideoSection>
      )}
      {currentSection === 'images' && loadedImageSets.flat().length < allImages.length && (
        <LoadMoreButton onClick={handleLoadMoreImages}>Load More Images →</LoadMoreButton>
      )}
      {currentSection === 'videos' && loadedVideoSets.length < allVideos.length && (
        <LoadMoreButton onClick={handleLoadMoreVideos}>Load More Videos →</LoadMoreButton>
      )}
    </GalleryContainer>
  );
};

export default Gallery;
