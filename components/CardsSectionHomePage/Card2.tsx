"use client"
import { animate } from "motion";
import { motion, MotionValue, useInView, useMotionValue, useScroll, useTransform } from "motion/react"
import { useEffect, useRef } from "react";

type Props = {
    y: MotionValue<number>;
    scalex: MotionValue<number>;
}


function Card2({ y, scalex }: Props) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });


    return (
        <motion.div
            style={{ y: y, scaleX: scalex }}
            className="absolute  w-3/4 h-[90vh] bg-[#161617] rounded-[60px] p-20 border-[#6f6f6f] border-1 flex  gap-10"
        >
            <div className="flex flex-col w-1/2">
                <span className="font-[800] text-[100px] font-sfprodisplay text-amber-50">
                    Tu Estilo, Tu Regla
                </span>
                <p className="text-[35px] font-sfprodisplay text-[#6f6f6f] leading-none">
                    Renueva tu armario con tendencias que se adaptan a tu ritmo de vida. Comodidad y diseño en cada prenda.
                </p>
            </div>
            <div className="w-1/2 items-center flex">
                <div className=" h-4/6 flex justify-center w-full relative items-center">
                    <motion.img src="/heroimg/img1.jpeg" alt="Card Image" className="absolute object-cover h-full w-[300px] rounded-4xl z-10" />
                    <motion.img
                        ref={ref}
                        initial={{ x: 0 }}
                        animate={isInView ? { x: 170 } : { x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}

                        src="/heroimg/img2.jpeg" alt="Card Image" className="absolute object-cover h-3/4 w-[250px] rounded-4xl" />
                    <motion.img
                        ref={ref}
                        initial={{ x: 0 }}
                        animate={isInView ? { x: -170 } : { x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}

                        src="/heroimg/img3.jpeg" alt="Card Image" className="absolute object-cover h-3/4 w-[250px] rounded-4xl" />
                </div>

            </div>
        </motion.div>
    )


}

export default Card2;