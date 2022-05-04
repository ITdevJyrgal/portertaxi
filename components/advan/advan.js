import one from "./../../assets/img/1.png";
import two from "./../../assets/img/2.png";
import tre from "./../../assets/img/3.png";
import fo from "./../../assets/img/4.png";

import Image from "next/image";


export default function Advan() {
    return (
        <section className="advan">
            <div className="container">
                <div className="advan-general">
                    <div className="advan-general__block">
                        <Image src={one} alt="img"/>
                        <p>Надёжная и бережная доставка</p>
                    </div>
                    <div className="advan-general__title">
                        <h1>Преи <span>мущес</span>тва</h1>
                    </div>
                    <div className="advan-general__block">
                        <Image src={two} alt="img"/>
                        <p>Саблюдаем дорожные правила и этикет</p>
                    </div>

                </div>
                <div className="advan-general2">
                    <div className="advan-general__block">
                        <Image src={tre} alt="img"/>
                        <p>5 лет опыта работы</p>
                    </div>
                    <div className="advan-general__block">
                        <Image src={fo} alt="img"/>
                        <p>На месте когда и где нужно</p>
                    </div>

                </div>
                <div className="advan-general2__width"/>
            </div>
        </section>
    )
}