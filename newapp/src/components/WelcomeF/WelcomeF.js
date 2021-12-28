
export default function WelcomeF ({user}) {
  if (user) {
    return <h1>Func Hello, {user}</h1>;
  }
  return <h1>Func Hello, Stranger.</h1>;
}
