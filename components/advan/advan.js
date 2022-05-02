import Image from "next/image";
import advandata from "./advandata";

export default function Advan() {
    return (
        <section className="advan">
            <div className="container">
                <div className="advan-general">
                    {
                        advandata.map(el => {
                            return (
                                <div key={el.id}>
                                    <div className="advan-general__block">
                                        <Image src={el.images} alt="img"/>
                                        <p>{el.title}</p>
                                    </div>
                                    {/*<h1>{el.item}</h1>*/}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}