import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

interface IformPage1Props {
  textField: string;
  userTitle: string;
  userId: number;
  nameChangeHandler: ( newValue: string, Id: number ) => void;
}

const formPage1 = (props:IformPage1Props) => {
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