import { useState, useEffect } from 'react'

const Header = ({onHomeBtnClick, onMenuBtnClick, onBookTableBtnClick}) => {
    const [colorChange, setColorchange] = useState(false);
    useEffect(() => {
        const changeNavbarColor = () => {
            console.log("scrollling")
            if (window.scrollY >= 80) {
                setColorchange(true);
            } else {
                setColorchange(false);
            }
        }
        document.addEventListener("scroll", changeNavbarColor);
    })
    return (
        <header className={colorChange ? "header colorChange": "header"}>
        <div id="logo-container">
          <div onClick={onHomeBtnClick} id="logo">
          </div>
        </div>
        <div id="header-list-wrapper">
          <ul id="header-list">
            <li className="header-link"><a onClick={onHomeBtnClick}>HOME</a></li>
            <li className="header-link"><a onClick={onMenuBtnClick}>MENU</a></li>
            <li className="header-link" id="book-table-btn"><a onClick={onBookTableBtnClick}>BOOK A TABLE</a></li>
          </ul>
        </div>
      </header>
    )
}

export default Header