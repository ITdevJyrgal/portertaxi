export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-general">
                    <div>
                        <h1 className="header-general__logo">Портер <span className="header-general__logo__logo">Такси</span></h1>
                    </div>
                    <div>
                        <a href="#" className="header-general__nav" >Тарифы</a>
                        <a href="#" className="header-general__nav" >Услуги</a>
                        <a href="#" className="header-general__nav" >Контакты</a>

                    </div>
                    <div>
                        <div className="header-general__square">
                            <i className="fab fa-telegram"/>
                            <i className="fab fa-whatsapp"/>
                            <a href="tel:0504416833">0504-41-68-33</a>
                        </div>
                        <div className="header-general__square">
                            <i className="fab fa-telegram"/>
                            <i className="fab fa-whatsapp"/>
                            <a href="tel:0509-13-99-66">0509-13-99-66</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}