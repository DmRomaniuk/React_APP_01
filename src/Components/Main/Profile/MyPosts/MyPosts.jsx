import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            <div className={styles.create_a__post}>
                <h2>New Post</h2>
                <textarea name="" id="" cols="30" rows="2"></textarea>
                <button>Add a Post</button>
            </div>
            <div className={styles.posts}>
                <Post message='It`s my first props tag'/>
                <Post message='Hello, how are you?'/>
            </div>
        </div>

    )
}

export default MyPosts;