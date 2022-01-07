import {Component} from "react/cjs/react.production.min";
import Util from "../utils/util";

class ClassComp extends Component{
    state = {
        number: this.props.initNum,
        date: (new Date()).toString()
    }
    componentWillMount(){
        Util.showLog('class ==> componentWillMount', Util.logStyleWarn)
    }
    componentDidMount(){
        Util.showLog('class ==> componentDidMount', Util.logStyleWarn)
    }

    componentWillUnmount(){
        Util.showLog('class ==> componentWillUnmount', Util.logStyleWarn)
    }

    componentDidUpdate(){
        Util.showLog('class ==> componentDidUpdate', Util.logStyleWarn)
    }

    render(){
        Util.showLog('class ==> render', Util.logStyleWarn)

        return(
            <div className='container'>
                <h2>class style component</h2>
                <p>Num : {this.state.number}</p>
                <p>Date : {this.state.date}</p>
                <input type='button' value='random' className='btnPrimary' onClick={
                    function (){
                        this.setState({
                            number: Math.random()
                        })
                    }.bind(this)
                }/>
                <input type='button' value='date' className='btnPrimary' onClick={
                    function (){
                        this.setState({
                            date: (new Date()).toString()
                        })
                    }.bind(this)
                }/>

            </div>
        )
    }
}

export default ClassComp