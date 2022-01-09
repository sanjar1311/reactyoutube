import "./Header.scss"

import burger from "../../images/menu.svg";
import logo from "../../images/logo.svg";
import searchIcon from "../../images/search.png";
import recorderIcon from "../../images/recorder-btn.svg";
import moreIcon from "../../images/more-btn.svg";
import notification from "../../images/notification-btn.svg";
import user from "../../images/user.png";

function Header() {

  return(
    <header className="header">
    <div className="container header__inner-side">
      <div className="header__left-side">
        <button className="btn header__burger">
          <img src={burger} width="20" height="17" alt="Menu Icon" />
        </button>
        <a className="link header__logo" href="#">
          <img src={logo} alt="Site Logo" />
        </a>
      </div>
      <div className="header__center">
        <div className="header__search-form">
          <input className="header__search-input" type="text" placeholder="Search" required />
          <button className="btn header__search-btn">
            <img src={searchIcon} alt="search-icon" />
          </button>
        </div>
      </div>
      <div className="header__right-side">
        <button className="btn header__recorder-btn">
          <img src={recorderIcon} width="27" height="20" alt="recorder button" />
        </button>
        <button className="btn header__more-btn">
          <img src={moreIcon} alt="more-button" />
        </button>
        <button className="btn header__notification-btn">
          <img src={notification} alt="notification button" />
        </button>
        <button className="btn header__user-btn">
          <img src={user} alt="user image" />
        </button>
      </div>

      {/* Small screen Search input open */}
      <div className="header__small-search">
        <div className="small-screen__form">
          <input className="small-screen__input"  type="text" placeholder="Search" required />
          <button className="small-screen__btn close-search-area-btn btn">
            <img src={searchIcon} alt="search-icon" />
          </button>
        </div>
      </div>

    </div>
  </header>
  )
}

export default Header