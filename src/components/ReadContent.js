import {Component} from "react/cjs/react.production.min";

class ReadContent extends Component{
    render(){
        return(
            <article>
                <h1>{this.props.title}</h1>
                {this.props.desc}
            </article>
        )
    }
}

export default ReadContent;