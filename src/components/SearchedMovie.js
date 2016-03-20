import React, { Component } from 'react';

export default class SearchedMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSearchedMovieClick = this.handleSearchedMovieClick.bind(this);
  }

  handleSearchedMovieClick(event) {
    console.log(this);
    console.log(event);
    console.log(event.target);
    // React.findDOMNode(this)
  }

  render() {
    let movieVal = this.props.returnedMovie,
      formatDate = '';

    if (movieVal['release_date']) {
      formatDate = '(' + movieVal['release_date'].substring(0, 4) + ')';
    }

    return <li movieId={movieVal.id} onClick={this.handleSearchedMovieClick}>{movieVal.title} {formatDate}</li>;
  }
}











// class CommentForm extends React.Component {
//   handleSubmit(e) {
//     e.preventDefault();
//     var author = React.findDOMNode(this.refs.author).value.trim();
//     var text = React.findDOMNode(this.refs.text).value.trim();
//     if (!text || !author) {
//       return;
//     }
//     this.props.onCommentSubmit({author: author, text: text});
//     React.findDOMNode(this.refs.author).value = '';
//     React.findDOMNode(this.refs.text).value = '';
//     return;
//   }

//   render() {
//     return (
//       <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
//       <input type="text" placeholder="Your name" ref="author" />
//       <input type="text" placeholder="Your comment" ref="text" />
//       <input type="submit" value="Post" />
//       </form>
//     )
//   }
// }
