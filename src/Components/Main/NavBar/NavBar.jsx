import styles from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <div className={styles.sidebar}>
            <nav className={styles.sidebar_navigation}>
                <ul className={styles.sidebar_navigation__menu}>
                    <li className={styles.menu__item}>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li className={styles.menu__item}>
                        <NavLink to="/profile" >Profile</NavLink>
                    </li>
                    <li className={styles.menu__item}>
                        <NavLink to="/dialogs">Dialogs</NavLink>
                    </li>
                    <li className={styles.menu__item}>
                        <NavLink to="/contacts" >Contacts</NavLink>
                    </li>
                </ul>
                <ul className={styles.navigation_menu__settings}>
                    <li className={styles.menu__item}>
                        <NavLink to="/settings" >Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;