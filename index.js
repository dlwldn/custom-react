import React from "react";
import ReactDOM from "react-dom";
function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement('button', {
    onClick: () => setLiked(!liked)
  }, text);
}

// function LikeButtonJSX() {
//   const [liked, setLiked] = React.useState(false);
//   const text = liked ? '좋아요 취소' : '좋아요';

//   return (
//     <button onClick={() => setLiked(!liked)}>{text}</button>
//   )
// }

// function App() {
//   return (
//     <>
//       <List />
//       <LikeButtonJSX />
//     </>
//   )
// }

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render( /*#__PURE__*/React.createElement(LikeButton));