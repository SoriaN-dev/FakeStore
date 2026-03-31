"use client"
import { img } from "framer-motion/client";
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Card1 from "@/components/CardsSectionHomePage/Card1"
import Card2 from "@/components/CardsSectionHomePage/Card2"
import Card3 from "@/components/CardsSectionHomePage/Card3"


function CardSection() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 0.1, 0.69, 0.7, 0.9, 0.95], [900, 0, 0, 40, 40, 80]);
    const scaleX = useTransform(scrollYProgress, [0.5, 0.6, 0.67, 0.7], [1, 0.9, 0.9, 0.8]);


    const y2 = useTransform(scrollYProgress, [0.3, 0.55, 0.8, 0.95], [999, 20, 20, 50]);
    const scaleX2 = useTransform(scrollYProgress, [0.67, 0.7], [1, 0.9]);


    const y3 = useTransform(scrollYProgress, [0.57, 0.73], [999, 0]);


    return (

        <section ref={ref} className="h-[300vh] bg-[#101111]">

            <div className="sticky top-0 h-screen  w-screen flex items-center justify-center">
                <Card1 y={y1} scalex={scaleX} />
                <Card2 y={y2} scalex={scaleX2} />
                <Card3 y={y3} />


            </div>
        </section>




    );
}
export default CardSection;