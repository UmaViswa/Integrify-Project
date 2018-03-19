 import React from 'react'
import ReactDOM from 'react-dom'
import { headers, data } from './data.json'
import './index.css'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], name: '', email: '', phone: '' };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.d = { data }
  }

  render() {
    return (
      <div>
        <h3>List Of Participants</h3>
        <form onSubmit={this.handleSubmit} >
          <tr>
        <td> <input className="tablerow" type="text" id="name" value={this.state.name} onChange={this.handleName} placeholder="LastName, FirstName"/> </td>
        <td> <input className="tablerow" type="email" id="email" value={this.state.email} onChange={this.handleEmail} placeholder="Email"/> </td>
        <td> <input className="tablerow" type="number" id="phone" value={this.state.phone} onChange={this.handlePhone} placeholder="PhoneNumber"/> </td>
          <button>
            Add
          </button>
        </tr>
        </form>
        <Header items={this.state}/>
        <TodoList items={this.state.items} />
    <ReadList items={this.d.data} />
        </div>
    );
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePhone(e) {
    this.setState({ phone: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: Date.now(),
    
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      name: '',
      email: '',
      phone: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
           <RowStyler item={item} />
        ))}
      </ul>
    );
  }
}

class ReadList extends React.Component {
render() {
   return (
   <ul>
    {this.props.items.map(item =>
    <RowStyler item={item} />
        )}
    </ul>
    );
   }
}

class Header extends React.Component {
 constructor(props) {
    super(props);
    this.item = { name:'Last Name, First Name', email: 'Email', phone: 'Phone Number' };
   }
    render() {
        return (
        <ul>
        <RowStyler item={this.item} />
    </ul>
        )}}

class RowStyler extends React.Component {
    render () {
    return (
        <div className="headerrow">
           <PrintTd str={this.props.item.name } />
           <PrintTd str={this.props.item.email} />
           <PrintTd str={this.props.item.phone} />
        <td><button>
            Delete
          </button> </td>
        <td> <button>
           Edit
        </button> </td>
        </div> 
       );
    }
}
class PrintTd extends React.Component {
    render() {
        return (
                <td className="tablerow">  {this.props.str} </td> 
        )}}

ReactDOM.render(<TodoApp />, document.getElementById('root'));