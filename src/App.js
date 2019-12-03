import React from 'react';
import Select from './Components/Select';
import Card from './Components/Card';
import { fetchMembers } from './services/fetchMembers';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    }
    this.getMembers = this.getMembers.bind(this);
  }
  componentDidMount() {
    this.getMembers();
  }
  getMembers(){
    fetchMembers()
    .then(data=>{
      this.setState({
        members:data
      },()=>{console.log(this.state.members)})
    })
  }

  render() {
    return (
      <div className="App">
        <main>
          <Select></Select>
          <Card></Card>
        </main>

      </div>
    )
  }
}

export default App;
