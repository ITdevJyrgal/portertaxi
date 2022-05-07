import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import Link from "next/link"

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    function showSideMenu() {
        setSidebar(!sidebar);
    }

    return (
        <>
            <div className="navbar">
                <div to="#" className="menu-bars" onClick={showSideMenu}>
                    <FaIcons.FaBars className="menu-icon"/>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">

                        <li>
                            <Link href={"/"}>
                                <a>
                                    Домой
                                </a>
                            </Link>

                        </li>

                        <li>
                            <Link href={"/rates"}>
                                <a>
                                    Тарифы
                                </a>
                            </Link>

                        </li>
                        <li>

                            <Link href={"/#services"}>
                                <a>
                                    Услуги
                                </a>
                            </Link>
                        </li>
                        <li>

                            <Link href={"/#description"}>
                                <a>
                                    Контакты
                                </a>
                            </Link>
                        </li>

                        <div>
                            <div className="burger-general__square">
                                <i className="fab fa-telegram"/>
                                <i className="fab fa-whatsapp"/>
                                <a href="tel:0504416833">0504-41-68-33</a>
                            </div>
                            <div className="burger-general__square">
                                <i className="fab fa-telegram"/>
                                <i className="fab fa-whatsapp"/>
                                <a href="tel:0509-13-99-66">0509-13-99-66</a>
                            </div>
                        </div>
                    </ul>

                </nav>
            </div>
        </>
    );
}

export default Navbar;
