

const WelcomeArr = ({user}) => {
  if (user) {
    return <h1>Hello, {user}</h1>;
  }
  return <h1>Hello, Mister X.</h1>;
}

export default WelcomeArr;