import React from 'react';
import CustomInput from "../../UI/CustomInput/CustomInput";
import Form from 'react-bootstrap/Form';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from "react-router-dom";
import api from "../../../Services/api";

function Registration(props) {

    const navigate = useNavigate();

    async function registration(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.append("username", formData.get("email"))
        formData.append('is_admin', formData.get("admin") ? true : false)
        await api.Authentication.signUp(formData).then(()=>navigate(''))
        NotificationManager.success('Регистрация прошла успешно. Проверьте свою почту для подтверждения email!');
    }

    return (
        <>
            <div className="m-5" style={{height: "90vh"}}>
                <h3>Регистрация</h3>
                <form onSubmit={registration}>
                    <div className="row">
                        <div className="col-6">
                            <CustomInput
                                required={true}
                                type={'text'}
                                title={'Имя'}
                                name={'first_name'}
                            />
                        </div>
                        <div className="col-6">
                            <CustomInput
                                required={true}
                                type={'text'}
                                title={'Фамилия'}
                                name={'last_name'}
                            />
                        </div>
                    </div>
                    <CustomInput
                        required={true}
                        type={'email'}
                        title={'Эл. почта'}
                        name={'email'}
                    />
                    <div className="row">
                        <div className="col-6">
                            <CustomInput
                                required={true}
                                type={'password'}
                                title={'Пароль'}
                                name={'password'}
                            />
                        </div>
                        <div className="col-6">
                            <CustomInput
                                required={true}
                                type={'password'}
                                title={'Повторите пароль'}
                                name={'re_password'}
                            />
                        </div>
                    </div>
                    <div className="m-3">
                        <Form.Check
                            type={"radio"}
                            id={`radio`}
                            label={`Администратор`}
                            name={"admin"}
                        />
                    </div>
                    <button type="submit" className="btn btn-success float-end">
                        Регистрация
                    </button>
                </form>
            </div>
            <NotificationContainer/>
        </>
    );
}

export default Registration;