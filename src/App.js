import './App.css';
import {Component} from 'react';
import Posts from './components/Posts'

class App extends Component {
    state = {
        posts: [
            {id: 1, name: 'JavaScript'},
            {id: 2, name: 'React'},
            {id: 3, name: 'Vue'},
        ]
    };

    removePosts = (id) => {
        this.setState({posts: this.state.posts.filter(post => post.id !== id)})

    }

    render() {
    const {posts} = this.state
        return (
            <div className="App">
             <Posts posts={posts}
                removePosts={this.removePosts} />
            </div>
         );
    }


}

export default App;
