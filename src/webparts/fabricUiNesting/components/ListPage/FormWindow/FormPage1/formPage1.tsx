import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const formPage1 = (props:any) => {
  console.log(props);

  return (
    <React.Fragment>
      <p>Name</p>
      <TextField 
        className={props.textField} 
        defaultValue={ props.userTitle } 
        onChange={(event, newValue) => props.nameChangeHandler(newValue, props.userId)} 
      />
    </React.Fragment>
  );
};

export default formPage1;