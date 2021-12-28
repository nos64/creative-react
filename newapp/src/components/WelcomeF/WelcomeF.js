
export default function WelcomeF ({user}) {
  if (user) {
    return <h1>Hello, {user}</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
