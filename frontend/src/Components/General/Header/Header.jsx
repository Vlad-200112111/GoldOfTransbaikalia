import React from "react";
import DropDownMenu from "../../UI/DropDownMenu/DropDownMenu";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

function Header() {
  const HeaderItems = [
    { id: 0, name: "Главная", link: "/" },
    { id: 1, name: "Публикации", link: "/publications" },
    { id: 2, name: "Карта", link: "/map" },
    { id: 3, name: "Лицензии", link: "licenses" },
    { id: 4, name: "Статистика", link: "statistic" },
  ];
  const DropDowmList = [
    { id: 0, name: "Новая публикация +", link: "/create-publication" },
    { id: 1, name: "Настройки", link: "/settings" },
    { id: 2, name: "Профиль", link: "/profile" },
    { id: 3, name: "Выйти", link: "/sign-out" },
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
  return (
    <header className="border-bottom p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <HeaderLinks HeaderItems={HeaderItems} />
          <HeaderSearch />
          <DropDownMenu
            OuterElement={DropDownElement}
            MenuList={DropDowmList}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
