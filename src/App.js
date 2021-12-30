import { Component } from 'react/cjs/react.production.min';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    )
  }
}

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide Web!
      </header>
    )
  }
}

//table of contents (목차)
class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href='1.html'>no 1</a></li>
          <li><a href='2.html'>no 2</a></li>
          <li><a href='3.html'>no 3</a></li>
        </ul>
      </nav>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h1>Contenet</h1>
        Say somthing...
      </article>
    )
  }
}

export default App;
