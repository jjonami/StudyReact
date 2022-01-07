import {Component} from "react/cjs/react.production.min";



class Util extends Component {
    static logStyleErr      = 'color:red';
    static logStyleWarn     = 'color:yellow';
    static logStyleInfo     = 'color:blue';
    static logStyleSuccess  = 'color:green';

    static showLog(msg, style) {
        console.log('%c %s', style, msg);
    }
}

export default Util
