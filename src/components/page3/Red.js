import { Component } from 'react/cjs/react.production.min';

class Red extends Component{
  render(){
    return(
        <div className="fire-box" id="component_red" onClick={this.props.onChangeColor}  style={{backgroundColor : this.props.color}}>
             <h1>red</h1>
        </div>
    )
  }
}

export default Red;