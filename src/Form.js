import React from 'react'

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title: '',
      description:''
    }
  }

  handleSubmit = (event) => {
    this.props.add(this.state.title, this.state.description);
    this.setState({
      title: '',
      description:''
    })
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState ({[event.target.name]: event.target.value});
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Title</label>
          <input name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
        </div>
        <button>Add</button>
      </form>
      
    )
  }
}
