import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/posts';
import { postComment } from './actions/comments';
import PostsComponent from './components/posts';
import SendCommentComponent from './components/sendComment';

class App extends React.Component {
  state = {
    commentText: ''
  }
  componentDidMount() {
    const  { getPosts } = this.props;
    getPosts();
  }

  handleCommentSend = async (e) => {
    e.preventDefault();

    const {commentText} = this.state;
    const  { sendComment, posts: {list} } = this.props;
    const lastPost = list[list.length - 1];
    await sendComment({postId: lastPost.id, body: commentText});
    this.setState({commentText: ''})

  }

  handleCommentChange = (event) => {
    this.setState({commentText: event.target.value})
  }


  render() {
    const {commentText} = this.state;
    const {posts: {list, isProcessing}} = this.props;
    if(isProcessing) {
      return <div>Loading...</div>
    }
    return <>
      <PostsComponent list={list}/>
      <SendCommentComponent handleSend={this.handleCommentSend} handleChange={this.handleCommentChange} value={commentText}/>
    </>
  }


}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  getPosts: fetchPosts,
  sendComment: postComment,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
