import Images from "next/image"
import por from "./../../assets/img/porter2.png"
import gruz from "./../../assets/img/gruz.png"
import meb from "./../../assets/img/meb.png"
import mus from "./../../assets/img/mus.png"
import sprinter from "./../../assets/img/sprinter.png"

import Slider from "react-slick";

export default function Services() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="services">
            <div className="container">
                <div className="services-general">
                    <div className="services-general__title">
                        <h1> Грузовые перевозки по низкой цене осуществляются в любое время дня и ночи. Организуем
                            комфортный переезд или быструю доставку груза по Бишкеку и Кыргызстану.</h1>
                    </div>

                    <div>
                        <Slider {...settings}>
                            <div className="services-general__block">
                                <div className="services-general__block__square">
                                    <div><Images src={por} alt="img"/></div>
                                    <h1>Портер </h1>
                                    <p>У нас имеются 20 <br/> портеров</p>
                                    <h2>500 сом/час</h2>
                                </div>
                            </div>
                            <div className="services-general__block">
                                <div className="services-general__block__square">
                                    <div><Images src={gruz} alt="img"/></div>
                                    <h1>Грузчики</h1>
                                    <p>Мы сотрудничаем с 80 <br/>грузчиками</p>
                                    <h2>300 сом/час</h2>
                                </div>
                            </div>
                            <div className="services-general__block">
                                <div className="services-general__block__square">
                                    <div><Images src={meb} alt="img"/></div>
                                    <h1>Разборка/сборка мебели</h1>
                                    <p>У нас имеются 20 портеров</p>
                                    <h2>500 сом/час</h2>
                                </div>
                            </div>
                            <div className="services-general__block">
                                <div className="services-general__block__square">
                                    <div><Images src={mus} alt="img"/></div>
                                    <h1>Вывоз мусора</h1>
                                    <p>Мы за чистый город и за <br/>чистый дом</p>
                                    <h2>От 1000 сом</h2>
                                </div>
                            </div>
                            <div className="services-general__block">
                                <div className="services-general__block__square">
                                    <div><Images src={sprinter} alt="img"/></div>
                                    <h1>Спринтер</h1>
                                    <p>У нас имеются 20 <br/> спринтеров</p>
                                    <h2>500 сом/час</h2>
                                </div>
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}