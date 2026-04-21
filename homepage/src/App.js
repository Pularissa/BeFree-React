// src/App.js
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">BeFree</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      <main className="content">
        <h1>Welcome to BeFree</h1>
        <p>Your safe space for support and connection.</p>
      </main>
    </div>
  );
}

export default App;
