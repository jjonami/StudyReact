import { Component } from 'react/cjs/react.production.min';
import './App.css';
import TOC from './components/TOC';
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
    //[render()] 보다 먼저 호출 > 어떤 값들을 초기화 하고싶을 경우 [constructor()] 내부에 작성
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            seleted_id: 0,
            welcome: {title: 'Welcome', desc: 'Hello'},
            subject: {title: 'React', sub: 'I\'m Ready!' },
            contents: [
                {id: 0, title: 'intro', desc: 'say hello'},
                {id: 1, title: 'program', desc: 'say something...'},
                {id: 2, title: 'outro', desc: 'say bye'},
            ]
        }
    }
    render(){
        let _title, _desc = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }else if(this.state.mode === 'read'){
            _title = this.state.contents[this.state.seleted_id].title;
            _desc = this.state.contents[this.state.seleted_id].desc;
        }
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function(){
                        this.setState({mode: 'welcome'});
                    }.bind(this)}
                />
                <TOC onChangePage={function(id){
                    this.setState({
                        mode: 'read',
                        seleted_id: id
                    });
                }.bind(this)} 
                    data={this.state.contents}
                />
                <Content title={_title} desc={_desc}/>
            </div>
        )
    }
}

export default App;