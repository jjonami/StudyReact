import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Home1 from "./components/page1/Home1";
import Home2 from "./components/page2/Home2";
import Home3 from "./components/page3/Home3";
import VideoPlayer from "./components/page4/VideoPlayer";
import Counter from "./components/Counter";
import CounterContainer from "./containers/CounterContainer";

class App extends Component {
    //[render()] 보다 먼저 호출 > 어떤 값들을 초기화 하고싶을 경우 [constructor()] 내부에 작성
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    getPage(){
        switch (this.state.page){
            case 0: return <Home1 />;
            case 1: return <Home2 />;
            case 2: return <Home3 />;
            case 3: return <VideoPlayer />;
            case 4: return <CounterContainer />;
        }
    }

    render(){
        return (
            <div className="App">
                <div className='header'>
                    <button className='btnAccent' onClick={function (){
                        this.setState({
                            page: 0
                        })
                    }.bind(this)}>page1</button>
                    <button className='btnAccent' onClick={function (){
                        this.setState({
                            page: 1
                        })
                    }.bind(this)}>page2</button>
                    <button className='btnAccent' onClick={function (){
                        this.setState({
                            page: 2
                        })
                    }.bind(this)}>page3</button>
                    <button className='btnAccent' onClick={function (){
                        this.setState({
                            page: 3
                        })
                    }.bind(this)}>video</button>
                    <button className='btnAccent' onClick={function (){
                        this.setState({
                            page: 4
                        })
                    }.bind(this)}>counter</button>

                </div>
                {this.getPage()}
            </div>
        )
    }
}

export default App;
