export default function Login({ onSubmit = (username: any) => {} }) {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.target));

    onSubmit(values.username);
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <h1>
        Welcome to
        <strong>Amity Social Cloud.</strong>
      </h1>
      <label>login</label>
      <input type="text" name="username" required />
      <label>password</label>
      <input type="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  );
}
