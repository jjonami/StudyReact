import {useEffect, useState} from "react";
import Util from "../utils/util";

function FuncComp(props){
    let numberState = useState(props.initNum);
    let number = numberState[0];
    let setNumber = numberState[1];

    // let dateState = useState((new Date()).toString());
    // let date = dateState[0];
    // let setDate = dateState[1];
    // ===> 축약형
    let [date, setDate] = useState((new Date()).toString());

    Util.showLog('func ==> render', Util.logStyleG)

    //side effect > 여러개 설치가능
    useEffect(function (){
        //class : componentDidMount() & componentDidUpdate()
        Util.showLog('func ==> useEffect', Util.logStyleG)

        //clean up > class : componentDidMount()
        return function cleanup(){
            Util.showLog('func ==> useEffect return', Util.logStyleG)
        }
    });

    return(
        <div className='container'>
            <h2>function style component</h2>
            <p>Num : {number}</p>
            <p>Date : {date}</p>
            <input type='button' value='random' className='btnPrimary' onClick={
                function (){setNumber(Math.random())}
            }/>
            <input type='button' value='date' className='btnPrimary' onClick={
                function (){setDate((new Date()).toString())}
            }/>
        </div>
    )
}

export default FuncComp