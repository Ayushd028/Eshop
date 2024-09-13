import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import Banner1 from "../../../photo/Banner1.png";
import Banner2 from "../../../photo/Banner2.png";
import Banner3 from "../../../photo/Banner3.png";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner-main">
      <Swiper
        scrollbar={{ hide: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper">
        {/* Slide 1 - Default layout */}
        <SwiperSlide>
          <div className="container-fluid Banner_1 py-2">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                  <div className="banner_col1 pt-md-4">
                    <h1>
                      Get <span>Healthy</span> Body with the{" "}
                      <span>Perfect</span> Exercises
                    </h1>
                    <p className="py-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi dolores dicta quidem ullam, sint consequuntur
                      voluptatum blanditiis animi modi repellendus, temporibus
                      dolore provident suscipit ipsa fugiat quia expedita autem
                      necessitatibus!
                    </p>
                    <div className="banner_btns">
                      <button className="main_btn">Shop Now</button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                  <div className="banner_col2">
                    <img
                      src={Banner1}
                      alt="Slide 1"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        float: "right",
                        marginLeft: "15px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Swap content and image */}
        <SwiperSlide>
          <div className="container-fluid Banner_2 py-2">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                {/* Image first */}
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                  <div className="banner_col2">
                    <img
                      src={Banner2}
                      alt="Slide 2"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        float: "left",
                        marginRight: "15px",
                      }}
                    />
                  </div>
                </div>
                {/* Content next */}
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                  <div className="banner_col1 pt-md-4">
                    <h1>
                      Get <span>Healthy</span> Body with the{" "}
                      <span>Perfect</span> Exercises
                    </h1>
                    <p className="py-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi dolores dicta quidem ullam, sint consequuntur
                      voluptatum blanditiis animi modi repellendus, temporibus
                      dolore provident suscipit ipsa fugiat quia expedita autem
                      necessitatibus!
                    </p>
                    <div className="banner_btns">
                      <button className="main_btn">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Default layout again */}
        <SwiperSlide>
          <div className="container-fluid Banner_3 py-2">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                  <div className="banner_col1 pt-md-4">
                    <h1>
                      Get <span>Healthy</span> Body with the{" "}
                      <span>Perfect</span> Exercises
                    </h1>
                    <p className="py-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi dolores dicta quidem ullam, sint consequuntur
                      voluptatum blanditiis animi modi repellendus, temporibus
                      dolore provident suscipit ipsa fugiat quia expedita autem
                      necessitatibus!
                    </p>
                    <div className="banner_btns">
                      <button className="main_btn">Shop Now</button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                  <div className="banner_col2">
                    <img
                      src={Banner3}
                      alt="Slide 3"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        float: "right",
                        marginLeft: "15px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
