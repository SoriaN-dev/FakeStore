"use client"

import { motion, MotionValue, useScroll, useTransform } from "motion/react"
import Link from "next/link";
import { useRef } from "react"

const IMG_SOURCES = [
    { src: "/heroimg/img1.jpeg", x: [-300, -250], y: [-300, -300], scale: [1.4, 0.7] },
    { src: "/heroimg/img2.jpeg", x: [-300, -50], y: [300, 300], scale: [1.4, 0.65] },
    { src: "/heroimg/img3.jpeg", x: [300, 250], y: [-300, -250], scale: [1.4, 0.9] },
    { src: "/heroimg/img4.jpeg", x: [300, 350], y: [300, 250], scale: [1.4, 0.9] },
    { src: "/heroimg/img5.jpeg", x: [400, 550], y: [0, -100], scale: [1.4, 0.7] },
    { src: "/heroimg/img6.jpeg", x: [-400, -500], y: [0, 0], scale: [1.4, 1.1] },
]

function FloatingImg({ data, progress }: { data: typeof IMG_SOURCES[0], progress: MotionValue<number> }) {
    const moveX = useTransform(progress, [0, 0.35, 0.45, 0.8], [0, data.x[0], data.x[0], data.x[1]]);
    const moveY = useTransform(progress, [0, 0.35, 0.45, 0.8], [0, data.y[0], data.y[0], data.y[1]]);
    const scale = useTransform(progress, [0, 0.15, 0.15, 0.35, 0.45, 0.8], [1, data.scale[0], data.scale[0], 1, 1, data.scale[1]]);

    return (
        <motion.div
            style={{ x: moveX, y: moveY, scale: scale }}
            className="w-65 h-75 absolute ">
            <img src={data.src} alt="Gallery Items" className="object-cover h-full w-full rounded-4xl" />
        </motion.div>

    )
}

function Hero() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const welcomeOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.22], [0, 1, 1, 0]);
    const welcomeScale = useTransform(scrollYProgress, [0, 0.1, 0.34], [1, 1.7, 1]);
    const shopOpacity = useTransform(scrollYProgress, [0.17, 0.23], [0, 1]);


    return (
        <section ref={ref} className="h-[210vh]">
            <div className="sticky top-0 h-screen  flex items-center justify-center bg-[#101111] overflow-hidden">
                <div className="relative w-3/4 h-full flex  items-center justify-center">
                    {IMG_SOURCES.map((data, index) => (
                        <FloatingImg data={data} key={index} progress={scrollYProgress} />
                    ))}

                </div>
                <motion.div style={{ opacity: welcomeOpacity }} className="absolute text-center">
                    <h1 className="font-bold text-6xl text-amber-50">Bienvenidos</h1>
                </motion.div>

                <motion.div style={{ opacity: shopOpacity }} className="absolute text-center flex flex-col gap-4  items-center">
                    <h2 className="font-bold text-9xl text-amber-50">Fake
                        <span className="text-white">Store</span></h2>
                    <p className="text-3xl text-zinc-500">Todo lo que te define, en un solo lugar.</p>

                    <motion.div
                        animate={{ scale: [1, 1.3, 0.9, 1], rotate: [0, 5, -5, 0] }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatDelay: 3
                        }}
                        className="p-3 bg-[#3aa9d8] rounded-2xl w-30 text-center cursor-pointer text-amber-50  text-xl"
                    >
                        <Link href="/products">Comprar</Link>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    )
}

export default Hero;