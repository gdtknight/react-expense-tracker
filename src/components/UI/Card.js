import './Card.css';

// wrapper component 연습

function Card(props) {
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>{props.children}</div>
  );

}

export default Card;
