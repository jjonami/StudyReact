import { Component } from 'react/cjs/react.production.min';

//table of contents (목차)
class TOC extends Component{
  render(){
      const lists = [];
      const data = this.props.data;
      let i = 0;
      while (i < data.length){
          lists.push(
            <li key={data[i].id}>
              <a 
                href={'/content/'+data[i].id} 
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}>{data[i].title}</a>
            </li>
          )
          i = i + 1;
      }
        return(
          <nav>
            <ul>{lists}</ul>
          </nav>
        )
  }
}

export default TOC;