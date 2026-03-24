"use client"

import { motion,useScroll,useTransform } from "motion/react"
import { useRef } from "react"

function Hero() {
     const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });
    const rotate = useTransform(scrollYProgress, [0,0.33,0.33,0.66,0.7,0.99], [-30, 90,180, 270, 270, 380]);
    const opacity = useTransform(scrollYProgress, [0,0.02], [0, 1]);
    const scale = useTransform(scrollYProgress, [0,0.5], [0.5, 4.5]);

    return (
        <section ref={ref} className="h-[150vh]">
            <div className="sticky top-0 h-screen  flex items-center justify-center bg-[#101111] overflow-hidden">
                <motion.div
                style={{ rotate, opacity, scale }}
           
                className="relative h-full flex  items-center justify-center perspective-[500px]">

                    {/* TOP */}
                    <motion.div className="w-70 rotate-x-[-80deg] h-100 absolute top-0 ">
                        <img src="/electronic.jpeg" className="object-cover h-full w-full rounded-4xl rotate-90" />
                    </motion.div>

                    {/* LEFT */}
                    <motion.div className="w-100 rotate-y-[88deg] h-100 absolute left-0">
                        <img src="/joyas.jpeg" className="object-cover h-full w-full rounded-4xl" />
                    </motion.div>

                    {/* TEXTO */}
                  

                    {/* RIGHT */}
                    <motion.div className="w-100 rotate-y-[-88deg] h-100 absolute right-0 ">
                        <img src="/weatherwoman.jpeg" className="object-cover h-full w-full rounded-4xl" />
                    </motion.div>

                    {/* BOTTOM */}
                    <motion.div className="w-70 rotate-x-[80deg]  h-100 absolute bottom-0 ">
                        <img src="/man.jpeg" className="object-cover h-full w-full rounded-4xl rotate-90" />
                    </motion.div>

                </motion.div>
                <div className="absolute">
                      <span className="font-bold text-[80px] font-sfprodisplay text-white text-center ">
                        Bienvenidos
                    </span>
                </div>

            </div>
           
        </section>
    )
}

export default Hero;