import React, { ReactNode } from 'react'


interface SvgIconProps {
    size?: number;
    color?: string;
    children: ReactNode;
}

const SvgIcon: React.FC<SvgIconProps> = ({
    size = 24, // Default size: 24px
    color = "currentColor", // Default color: inherits text color
    children,
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill={color}>{children}</g>
        </svg>
    )
}

export default SvgIcon