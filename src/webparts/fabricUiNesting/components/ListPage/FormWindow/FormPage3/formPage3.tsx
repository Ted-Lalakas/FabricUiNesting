import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const formPage3 = (props:any) => {
  console.log(props);

  return (
    <React.Fragment>
      <p>Department</p>
      <TextField 
        className={props.textField} 
        defaultValue={ props.userDepartment } 
        onChange={(event, newValue) => props.nameChangeHandler(newValue, props.userId)} 
      />
    </React.Fragment>
  );
};

export default formPage3;