import React from 'react';

type Props = {
  text: string;
}

type State = {
  text: string;
}

class PostBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text:''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }

    handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      this.setState({ text: event.target.value})
    }

    handlePost() {
      const trimmedText = this.state.text.trim();
      if (trimmedText) {
        this.props.onPost(trimmedText);
        this.setState({text:''})
      }
    }

    render() {
      return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
          <textarea
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="What's on your mind?"
          className="w-full bg-gray-700 p-3 rounded text-white resize-none h-24 mb-4"
          maxLength={280}
          />

          <button
          onClick={this.handlePost}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Post
          </button>
        </div>
      )
    }
}

export default PostBox;