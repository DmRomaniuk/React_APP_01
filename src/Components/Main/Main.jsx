import {BrowserRouter, Route, Routes} from "react-router-dom";
import styles from './Main.module.css';
import NavBar from './NavBar/NavBar';
import News from "./News/News";
import Profile from './Profile/Profile';
import Dialogs from "./Dialogs/Dialogs";
import Contacts from "./Contacts/Contacts";
import Settings from "./Settings/Settings";

const Main = () => {
    return(
        <BrowserRouter>
            <main>
                <NavBar/>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
)
}

export default Main;