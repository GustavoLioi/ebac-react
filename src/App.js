import './App.css';
import book from "./book.png" ;


function App() {
  return (
    <div className="container">
    <header className="App-header">
      <ul className= "books-posicion">
    <li className="livro"><img src={book} alt= "livro" /> </li>
    <li className="livro"><img src={book} alt= "livro" /> </li>
    <li className="livro"><img src={book} alt= "livro" /> </li>
    <li className="livro"><img src={book} alt= "livro" /> </li>

      </ul>
      <footer className='name'>
      <p>feito por: GUSTAVO MARINHO LIOI NASCENTES</p>

      </footer>
      </header>
    </div>
  );
}

export default App;
