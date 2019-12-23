import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

interface IformPage2Props {
  textField: string;
  userTeam: string;
  userId: number;
  teamChangeHandler: ( newValue: string, Id: number ) => void;
}

const formPage2 = (props:IformPage2Props) => {
  console.log(props);

  return (
    <React.Fragment>
      <p>Team</p>
      <TextField 
        className={props.textField} 
        defaultValue={ props.userTeam } 
        onChange={(event, newValue) => props.teamChangeHandler(newValue, props.userId)} 
      />
    </React.Fragment>
  );
};

export default formPage2;