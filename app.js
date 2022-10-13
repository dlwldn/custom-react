import List from "./list";
function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return React.createElement('button', {
    onClick: () => setLiked(!liked)
  }, text);
}
function LikeButtonJSX() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(List, null), /*#__PURE__*/React.createElement(LikeButtonJSX, null));
}
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
// root.render(React.createElement(LikeButton))
root.render( /*#__PURE__*/React.createElement(App, null));