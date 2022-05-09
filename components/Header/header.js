import Link from "next/link"
import Burgermenu from "./burgermenu";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-general">
                    <div>
                        <Link href="/"><a>
                            <h1 className="header-general__logo">Портер <span
                                className="header-general__logo__logo">Такси</span>
                            </h1>
                        </a></Link>
                    </div>
                    <div>
                        <Link href="/rates">
                            <a className="header-general__nav">Тарифы</a>
                        </Link>
                        <Link href="/#services">
                            <a className="header-general__nav">Услуги</a>
                        </Link>
                        <Link href="/#description">
                            <a className="header-general__nav">Контакты</a>
                        </Link>
                    </div>
                    <div>
                        <div className="header-general__square">
                            <a href="https://t.me/talant202">  <i className="fab fa-telegram"/></a>
                            <a href="https://wa.me/qr/62UF2ON437RNA1"> <i className="fab fa-whatsapp"/></a>
                            <a href="tel:0504416833">0557-41-14-42</a>
                        </div>
                        <div className="header-general__square2">
                            <a href="https://t.me/talant202"> <i className="fab fa-telegram"/></a>
                            <a href="https://wa.me/qr/62UF2ON437RNA1"> <i className="fab fa-whatsapp"/></a>
                            <a href="tel:0509-13-99-66">0509-13-99-66</a>
                        </div>
                    </div>
                    <Burgermenu/>
                </div>
            </div>
        </header>
    )
}