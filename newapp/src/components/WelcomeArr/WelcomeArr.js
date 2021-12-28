

const WelcomeArr = ({user}) => {
  if (user) {
    return <h1>ArrowFunc Hello, {user}</h1>;
  }
  return <h1>ArrowFunc Hello, Mister X.</h1>;
}

export default WelcomeArr;