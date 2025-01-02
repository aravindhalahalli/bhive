import React from "react";
import CommunityIcon from '../../assets/icons/comunity.svg';
import AffordableIcon from '../../assets/icons/affordable.svg';
import GymIcon from '../../assets/icons/gym.svg';
import WifiIcon from '../../assets/icons/high-speed.svg';
import ComfortIcon from '../../assets/icons/comfort.svg';
import BookingIcon from '../../assets/icons/quick.svg';
import CafeIcon from '../../assets/icons/cafe.svg';
import SportsIcon from '../../assets/icons/sport.svg';

export type Feature = {
    icon: string;
    title: string;
    index?: number;
}

const features: Feature[] = [
    { icon: CommunityIcon, title: 'Community Events' },
    { icon: AffordableIcon, title: 'Affordable' },
    { icon: GymIcon, title: 'Gym Facilities' },
    { icon: WifiIcon, title: 'High-Speed WiFi' },
    { icon: CafeIcon, title: 'Cafe & Tea Bar' },
    { icon: ComfortIcon, title: 'Comfort Lounges' },
    { icon: BookingIcon, title: 'Quick Booking' },
    { icon: SportsIcon, title: 'Sports Area' },
];

const Features: React.FC = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 md:px-6">
            <h2 className="font-bold text-text-main text-left mb-8 md:mb-10 text-[24px] md:text-[36px]">
                Why Choose Us?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-0">
                {features.map((feature, index) => {
                    const isFirstRow = index < 4;
                    const isLastRow = index >= 4;
                    const isFirstColumn = index % 4 === 0;
                    const isLastColumn = (index + 1) % 4 === 0;

                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center border hover:scale-100 hover:shadow-lg transition-transform duration-300 hover:bg-white hover:rounded-md ${isFirstRow ? 'border-t-0' : ''
                                } ${isLastRow ? 'border-b-0' : ''
                                } ${isFirstColumn ? 'border-l-0' : ''
                                } ${isLastColumn ? 'border-r-0' : ''
                                }`}
                        >
                            <img src={feature.icon} alt={feature.title} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
