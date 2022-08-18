import {Component} from "react/cjs/react.production.min";
import Subject from "./Subject";
import Control from "./Control";
import ReadContent from "./ReadContent";
import CreateContent from "./CreateContent";
import UpdateContent from "./UpdateContent";
import TOC from "../TOC";

class Home1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            selected_id: 0,
            welcome: {title: 'Welcome', desc: 'Hello'},
            subject: {title: 'My Books', sub: 'I\'m Ready!' },
            contents: [
                {id: 1, title: '정의란 무엇인가', desc: '마이클 샌델'},
                {id: 2, title: '코스모스', desc: '칼 세이건 '},
                {id: 3, title: '넛지', desc: '리처드 탈러, 캐스 선스타인'},
            ]
        }
    }

    getSelectedItem(){
        return this.state.contents[parseInt(this.state.selected_id)-1];
    }

    getContent(){
        let _title, _desc, _article, _data = null;

        // eslint-disable-next-line default-case
        switch (this.state.mode){
            case 'welcome':
                _title = this.state.welcome.title;
                _desc = this.state.welcome.desc;
                _article = <ReadContent title={_title} desc={_desc}/>
                break
            case 'read':
                _data = this.getSelectedItem();
                _article = <ReadContent title={_data.title} desc={_data.desc}/>
                break
            case 'create':
                _article = <CreateContent onSubmit={function (_title, _desc){
                    const newItem = {id: this.state.contents.length+1, title: _title, desc: _desc};
                    const _contents = this.state.contents.concat(newItem);
                    this.setState({
                        contents: _contents,
                        mode: 'read',
                        selected_id: newItem.id
                    })
                }.bind(this)}/>
                break
            case 'update':
                _data = this.getSelectedItem();
                _article = <UpdateContent data = {_data}
                                          onSubmit={function (_id, _title, _desc){
                                              const _contents = Array.from(this.state.contents); //배열 복사
                                              let find = _contents.find(v => v.id === _id);
                                              find.title = _title
                                              find.desc = _desc
                                              this.setState({
                                                  contents: _contents,
                                                  mode: 'read'
                                              })
                                          }.bind(this)}/>
                break
        }
        return _article;
    }

    render(){
        return(
            <div className='container'>
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
                        selected_id: id
                    });
                }.bind(this)}
                     data={this.state.contents}
                />
                <Control
                    onChangeMode={function(_mode){
                        if(_mode === 'delete'){
                            if(window.confirm('삭제하시겠습니까?')){
                                const _contents = Array.from(this.state.contents);
                                let i = 0;
                                while(i < _contents.length) {
                                    if(_contents[i].id === parseInt(this.state.selected_id))  {
                                        _contents.splice(i,1);
                                        break;
                                    }
                                    i = i + 1;
                                }
                                this.setState({
                                    mode: 'welcome',
                                    contents: _contents
                                });
                                alert('삭제완료');
                            }
                        }else{
                            this.setState({mode: _mode});
                        }
                    }.bind(this)}
                />
                {this.getContent()}
            </div>
        )
    }
}

export default Home1;