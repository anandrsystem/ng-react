import React from "react";

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const list = this.props.itemsList ? this.props.itemsList.map((item, key) => {
      return <li key={key}>{item}</li>
    }) : null;

    return (
      <div>
        <h3>React Listing</h3>
        <ul>{list}</ul>
      </div>
    );
  }
}