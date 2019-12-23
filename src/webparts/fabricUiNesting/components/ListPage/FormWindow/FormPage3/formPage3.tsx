import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

interface IformPage3Props {
  textField: string;
  userDepartment: string;
  userId: number;
  depChangeHandler: ( newValue: string, Id: number ) => void;
}

const formPage3 = (props:IformPage3Props) => {
  console.log(props);

  return (
    <React.Fragment>
      <p>Department</p>
      <TextField 
        className={props.textField} 
        defaultValue={ props.userDepartment } 
        onChange={(event, newValue) => props.depChangeHandler(newValue, props.userId)} 
      />
    </React.Fragment>
  );
};

export default formPage3;