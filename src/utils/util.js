import {Component} from "react/cjs/react.production.min";



class Util extends Component {
    static logStyleY = 'color:yellow';
    static logStyleR = 'color:red';
    static logStyleG = 'color:green';

    static showLog(msg, style) {
        console.log('%c %s', style, msg);
    }
}

export default Util
