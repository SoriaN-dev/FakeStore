"use client"

import { motion, MotionValue, useInView } from "motion/react"
import { use, useEffect, useRef, useState } from "react";


type Props = {
    y: MotionValue<number>;
}


const images = [
    "/electronic/iphone17.png",
    "/electronic/pcgamer.png",
    "/electronic/GalaxyS25.png",
    "/electronic/macbook.png",
];

function Card3({ y }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval: any;

        if (isInView) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) return 100;
                    return prev + 1;
                });
            }, 30);
        } else {
            // 👈 reset cuando sale de pantalla
            setProgress(0);
        }

        return () => clearInterval(interval);
    }, [isInView]);


    const size = 400;
    const strokeWidth = 25;
    const radius = (size - strokeWidth) / 2;
    const center = size / 2;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (progress / 100) * circumference;

    //  cambia imagen según progreso
    const index = Math.min(
        Math.floor((progress / 100) * images.length),
        images.length - 1
    );

    const currentImage = images[index];
    return (
        <motion.div
            style={{ y: y }}
            className="absolute w-3/4 h-[90vh] bg-[#161617] rounded-[60px] p-20 border-[#6f6f6f] border-1 flex  gap-10"
        >
            <div className="flex flex-col w-1/2">
                <span className="font-[800] text-[100px] font-sfprodisplay text-amber-50">
                    Conecta el Futuro
                </span>
                <p className="text-[35px] font-sfprodisplay text-[#6f6f6f] leading-none">
                    Potencia tu productividad y entretenimiento con tecnología de vanguardia. La innovación que necesitas, hoy.
                </p>
            </div>
            <div className="w-1/2 justify-center flex items-center">
                <div
                    className="relative flex items-center justify-center"
                    style={{ width: size, height: size }}
                >
                    <svg width={size} height={size} className="absolute">
                        <circle
                            cx={center}
                            cy={center}
                            r={radius}
                            stroke="#e5e7eb"
                            strokeWidth={strokeWidth}
                            fill="transparent"
                        />

                        <motion.circle
                            ref={ref}
                            cx={center}
                            cy={center}
                            r={radius}
                            stroke="#0099da"
                            strokeWidth={strokeWidth}
                            fill="transparent"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            animate={{ strokeDashoffset: offset }}
                            transition={{ duration: 0.2 }}
                            style={{
                                transform: "rotate(-90deg)",
                                transformOrigin: "50% 50%",
                            }}
                        />
                    </svg>

                    <motion.img
                        key={currentImage}
                        src={currentImage}
                        className="object-contain z-10 "
                        style={{ width: size * 0.65, height: size * 0.65 }}
                    />
                </div>

            </div>
        </motion.div>
    )

}

export default Card3;