import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const formPage2 = (props:any) => {
  console.log(props);

  return (
    <React.Fragment>
      <p>Team</p>
      <TextField 
        className={props.textField} 
        defaultValue={ props.userTeam } 
        onChange={(event, newValue) => props.nameChangeHandler(newValue, props.userId)} 
      />
    </React.Fragment>
  );
};

export default formPage2;