import { Component } from 'react/cjs/react.production.min';

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

export default TOC;