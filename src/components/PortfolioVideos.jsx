import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './PortfolioVideos.css';

export function PortfolioVideos() {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const videoRefs = useRef([]);

  const titleRef = useScrollAnimation();
  const carouselLeftRef = useScrollAnimation({ threshold: 0.2 });
  const infoCardRef = useScrollAnimation({ threshold: 0.2 });

  const videos = [
    {
      id: 1,
      title: t('portfolio.videos.video1.title'),
      description: t('portfolio.videos.video1.description'),
      videoUrl: '/portfolio-video-1.MP4',
      thumbnail: '/portfolio-video-1.MP4',
      clientLogo: '/video1-client.PNG',
      details: {
        client: t('portfolio.videos.video1.client'),
        category: t('portfolio.videos.video1.category'),
        duration: t('portfolio.videos.video1.duration'),
        year: t('portfolio.videos.video1.year')
      }
    },
    {
      id: 2,
      title: t('portfolio.videos.video2.title'),
      description: t('portfolio.videos.video2.description'),
      videoUrl: '/portfolio-video-2.mp4',
      thumbnail: '/portfolio-video-2.mp4',
      clientLogo: '/video2-client.PNG',
      details: {
        client: t('portfolio.videos.video2.client'),
        category: t('portfolio.videos.video2.category'),
        duration: t('portfolio.videos.video2.duration'),
        year: t('portfolio.videos.video2.year')
      }
    },
    {
      id: 3,
      title: t('portfolio.videos.video3.title'),
      description: t('portfolio.videos.video3.description'),
      videoUrl: '/portfolio-video-3.mp4',
      thumbnail: '/portfolio-video-3.mp4',
      clientLogo: '/video3-client.PNG',
      details: {
        client: t('portfolio.videos.video3.client'),
        category: t('portfolio.videos.video3.category'),
        duration: t('portfolio.videos.video3.duration'),
        year: t('portfolio.videos.video3.year')
      }
    },
    {
      id: 4,
      title: t('portfolio.videos.video4.title'),
      description: t('portfolio.videos.video4.description'),
      videoUrl: '/portfolio-video-4.MP4',
      thumbnail: '/portfolio-video-4.MP4',
      details: {
        client: t('portfolio.videos.video4.client'),
        category: t('portfolio.videos.video4.category'),
        duration: t('portfolio.videos.video4.duration'),
        year: t('portfolio.videos.video4.year')
      }
    },
    {
      id: 5,
      title: t('portfolio.videos.video5.title'),
      description: t('portfolio.videos.video5.description'),
      videoUrl: '/portfolio-video-5.MOV',
      thumbnail: '/portfolio-video-5.MOV',
      details: {
        client: t('portfolio.videos.video5.client'),
        category: t('portfolio.videos.video5.category'),
        duration: t('portfolio.videos.video5.duration'),
        year: t('portfolio.videos.video5.year')
      }
    }
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
    stopAutoPlay();
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  }, [videos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  }, [videos.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    stopAutoPlay();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  // Auto-play functionality
  const startAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Control video playback based on current index
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play().catch(err => console.log('Play error:', err));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedVideo) return; // Don't navigate if modal is open

      if (e.key === 'ArrowLeft') {
        prevSlide();
        stopAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        stopAutoPlay();
      } else if (e.key === 'Escape') {
        closeVideo();
      } else if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo, nextSlide, prevSlide]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    stopAutoPlay();
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse drag for desktop
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    stopAutoPlay();
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const onMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const distance = dragStart - e.clientX;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section className="portfolio-videos-section">
      <div className="portfolio-videos-container">
        <div ref={titleRef} className="section-title-with-arrow animate-fade-up">
          <span className="arrow-icon">↗</span>
          <h2>{t('portfolio.title')}</h2>
        </div>

        {/* Desktop Layout - 50/50 Split */}
        <div className="portfolio-layout desktop-view">
          {/* Left Side - Video Carousel */}
          <div
            ref={carouselLeftRef}
            className="desktop-carousel animate-fade-left"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={() => setIsDragging(false)}
          >
          <div
            className="desktop-carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video, index) => (
              <div key={video.id} className="desktop-carousel-slide">
                <div className="video-thumbnail">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.thumbnail}
                    muted={isMuted}
                    playsInline
                    loop
                  />
                  <button className="mute-button" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
                    {isMuted ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <line x1="23" y1="9" x2="17" y2="15"></line>
                        <line x1="17" y1="9" x2="23" y2="15"></line>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          </div>

          {/* Right Side - Information Card */}
          <div ref={infoCardRef} className="info-card-container animate-fade-right">
            <div className="info-card">
              <div className="info-card-header">
                <span className="video-number">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="total-videos">/ {String(videos.length).padStart(2, '0')}</span>
              </div>

              <div className="info-card-content">
                <h3 className="info-title">{videos[currentIndex].title}</h3>
                <p className="info-description">{videos[currentIndex].description}</p>

                {videos[currentIndex].details && (
                  <div className="info-details">
                    {videos[currentIndex].details.client && (
                      <div className="detail-item">
                        <span className="detail-label">Client</span>
                        {videos[currentIndex].clientLogo ? (
                          <img
                            src={videos[currentIndex].clientLogo}
                            alt={videos[currentIndex].details.client}
                            className="client-logo"
                          />
                        ) : (
                          <span className="detail-value">{videos[currentIndex].details.client}</span>
                        )}
                      </div>
                    )}
                    {videos[currentIndex].details.category && (
                      <div className="detail-item">
                        <span className="detail-label">Category</span>
                        <span className="detail-value">{videos[currentIndex].details.category}</span>
                      </div>
                    )}
                    {videos[currentIndex].details.duration && (
                      <div className="detail-item">
                        <span className="detail-label">Duration</span>
                        <span className="detail-value">{videos[currentIndex].details.duration}</span>
                      </div>
                    )}
                    {videos[currentIndex].details.year && (
                      <div className="detail-item">
                        <span className="detail-label">Year</span>
                        <span className="detail-value">{videos[currentIndex].details.year}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="carousel-nav desktop-nav">
              <button className="nav-button prev-button" onClick={prevSlide} title="Previous (←)">
                ‹
              </button>
              <div className="carousel-counter">
                {currentIndex + 1} / {videos.length}
              </div>
              <button className="nav-button next-button" onClick={nextSlide} title="Next (→)">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div
          className="carousel-container mobile-view"
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video, index) => (
              <div key={video.id} className="carousel-slide">
                <div className="video-thumbnail">
                  <video
                    ref={(el) => (videoRefs.current[index + videos.length] = el)}
                    src={video.thumbnail}
                    muted={isMuted}
                    playsInline
                    loop
                  />
                  <button className="mute-button" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
                    {isMuted ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <line x1="23" y1="9" x2="17" y2="15"></line>
                        <line x1="17" y1="9" x2="23" y2="15"></line>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Info Card */}
        <div className="mobile-info-card mobile-view">
          <div className="info-card">
            <div className="info-card-header">
              <span className="video-number">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="total-videos">/ {String(videos.length).padStart(2, '0')}</span>
            </div>

            <div className="info-card-content">
              <h3 className="info-title">{videos[currentIndex].title}</h3>
              <p className="info-description">{videos[currentIndex].description}</p>

              {videos[currentIndex].details && (
                <div className="info-details">
                  {videos[currentIndex].details.client && (
                    <div className="detail-item">
                      <span className="detail-label">Client</span>
                      {videos[currentIndex].clientLogo ? (
                        <img
                          src={videos[currentIndex].clientLogo}
                          alt={videos[currentIndex].details.client}
                          className="client-logo"
                        />
                      ) : (
                        <span className="detail-value">{videos[currentIndex].details.client}</span>
                      )}
                    </div>
                  )}
                  {videos[currentIndex].details.category && (
                    <div className="detail-item">
                      <span className="detail-label">Category</span>
                      <span className="detail-value">{videos[currentIndex].details.category}</span>
                    </div>
                  )}
                  {videos[currentIndex].details.duration && (
                    <div className="detail-item">
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{videos[currentIndex].details.duration}</span>
                    </div>
                  )}
                  {videos[currentIndex].details.year && (
                    <div className="detail-item">
                      <span className="detail-label">Year</span>
                      <span className="detail-value">{videos[currentIndex].details.year}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="video-modal" onClick={closeVideo}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeVideo}>×</button>
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="modal-video"
              />
              <div className="modal-info">
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
