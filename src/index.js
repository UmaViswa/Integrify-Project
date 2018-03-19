import React from 'react'
import { render }  from 'react-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { makeData, Tips } from "./data_react_table";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: makeData(), name: '', email: '', phone: ''};
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <RowRender  data={this.state.items}/>
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
      id: Date.now()
   
    };
    this.setState(nextState => ({
      items: nextState.items.concat(newItem),
      name: '',
      email: '',
      phone: ''
    }));
  }
}


class RowRender extends React.Component {
    render() {
    const data =  this.props.data;
    return (
        <div>
        <ReactTable
        data = { data }
        columns={[
                {
                  Header: "Last Name, First Name",
                  accessor: "name",
                  maxWidth: 200
                },
                {
                  Header: "Email",
                  accessor: "email",
                  maxWidth: 300
                },
                {
                  Header: "Phone Number",
                  accessor: "phone",
                  maxWidth: 125
                },
                {
                    Cell: <button> Edit </button>,
                    width: 125
                },
                {
                    Cell: <button> Delete </button>,
                    width: 125
                },
            ]
        }
          defaultPageSize={25}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}


render(<TodoApp />, document.getElementById('root'));
