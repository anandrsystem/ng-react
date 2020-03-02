import React from "react";

class ListComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const list = this.props.itemsList ? this.props.itemsList.map((item, key) => {
      return <li key={key}>{item}</li>
    }) : null;

    const NavigateHome = () => {
      this.props.history.push('/');
    }

    const message = "Alter triggered from React but Fired from AngularJS";

    return (
      <div>
        <h3>Fruits List</h3>
        <ul>{list}</ul>
        <a href='#' onClick={NavigateHome}>Click here for to go home</a>
        <br /><br />
        <button onClick={(id) => this.props.alertMessage(message)}>Click to make Angular Alert!!</button>
      </div>
    );
  }
}

export default ListComponent;
