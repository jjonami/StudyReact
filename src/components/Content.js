import {Component} from "react/cjs/react.production.min";

class Content extends Component{
    render(){
        return(
            <article>
                <h1>{this.props.title}</h1>
                {this.props.desc}
            </article>
        )
    }
}

export default Content;