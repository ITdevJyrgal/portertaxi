import {useEffect, useState} from "react";
import Image from "next/image";
import check from "./../../assets/img/check.png"
import React from "react";


export default function Form() {
    const [active, setActive] = useState(false)
    return (
        <section id="form">
            <div className="container">
                <div className="form-general">

                    <div
                        className={active ? 'form-general__div active' : 'form-general__div'}
                    >
                        <label>
                            <div className="form-general__title">
                                <h1>Есть груз <span>прямо сейчас?</span></h1>
                            </div>


                            <label className="form-general__input">
                                <input type="text" name="name" placeholder="Ф.И.О"  className="form-general__input__input" />
                                <input type="tel" name="tel" placeholder="Номер вашего телефона" className="form-general__input__input" />
                            </label>


                            <div className="form-general__item">
                                <h1>Выберите <span>подходящие</span> услуги</h1>
                            </div>
                            <div className="form-general__radio">
                                <label>
                                    <input type="checkbox" name="radio"/>
                                    <p>Портер</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="radio"/>
                                    <p>Грузчики</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="radio"/>
                                    <p>Разборка/сборка мебели</p>
                                </label>
                                <label>
                                    <input type="checkbox" name="radio"/>
                                    <p>Вывоз мусора</p>
                                </label>

                            </div>
                            <label className="form-general__area">
                                <input type="text" placeholder="Комментарии к заказу (необязательно)" name='text'/>
                            </label>
                            <input type="submit"
                                   onClick={() => setActive(true)}
                                   className="form-general__btn"
                                   placeholder="Заказать"
                            />
                        </label>


                    </div>
                    <div className={active ? "form-general__successful block" : "form-general__successful"}>
                        <div>
                            <h1>Ваш з<span>аказ пр</span>инят!</h1>
                            <p>Мы вам перезвоним ближайщие секунды с потврерждением. </p>
                            <Image src={check} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}