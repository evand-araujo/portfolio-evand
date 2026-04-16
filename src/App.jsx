function Header() {
  return (
    <header style={{ padding: "20px", textAlign: "center" }}>
      <h1>Evand</h1>
      <p>Meu Portfólio em React</p>
    </header>
  );
}

function Projetos() {
  const projetos = [
    {
      nome: "Projeto 1",
      descricao: "Meu primeiro projeto React",
    },
    {
      nome: "Projeto 2",
      descricao: "Site simples usando JavaScript",
    },
  ];

  return (
    <section style={{ padding: "20px" }}>
      <h2>Meus Projetos</h2>
      {projetos.map((projeto, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
        </div>
      ))}
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Projetos />
    </div>
  );
}

export default App;
