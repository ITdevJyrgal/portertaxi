import {useState} from "react";
import Image from "next/image";
import check from "./../../assets/img/check.png"
import React from "react";
import {useForm} from "react-hook-form";
import {error} from "next/dist/build/output/log";
import axios from "axios"


export default function Form() {
    const [active, setActive] = useState(false)


    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    console.log(watch("example"));

    return (
        <section id="form">
            <div className="container">
                <div className="form-general">

                    <div
                        className={active ? 'form-general__div active' : 'form-general__div'}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                <div className="form-general__title">
                                    <h1>Есть груз <span>прямо сейчас?</span></h1>
                                </div>


                                <label className="form-general__input"
                                       onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" name="name" placeholder="Ф.И.О"
                                           className={errors.name ? "form-general__input__input__error" : "form-general__input__input"}
                                           {...register("firstName", {
                                               required: true,
                                               maxLength: 20,
                                               pattern: /^[A-Za-z]+$/i
                                           })}
                                    />


                                    <input type="tel" name="tel" placeholder="Номер вашего телефона"
                                           className="form-general__input__input"
                                           {...register("Number", {pattern: /^[A-Za-z]+$/i})}
                                    />

                                </label>


                                <div className="form-general__item">
                                    <h1>Выберите <span>подходящие</span> услуги</h1>
                                </div>
                                <div className="form-general__radio">
                                 <div>
                                     <label>
                                         <input type="checkbox" name="radio"

                                                className={errors.name ? "form-general__radio__input__errors" : "form-general__radio__input"}

                                         />
                                         <p>Портер</p>
                                     </label>
                                     <label>
                                         <input type="checkbox" name="radio"

                                                className={errors.name ? "form-general__radio__input__errors" : "form-general__radio__input"}/>
                                         <p>Грузчики</p>
                                     </label>
                                 </div>
                                <div>
                                    <label>
                                        <input type="checkbox" name="radio"

                                               className={errors.name ? "form-general__radio__input__errors" : "form-general__radio__input"}/>
                                        <p>Разборка/сборка мебели</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="radio"

                                               className={errors.name ? "form-general__radio__input__errors" : "form-general__radio__input"}/>
                                        <p>Вывоз мусора</p>
                                    </label>
                                </div>

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
                        </form>


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