import React, {Component} from 'react';

class WizardPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.onStatusChange) {
      return <React.Fragment>
        {this.props.onRender(this.props.onStatusChange)}
      </React.Fragment>
    } else {
      return <React.Fragment>

      </React.Fragment>
    }

  }
}

export default WizardPage;
