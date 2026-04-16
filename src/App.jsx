function Header() {
  return (
    <header className="header">
      <h1>Evand Araújo</h1>
      <p>Desenvolvedor Front-end em formação</p>
    </header>
  );
}

function Projetos() {
  const projetos = [
    {
      nome: "Portfólio em React",
      descricao: "Aplicação com componentização e renderização dinâmica.",
    },
    {
      nome: "Página de Login",
      descricao: "Interface simples utilizando HTML, CSS e JavaScript.",
    },
    {
      nome: "Site Institucional",
      descricao: "Website responsivo com layout organizado.",
    },
  ];

  return (
    <section className="projetos">
      <h2>Projetos</h2>

      <div className="grid">
        {projetos.map((projeto, index) => (
          <div key={index} className="card">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Projetos />
    </div>
  );
}

export default App;
