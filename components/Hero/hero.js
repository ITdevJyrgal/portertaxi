import porter from "./../../assets/img/porter.png"
import Image from "next/image"
import bg from "./../../assets/img/bg.png"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-general">
                    <div>
                        <h1 className="hero-general__title">ПЕРЕЕЗД ДОМОВ, КВАРТИР И ОФИСОВ</h1>
                        <li className="hero-general__desc">Грузовые перевозки осуществляются 24/7</li>
                        <li className="hero-general__desc">Организуем комфортный переезд по Бишкеку и по <span
                            className="hero-general__desc__desc2">всему Кыргызстану!</span></li>
                        <li className="hero-general__item">Любим и гордимся своей работой</li>
                      <div className="hero-general__btn__gen">

                      <Link href="#form"><a>
                            <button className="hero-general__btn">Вызвать</button>
                        </a></Link>

                      </div>
                </div>
                    <div>
                        <div className="hero-general__bg">
                            <Image src={bg} alt="img"/>
                        </div>
                        <div className="hero-general__cer"/>
                        <div className="hero-general__img">
                            <Image src={porter} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}