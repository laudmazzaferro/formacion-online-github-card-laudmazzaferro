import React from 'react';
import Select from './Components/Select';
import Card from './Components/Card';
import { fetchMembers } from './services/fetchMembers';
import { fetchMember }  from '';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      selectMember: '',
      member:{}
    }
    this.getMembers = this.getMembers.bind(this);
    this.getSelectMember = this.getSelectMember.bind(this);
    this.getMemberInfo = this.getMemberInfo.bind(this);
  }
  componentDidMount() {
    this.getMembers();
  };
  getMembers() {
    fetchMembers()
      .then(data => {
        this.setState({
          members: data
        }, () => { console.log(this.state.members) })
      });
  };
  getSelectMember(value) {
    this.setState({
      selectMember: value
    },()=>{this.getMemberInfo()});
  };

  getMemberInfo(){

  }



  render() {
    const { members } = this.state;
    return (
      <div className="App">
        <main>
          <Select members={members} getSelectMember={this.getSelectMember}></Select>
          <Card></Card>
        </main>

      </div>
    )
  }
}

export default App;
