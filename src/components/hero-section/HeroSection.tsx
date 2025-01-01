import React from "react";
import backgroundImage from "../../assets/bg.png";
import videoSource from "../../assets/video.mp4";
import backgroundSVG from "../../assets/videobgg.png";


const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center min-h-screen px-4 md:px-16">
            <div className="w-full md:w-[61.8%] flex justify-center items-center relative">
                <img
                    src={backgroundImage}
                    alt="Hero Left"
                    className="max-w-full h-auto"
                />
                <div className="absolute w-[90%] md:w-[806px] h-auto md:h-[254px] top-[10%] md:top-[170px] left-[5%] md:left-[80px]">
                    <h1 className="text-h1 font-bold text-text-main">
                        Host your meeting with world-class amenities.
                        <br />
                        <span className="text-primary-1">Starting at</span> <span className="text-primary-2">₹199/-!</span>
                    </h1>
                </div>
            </div>

            <div className="w-full md:w-[38.2%] flex justify-center items-center">
                <div className="w-full max-w-md relative"
                >

                    <video loop
                        muted
                        autoPlay width="250" className="rounded-lg w-full h-auto object-cover">
                        <source src={videoSource} type="video/webm" />
                        <source src={videoSource} type="video/mp4" />

                        Download the
                        <a href={videoSource}>WEBM</a>
                        or
                        <a href={videoSource}>MP4</a>
                        video.
                    </video>
                    <div
                        className="absolute -top-16 left-0 w-full h-[100%] z-10"
                        style={{
                            backgroundImage: `url(${backgroundSVG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

