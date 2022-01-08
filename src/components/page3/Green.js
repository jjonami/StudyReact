import { Component } from 'react/cjs/react.production.min';

class Green extends Component{
  render(){
    return(
        <div className="fire-box" id="component_red" onClick={this.props.onChangeColor}  style={{backgroundColor : this.props.color}}>
             <h1>green</h1>
        </div>
    )
  }
}

export default Green;