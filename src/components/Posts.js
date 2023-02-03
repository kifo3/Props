import PostList from './PostList';

function Posts(props) {
const {removePosts} = props
    return(
        <div>
            {props.posts.map(post => (
            <PostList key={post.id}
            id={post.id}
            name={post.name}
            removePosts={removePosts} />
            ))
            }
        </div>
    )
}

export default Posts;