function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';

  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked)},
    text
  );
}

function LikeButtonJSX() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';

  return (
    <button onClick={() => setLiked(!liked)}>{text}</button>
  )
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
// root.render(React.createElement(LikeButton))
root.render(<LikeButtonJSX />)