"use client"

import { animate } from "motion";
import { motion, MotionValue, useMotionValue } from "motion/react"
import { useEffect, useRef, useState } from "react";

type Props = {
    y: MotionValue<number>;
    scalex: MotionValue<number>;
}


const images = [
    "/heroimg/img1.jpeg",
    "/heroimg/img2.jpeg",
    "/heroimg/img3.jpeg",
    "/heroimg/img4.jpeg",
    "/heroimg/img5.jpeg",
    "/heroimg/img6.jpeg",
]

function Card({ image }: { image: string }) {
    const [showOverlay, setShowOverlay] = useState(false);
    return (
        <div className=" h-[300px] min-w-[230px] rounded-2xl w-40 bg-amber-400 relative overflow-hidden">
            <img src={image} alt="Gallery Image" className="object-cover h-[300px]" />
        </div>
    )

}

function Card1({ y, scalex }: Props) {

    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);

    const yTranslationUp = useMotionValue(0);
    const yTranslationDown = useMotionValue(0);

    useEffect(() => {
        const element = ref1.current;
        if (!element) return;

        const totalHeight = element.scrollHeight / 2;

        animate(yTranslationUp, [0, -totalHeight], {
            ease: "linear",
            duration: 20,
            repeat: Infinity
        });

        animate(yTranslationDown, [-totalHeight, 0], {
            ease: "linear",
            duration: 20,
            repeat: Infinity
        });

    }, []);

    return (
        <motion.div
            style={{ y: y, scaleX: scalex }}
            className="absolute w-3/4 h-[90vh] bg-[#161617] rounded-[60px] p-15 border-[#6f6f6f] border-1 flex  gap-10"
        >
            <div className="flex flex-col w-1/2 pt-20">
                <h1 className="font-[800] text-[100px] font-sfprodisplay text-amber-50">
                    Brillo 
                </h1>
                <h1 className="font-[800] text-[100px] font-sfprodisplay text-amber-50">
                     Propio
                </h1>
                <p className="text-[35px] font-sfprodisplay text-[#6f6f6f] leading-none">
                    Eleva tu estilo diario con piezas únicas que cuentan tu historia. El detalle perfecto para destacar.
                </p>
            </div>
            <div className="w-1/2 flex h-full relative overflow-hidden 
            [mask-image:linear-gradient(to_top,transparent,black_10%,black_95%,transparent)]"
            >



                <motion.div className="absolute  flex flex-col gap-4 left-10 "
                    ref={ref1}
                    style={{ y: yTranslationUp }}
                >
                    {
                        [...images, ...images, ...images].map((item, idx) => (
                            <Card key={idx} image={item} />

                        ))
                    }

                </motion.div>

                <motion.div className="absolute  flex flex-col gap-6 right-10"
                    ref={ref2}
                    style={{ y: yTranslationDown }}
                >
                    {
                        [...images, ...images, ...images].map((item, idx) => (
                            <Card key={idx} image={item} />

                        ))
                    }

                </motion.div>




            </div>

        </motion.div>
    )

}

export default Card1