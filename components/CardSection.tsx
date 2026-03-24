"use client"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

function CardSection() {
   
const ref = useRef(null);

  const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 0.1, 0.69, 0.7, 0.9, 0.95], [900, 0, 0, 40, 40, 80]);
    const scaleinit = useTransform(scrollYProgress, [0.5, 0.6, 0.67, 0.7], [ 1, 0.9, 0.9, 0.8]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

    const y2 = useTransform(scrollYProgress, [0.3, 0.55, 0.8, 0.95], [999, 20, 20, 50]);
    const scalex2 = useTransform(scrollYProgress, [0.67, 0.7], [1, 0.9]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

    const y3 = useTransform(scrollYProgress, [0.57, 0.73], [999, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

    return (

        <section ref={ref} className="h-[300vh] bg-[#101111]">

            <div className="sticky top-0 h-screen  w-screen flex items-center justify-center">

                {/* Card 1 */}
                <motion.div
                    style={{ y: y1, scaleX: scaleinit }}
                    className="absolute w-3/4 h-[90vh] bg-[#161617] rounded-[60px] p-20 border-[#6f6f6f] border-1 flex  gap-10"
                >
                    <div className="flex flex-col w-1/2">
                        <span className="font-[800] text-[100px] font-sfprodisplay text-amber-50">
                            Brillo Propio
                        </span>
                        <p className="text-[35px] font-sfprodisplay text-[#6f6f6f] leading-none">
                            Eleva tu estilo diario con piezas únicas que cuentan tu historia. El detalle perfecto para destacar.
                        </p>
                    </div>
                    <div className="w-1/2">

                    </div>

                </motion.div>

                {/* Card 2 */}
                <motion.div
                    style={{ y: y2, scaleX: scalex2 }}
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

                {/* Card 3 */}
                <motion.div
                    style={{ y: y3 }}
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

            </div>
        </section>




    );
}
export default CardSection;