function PostList(props) {
const {name, id, removePosts} = props
    return(
        <div className='todo'>
            <h4>{name}</h4>
            <button className='danger' onClick={() => removePosts(id)}>Delete</button>
        </div>
    )}


export default PostList;