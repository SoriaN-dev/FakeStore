"use client"

import { motion, MotionValue } from "motion/react"


type Props = {
    y: MotionValue<number>;
}



function Card3 ({ y}: Props) {
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
                    <div className="w-1/2">

                    </div>
                </motion.div>
    )

}

export default Card3;