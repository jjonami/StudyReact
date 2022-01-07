import {useEffect, useState} from "react";
import Util from "../../utils/util";

function FuncComp(props){
    let numberState = useState(props.initNum);
    let number = numberState[0];
    let setNumber = numberState[1];

    // let dateState = useState((new Date()).toString());
    // let date = dateState[0];
    // let setDate = dateState[1];
    // ===> 축약형
    let [date, setDate] = useState((new Date()).toString());

    Util.showLog('func ==> render', Util.logStyleErr)

    //side effect > 여러개 설치가능
    //두번째 인자로 빈배열을 보내면 최초 1회만 실행
    useEffect(function (){
        Util.showLog('func ==> useEffect (componentDidMount)', Util.logStyleErr)

        //clean up > class : componentDidMount()
        return function cleanup(){
            Util.showLog('func ==> useEffect return (componentWillUnmount)', Util.logStyleErr)
        }
    }, []);

    //특정 인자값으로 콜백 함수를 관리
    //ex) state > [number]가 바뀔때만
    useEffect(function (){
        Util.showLog('func ==> useEffect for date (componentDidMount && componentDidUpdate)', Util.logStyleInfo)

        //clean up > class : componentDidMount()
        return function cleanup(){
            Util.showLog('func ==> useEffect for date return (componentWillUnmount)', Util.logStyleInfo)
        }
    }, [date]);

    useEffect(function (){
        Util.showLog('func ==> useEffect for number (componentDidMount && componentDidUpdate)', Util.logStyleSuccess)

        //clean up > class : componentDidMount()
        return function cleanup(){
            Util.showLog('func ==> useEffect for number return (componentWillUnmount)', Util.logStyleSuccess)
        }
    }, [number]);

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