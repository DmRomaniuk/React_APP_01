const Profile = () => {
    return(
        <div className='content'>
            <div className='content-info'>
                <div className='user-info'>
                    <div className='user-personal_avatar'>
                        <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="" width='150px' height='150px'/>
                    </div>
                    <div className='user-personal_info'>
                        <p className='name'>Romaniuk.D</p>
                        <p className='date-of_birth'>08.07.2003</p>
                        <p className='living'>city:Ternopil, Ukraine</p>
                    </div>
                </div>
                <div className='posts'>
                    <h1>My Posts</h1>
                    <div className='create-a-post'>
                        <h2>New Post</h2>
                        <input type="text"/>
                    </div>
                    <ul className='post-list'>
                        <li className='post-list_item'>New post - 1</li>
                        <li className='post-list_item'>New post - 2</li>
                        <li className='post-list_item'>New post - 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile;