import Profile from './Profile/Profile';
import NavBar from './NavBar/NavBar';
import styles from './Main.module.css';
import Dialogs from "./Dialogs/Dialogs";

const Main = () => {
    return(
        <main>
            <NavBar/>
            <div className={styles.content}>
                <Profile/>
                {/*<Dialogs/>*/}
            </div>
        </main>
    )
}

export default Main;