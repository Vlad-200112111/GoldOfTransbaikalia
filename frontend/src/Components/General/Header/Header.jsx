import React, {useState} from "react";
import DropDownMenu from "../../UI/DropDownMenu/DropDownMenu";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import CustomInput from "../../UI/CustomInput/CustomInput";
import CustomInputFile from "../../UI/CustomInputFile/CustomInputFile";
import Button from 'react-bootstrap/Button';
import api from "../../../Services/api";
import {Link} from "react-router-dom";

function Header() {
    const [authentication, setAuthentication] = useState(false)
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(!show)

    const HeaderItems = [
        {id: 0, name: "Главная", link: "/"},
        {id: 1, name: "Публикации", link: "/publications"},
        {id: 2, name: "Карта", link: "/map"},
        {id: 3, name: "Лицензии", link: "licenses"},
        {id: 4, name: "Статистика", link: "statistics"},
    ];

    const DropDowmList = [
        {id: 0, name: "Новая публикация +", link: "/create-publication"},
        {id: 1, name: "Настройки", link: "/settings"},
        {id: 2, name: "Профиль", link: "/profile"},
        {id: 3, name: "Выйти", link: "/sign-out"},
    ];

    const DropDownElement = (
        <img
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle"
            src="https://images.unsplash.com/photo-1649737563108-1eb7d05ae989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8cmFuZG9tfHx8fHx8fHx8MTY1MjMyNzgzMg&ixlib=rb-1.2.1&q=80&w=1080"
        />
    );

    async function Authentication(event) {
        event.preventDefault()
        const {data: result} = await api.Authentication.authentication(new FormData(event.target))
    }

    return (
        <header className="border-bottom p-3">
            <ModalWindow
                titleButton="Авторизоваться"
                title="Авторизация"
                show={show}
                handleClose={handleShow}
                body={
                    <>
                        <CustomInput
                            type={'text'}
                            title={'Эл. почта'}
                            name={'email'}
                        />
                        <CustomInput
                            type={'password'}
                            title={'Пароль'}
                            name={'password'}
                        />
                    </>
                }
                functionForModalWindow={Authentication}
            />
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <HeaderLinks HeaderItems={HeaderItems}/>
                    <HeaderSearch/>
                    {
                        authentication ?
                            <DropDownMenu
                                OuterElement={DropDownElement}
                                MenuList={DropDowmList}
                            />
                            :
                            <>
                                <Button className='btn btn-success' onClick={handleShow}>
                                    Войти
                                </Button>
                                <Link className="baseLink" to={`/sign-up`}>
                                    <Button className='btn btn-success'>
                                        Регистрация
                                    </Button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
