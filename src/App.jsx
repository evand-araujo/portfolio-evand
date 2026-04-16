function Header() {
  return (
    <header style={{ padding: "20px", textAlign: "center" }}>
      <h1>Evand Araújo</h1>
      <p>Desenvolvedor Front-end em formação</p>
    </header>
  );
}

function Projetos() {
  const projetos = [
    {
      nome: "Portfólio em React",
      descricao: "Aplicação desenvolvida com React utilizando componentização e renderização dinâmica.",
    },
    {
      nome: "Página de Login",
      descricao: "Interface simples de autenticação com HTML, CSS e JavaScript.",
    },
    {
      nome: "Site Institucional",
      descricao: "Website estático com estrutura responsiva e design básico.",
    },
  ];

  return (
    <section style={{ padding: "20px" }}>
      <h2>Projetos Desenvolvidos</h2>

      {projetos.map((projeto, index) => (
        <div
          key={index}
          style={{
            marginBottom: "15px",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
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
