import { Component } from 'react/cjs/react.production.min';
import './App.css';
import TOC from './components/TOC';
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from './components/Control';
import CreateContent from "./components/CreateContent";

class App extends Component {
    //[render()] 보다 먼저 호출 > 어떤 값들을 초기화 하고싶을 경우 [constructor()] 내부에 작성
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            seleted_id: 0,
            welcome: {title: 'Welcome', desc: 'Hello'},
            subject: {title: 'My Books', sub: 'I\'m Ready!' },
            contents: [
                {id: 0, title: '정의란 무엇인가', desc: '마이클 샌델'},
                {id: 1, title: '코스모스', desc: '칼 세이건 '},
                {id: 2, title: '넛지', desc: '리처드 탈러, 캐스 선스타인'},
            ]
        }
    }
    render(){
        let _title, _desc, _article = null;
        // eslint-disable-next-line default-case
        switch (this.state.mode){
            case 'welcome':
                _title = this.state.welcome.title;
                _desc = this.state.welcome.desc;
                _article = <ReadContent title={_title} desc={_desc}/>
                break
            case 'read':
                _title = this.state.contents[this.state.seleted_id].title;
                _desc = this.state.contents[this.state.seleted_id].desc;
                _article = <ReadContent title={_title} desc={_desc}/>
                break
            case 'create':
                _article = <CreateContent onSubmit={function (_title, _desc){
                    const newItem = {id: this.state.contents.length, title: _title, desc: _desc};
                    const _contents = this.state.contents.concat(newItem);
                    this.setState({contents: _contents})
                }.bind(this)}/>
                break
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
                <Control 
                    onChangeMode={function(_mode){
                        this.setState({mode: _mode});
                    }.bind(this)}
                />
                {_article}
            </div>
        )
    }
}

export default App;