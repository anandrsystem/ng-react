import React from 'react';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NavigateList = () => {
      this.props.history.push('/list');
    }

    return (
      <div>
        This is home component.
        <a href='#' onClick={NavigateList}>Click here for list component</a>
      </div>
    );
  }
}

export default HomeComponent;
