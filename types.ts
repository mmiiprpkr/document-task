export type TypeUser = {
  email: string;
  given_name: string;
  id: string;
  picture: string;
} 

export type Team = {
  createdBy: string;
  teamName: string;
  _id: string;
}

export type File = {
  archive: boolean;
  createdBy: string;
  fileName: string;
  teamId: string;
  whiteboard: string;
  _creationTime: number;
  _id: string;
  content: string
}