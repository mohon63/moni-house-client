import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://www.allphones.com.au/media//ubcontentslider/images/s/a/samsung-galaxy-s20-available.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="text-warning"></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/1081/0050/files/4_18_1_1080x.jpg?v=1636690504"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className="text-warning"></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://www.mobileciti.com.au/media//ubcontentslider/images/m/o/mobileciti_neo_lite_banner.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className="text-warning"></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/1081/0050/files/iPhone_13_Cases_5_1080x.jpg?v=1636617572"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="text-warning"></h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;