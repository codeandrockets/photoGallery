import React, { Component } from 'react';

class Photo extends Component {
  
  constructor(props) {
  	super(props);
  	console.log("Hi");

  	this.state = {
  		liked: false
  	}
  }

  toggleLiked() {
  	this.setState({
  		liked: !this.state.liked
  	});
  }

  render() {
  	const buttonClass = this.state.liked ? 'active' : '';
    return (
      <div className="Photo">
        <img src={this.props.src} alt="" />
        <p>{this.props.caption}</p>
        <button onClick={(e) => {this.toggleLiked(e)}} className={buttonClass} >
        Like</button>
      </div>
    );
  }
}

export default Photo;