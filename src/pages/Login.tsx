export function Login({
  onSubmit = (data: { id: string; network: string; region: string }) => {},
}) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));
    onSubmit({
      id: values.id as string,
      network: values.network as string,
      region: values.region as string,
    });
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <h1>
        Welcome to
        <strong>ASC DEMO</strong>
      </h1>
      <label>region</label>
      <input type="text" defaultValue={"EU"} name="region" required />
      <label>network</label>
      <input type="text" name="network" required />
      <label>id</label>
      <input type="text" name="id" required />
      <button type="submit">Login</button>
    </form>
  );
}
