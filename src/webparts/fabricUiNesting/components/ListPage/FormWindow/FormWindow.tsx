import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react';
import styles from './FormWindow.module.scss';

import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';
import { Async } from 'office-ui-fabric-react/lib/Utilities';

import FormPage1 from './FormPage1/formPage1';
import FormPage2 from './FormPage2/formPage2';
import FormPage3 from './FormPage3/formPage3';

class FormWindow extends React.Component<any,any,any> {
  constructor(props:any) {
    super(props);

    this.state = {
      page1: true,
      page2: false,
      page3: false,
      percentComplete: 0.3
    };
  }

  public progressLabel = "Progress of Update";

  public render() {
    const { percentComplete } = this.state;

    if ( percentComplete == 1 ) { 
      this.progressLabel = "Process Completed";
    }

    return (
      <div className={styles.container}>
        <p>This is inside the modal window</p>

        <ProgressIndicator label={this.progressLabel} percentComplete={percentComplete} />

      <ul>
        { this.state.page1 
        && 
          <li>
            <FormPage1 
              textField={styles.textField} 
              userTitle={this.props.userDetails.Title} 
              userId={this.props.userDetails.Id} 
              nameChangeHandler={this.props.nameChangeHandler} 
            />
            <DefaultButton text="Next Page" onClick={() => this.setState({ page1: false, page2: true, page3: false, percentComplete: 0.6 })} />
          </li>
        }

        { this.state.page2 
        &&
          <li>
            <FormPage2 
              textField={styles.textField} 
              userTeam={this.props.userDetails.Team} 
              userId={this.props.userDetails.Id} 
              nameChangeHandler={this.props.teamChangeHandler} 
            />
            <DefaultButton text="Next Page" onClick={() => this.setState({ page1: false, page2: false, page3: true, percentComplete: 0.9 })} />
          </li>
        }

        { this.state.page3 
        &&
          <li>
            <FormPage3 
              textField={styles.textField} 
              userDepartment={this.props.userDetails.Department} 
              userId={this.props.userDetails.Id} 
              nameChangeHandler={this.props.depChangeHandler} 
            />
            <DefaultButton text="Next Page" onClick={() => this.setState({ page1: false, page2: false, page3: false, percentComplete: 1 })} />
          </li>
        }


      </ul>
      <DefaultButton text="Close Modal Window" onClick={(event) => this.props.closeWindow()} />
      </div>
    );
  }
}

export default FormWindow;