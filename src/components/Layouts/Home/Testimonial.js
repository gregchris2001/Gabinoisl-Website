import React, { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import sanityClient from "../../../client";
import TestimonyImg from "../../../images/testimony-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Testimonials = () => {
  const demoTestimonials = [
    {
      img: TestimonyImg,
      text: "Wow just wow! I’ve already told a few people about Sofary. The light was packaged very well.",
      name: "— Steven W.",
    },
  ];

  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonial"] {
          name,
          image[]{
              asset->{
                url
              }
          },
          testimonial
        }`
      )
      .then((data) => {
        setTestimonials(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const context = testimonials.length ? testimonials : demoTestimonials;

  return (
    <div className="text-center py-5">
      <h1>Testimonials</h1>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {context.map((ctx, index) => (
            <SwiperSlide key={index}>
              <Card
                className="my-3 mx-auto"
                style={{ width: "402px", background: "white" }}
              >
                <Card.Img
                  variant="top"
                  src={ctx.image ? ctx.image[0].asset.url : ctx.img}
                  style={{ width: "100%", height: "232px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Text style={{ color: "black" }}>
                    {ctx.testimonial || ctx.text}
                  </Card.Text>
                  <Card.Text style={{ color: "black", fontWeight: "bold" }}>
                    {ctx.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Testimonials;
