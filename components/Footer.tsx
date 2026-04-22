import Link from "next/link";

type FooterProps = {
    ref?: React.Ref<HTMLDivElement>;
}
function Footer({ref}:FooterProps) {
    return (
        <footer
         ref={ref}
         className="bg-[#0199db] text-slate-100 justify-center flex flex-col items-center gap-10 py-2">
            <div className="w-3/4 grid grid-cols-3 gap-10 py-10 mx-auto">

                <div className="flex flex-col gap-3">
                    <h3 className="font-[800] text-2xl">Contacto</h3>
                    <p>Correo: info@ mystore.com</p>
                    <p>Teléfono: +1 (123) 456-7890</p>
                </div>

                <div className="flex flex-col gap-3 items-center">
                    <div>
                        <h3 className="font-[800] text-2xl">Dirección</h3>
                        <p>Calle Principal 123, Ciudad, País</p>
                    </div>

                </div>

                <div className="flex flex-col gap-3 items-end  px-10">
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icon-socialmedia/facebook.svg" alt="Facebook" className="h-[30px] w-[30px]" />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icon-socialmedia/instagram.svg" alt="Instagram" className="h-[30px] w-[30px]" />
                    </Link>
                    <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icon-socialmedia/youtube.svg" alt="YouTube" className="h-[30px] w-[30px]" />
                    </Link>
                </div>

            </div>
            <div className="w-3/4 border-t-1">
                <p>&copy; 2023 My Store. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;