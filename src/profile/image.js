function Image(props) {
    return (
    <div className='imageClass'>
        <img src={props.children} className="profile-image" alt="MootezZemmel" />
    </div>
    );
}

export default Image;