import React from "react";
import backgroundImage from "../../assets/images/bg.png";
import videoSource from "../../assets/images/video.mp4";
import backgroundSVG from "../../assets/images/videobgg.png";

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row min-h-screen items-center md:min-h-0">
            <div className="w-full md:w-[61.8%]">
                <img
                    src={backgroundImage}
                    alt="Hero Left"
                    className="max-w-full h-auto"
                />
                <div className="absolute text-center md:text-left md:w-[806px] h-auto md:h-[254px] top-[75%] md:top-[190px] left-[5%] md:left-[140px]">
                    <h1 className="text-h1 font-bold text-text-main text-[20px] md:text-[58px]">
                        Host your meeting with world-class amenities.
                        <br />
                        <span className="text-primary-1">Starting at</span> <span className="text-primary-2">₹199/-!</span>
                    </h1>
                </div>
            </div>
            <div className="w-full md:w-[38.2%]"
            >
                <div className=" relative">
                    <div className="w-full max-w-md">
                        <video
                            loop
                            muted
                            autoPlay
                            className="rounded-lg w-full h-auto object-cover !bg-[#F9FAFF]"
                        >
                            <source src={videoSource} type="video/webm" />
                            <source src={videoSource} type="video/mp4" />
                            Download the
                            <a href={videoSource}>WEBM</a>
                            or
                            <a href={videoSource}>MP4</a> video.
                        </video>
                    </div>
                    <div
                        className="absolute -top-40 left-0 w-full h-full z-10"
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
