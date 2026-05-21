function Message() {
  const name = "Kamran";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello</h1>;
}

export default Message;
