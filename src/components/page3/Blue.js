import { Component } from 'react/cjs/react.production.min';

class Blue extends Component{
  render(){
    return(
        <div className="fire-box" id="component_blue" onClick={this.props.onChangeColor}  style={{backgroundColor : this.props.color}}>
             <h1>blue</h1>
        </div>
    )
  }
}

export default Blue;