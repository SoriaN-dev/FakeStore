"use client"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

type Props = {
    y: MotionValue<number>;
    scalex: MotionValue<number>;
}

function Card2 ({ y, scalex }: Props) {

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
                    <div className="w-1/2">

                    </div>
                </motion.div>
    )


}

export default Card2;