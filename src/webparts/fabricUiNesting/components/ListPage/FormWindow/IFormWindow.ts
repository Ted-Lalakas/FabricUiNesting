export interface IFormWindowProps {
  closeWindow: Function;
  userDetails: { Id: number, Title: string, Team: string, Department: string };
  nameChangeHandler: (nameChange:string, id:number) => void;
  teamChangeHandler: (team:string, id:number) => void;
  depChangeHandler: (department:string, id:number) => void;
}

export interface IFormWindowState {
  page1: boolean;
  page2: boolean;
  page3: boolean;
  percentComplete: number;
}