import motion from "./../../assets/img/motion.png"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-general">
                    <div className="footer-general__contact">
                        <a href="#">Услуги</a>
                        <a href="#">Контакты</a>
                    </div>
                    <div>
                        <h1 className="footer-general__title "> ПортерТакси</h1>
                    </div>
                    <div className="footer-general__contact">
                        <a href="tel:0557-41-14-42">0557-41-14-42</a>
                        <a href="tel:0509-13-99-66">0509-13-99-66</a>
                    </div>

                </div>
                <div className="footer-general__width"/>
                <div className="footer-general2">
                    <div className="footer-general2__motion">
                        <h1>Все права защищены - 2022</h1>
                    </div>
                    <a href="https://www.motion-web.io/" >
                        <div className="footer-general2__motion2">

                   <span>
                         <Image src={motion} alt="img"/>
                   </span>
                            <h1>Студия Motion Web</h1>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}