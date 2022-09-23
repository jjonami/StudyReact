import {Component} from "react/cjs/react.production.min";
import FuncComp from "./FuncComp";
import ClassComp from "./ClassComp";
import Counter from "../Counter";

class Home2 extends Component{
    state = {
        x: 10,
    }

    render(){
        return(
            <div className='container'>
                <FuncComp initNum={2}/>
                <ClassComp initNum={2}/>
                <Counter number={this.state.x}/>
            </div>
        )
    }
}

export default Home2;