import React, {useState} from "react";
import Link from "next/link"

export default function BurgerMenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div>
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-white"/>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"/>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"/>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </div>


                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                        }}>

                            <Link href={"/"}>
                                <a className="text-white text-2xl p-3"
                                   onClick={() => setIsNavOpen(false)}
                                >Тарифы</a>
                            </Link>

                            <Link href={"/aboutus"}>
                                <a className="text-white text-2xl p-3"
                                   onClick={() => setIsNavOpen(false)}
                                >Услуги</a>
                            </Link>

                            <Link href={"/services-page"}>

                                <a className="text-white text-2xl p-3"
                                   onClick={() => setIsNavOpen(false)}
                                >Контакты</a>

                            </Link>
                        </div>
                    </div>
                </section>

            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #00E3AD;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
}


