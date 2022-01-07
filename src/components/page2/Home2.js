import {Component} from "react/cjs/react.production.min";
import FuncComp from "./FuncComp";
import ClassComp from "./ClassComp";

class Home2 extends Component{
    render(){
        return(
            <div className='container'>
                <FuncComp initNum={2}/>
                <ClassComp initNum={2}/>
            </div>
        )
    }
}

export default Home2;