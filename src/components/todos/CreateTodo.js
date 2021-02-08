import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
    todo: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div onSubmit={this.handleSubmit}>
        <form>
          <p>
          <label>add todo</label>
          <br />
          <input type="text" name="todo" value={this.state.todo} onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: formData => { dispatch({type: "ADD_TODO", payload: formData}) }
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
