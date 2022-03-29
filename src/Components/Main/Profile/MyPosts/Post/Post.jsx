import styles from './Post.module.css';

const Post = (props) => {
    return(
            <div className={styles.post_list__item}>
                <img className={styles.user_avatar} src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt=""/>
                <p>{props.message}</p>
                <span>Likes:{props.likesCount}</span>
            </div>
    )
}

export default Post;