import React from 'react'
type Props = {
  onClick: () => void;
}

class PostButton extends React.Component<Props> {
  render() {
    return <button onClick={this.props.onClick}>
      +
    </button>
  }
}

export default PostButton;
