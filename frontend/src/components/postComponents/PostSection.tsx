import React, { Component } from 'react';
import PostBox from './PostBox';
import PostButton from './PostButton';
import { sendPostCreation } from '../../apiRequests/user/savePost';

type State = {
  showPostBox: boolean;
};

class PostSection extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      showPostBox: false,
    };

    this.handleTogglePostBox = this.handleTogglePostBox.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleTogglePostBox() {
    this.setState((prevState) => ({
      showPostBox: !prevState.showPostBox,
    }));
  }

  async handlePost(text: string) {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    console.log('Posting:', { email, content: text });

    if (!token || !email) {
      alert('You are not logged in.');
      return;
    }

    try {
      const response = await sendPostCreation({ email, content: text }, token);
      const data = await response; // in case response.json() is called inside the utility
      console.log('✅ Post created and returned:', data);

      this.setState({ showPostBox: false });
    } catch (error) {
      console.error('❌ Failed to create post:', error);
      alert('Something went wrong. Try again.');
    }
  }

  render() {
    return (
      <div className="p-4">
        <PostButton onClick={this.handleTogglePostBox} />
        {this.state.showPostBox && (
          <PostBox onPost={this.handlePost} />
        )}
      </div>
    );
  }
}

export default PostSection;
