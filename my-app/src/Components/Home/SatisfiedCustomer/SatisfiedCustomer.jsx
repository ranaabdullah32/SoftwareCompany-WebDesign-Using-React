import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SatisfiedCustomer.css";
import test1 from '../../../Images/test1.jpg';
import test2 from '../../../Images/test2.jpg';
import dct from '../../../Images/dct.png';
import dream from '../../../Images/dream.png';
import glass from '../../../Images/glass.png';
import laptop from '../../../Images/laptop.png';
import sama from '../../../Images/sama.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/swiper-bundle.css"; // Ensure this is included for proper styling
import { Autoplay } from "swiper/modules";

const SatisfiedCustomer = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer to track when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Stop observing after it enters view
        }
      },
      { threshold: 0.3 } // Trigger when 10% of the target is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="satisfied-customer-section" ref={containerRef}>
      <div className={`satisfied-customer-container ${inView ? 'visible' : ''}`}>
        <div className={`satisfied-customer-left ${inView ? 'slide-in-left' : ''}`}>
          <h2>SATISFIED CUSTOMERS</h2>
        </div>
        <div className={`satisfied-customer-right ${inView ? 'slide-in-right' : ''}`}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ // Enable autoplay for the testimonial slider
              delay: 3000, // Delay in milliseconds between transitions
              disableOnInteraction: false, // Allow interaction without stopping autoplay
            }}
            modules={[Autoplay]}
            className="testimonial-slider"
          >
            <SwiperSlide>
              <div className="testimonial-content">
                <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                <p className="quote">
                  Nadeem has excellent design sense and is very willing to work with you until he comes back with a design that you truly love. Some of the attention to detail could be improved as I had to repeat some information during discussion and a few of the visual elements weren’t consistent in initial drafts, but the end result is polished and I'm quite happy.
                </p>
                <div className="testimonial-profile">
                  <img src={test1} alt="David Shapiro" className="profile-image" />
                  <p className="profile-name">Rusi</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-content">
                <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                <p className="quote">
                  Spark and their team did an excellent job on this Project. They worked late and on weekends to get the work finished and went the extra mile to help us get what we needed. I would highly recommend them and will use them again in the future.
                </p>
                <div className="testimonial-profile">
                  <img src={test2} alt="Rusi" className="profile-image" />
                  <p className="profile-name">David Shapiro</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-content">
                <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                <p className="quote">
                  Professional and On time. I highly recommend Nadeem.
                </p>
                <div className="testimonial-profile">
                  <img src={test2} alt="Rusi" className="profile-image" />
                  <p className="profile-name">Darbslayos</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="sponsors-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={6} // Change this to 6 for larger screens
          loop={true} // Ensure the slider can loop through slides
          autoplay={{ // Enable autoplay for the testimonial slider
            delay: 3000, // Delay in milliseconds between transitions
            disableOnInteraction: false, // Allow interaction without stopping autoplay
          }}
          modules={[Autoplay]}
          breakpoints={{
            912: {
              slidesPerView: 6,
            },
            500: {
              slidesPerView: 4,
            },
            0: { // This will apply to all screens less than 500
              slidesPerView: 2,
            },
          }}
          className="sponsors-slider"
        >
          <SwiperSlide><img src={dct} alt="DCT" className="sponsor-image" /></SwiperSlide>
          <SwiperSlide><img src={dream} alt="Dream" className="sponsor-image" /></SwiperSlide>
          <SwiperSlide><img src={glass} alt="Glass" className="sponsor-image" /></SwiperSlide>
          <SwiperSlide><img src={laptop} alt="Laptop" className="sponsor-image" /></SwiperSlide>
          <SwiperSlide><img src={sama} alt="Sama" className="sponsor-image" /></SwiperSlide>
          <SwiperSlide><img src={dct} alt="DCT" className="sponsor-image" /></SwiperSlide>
          <SwiperSlide><img src={sama} alt="Sama" className="sponsor-image" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SatisfiedCustomer;
