import {Component} from "react/cjs/react.production.min";
import {Provider} from "react-redux";
import {createStore} from "redux";
import Red from "./Red";
import Green from "./Green";
import Blue from "./Blue";

function reducer(state, action){
    console.log(state, action)
    if(state === undefined){
        return {color: 'yellow'}
    }
    let newState;
    if(action.type === CHANGE_COLOR){
        newState = Object.assign({}, state, {color: action.color});
    }
    return newState;
}

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
const CHANGE_COLOR = 'CHANGE_COLOR';


class Home3 extends Component{
    state = {
        color: 'yellow'
    }

    doChange(){
        this.setState({color:store.getState().color})
    }

    render(){
        store.subscribe(()=>this.doChange())
        return(
            <div className='container'>
                <Red color={this.state.color}
                    onChangeColor={function (){store.dispatch({type: CHANGE_COLOR, color: 'red'})}} />
                <Green color={this.state.color}
                    onChangeColor={function (){store.dispatch({type: CHANGE_COLOR, color: 'green'})}} />
                <Blue color={this.state.color}
                    onChangeColor={function (){store.dispatch({type: CHANGE_COLOR, color: 'blue'})}} />
            </div>
        )
    }
}

export default Home3;