export interface Option {
  id: number;
  label: string;
  disabled?: boolean;
}

//  Used in TravelOptions Dropdown
export const TravelOptions: Option[] = [
  { id: 1, label: 'Car' },
  { id: 2, label: 'Bus' },
  { id: 3, label: 'Cycle', disabled: true },
  { id: 4, label: 'Plane' },
];

//  Used in Sports Checkboxes
export const SportsOptions: Option[] = [
  { id: 1, label: 'Karate' },
  { id: 2, label: 'Football' },
  { id: 3, label: 'Soccer', disabled: true },
  { id: 4, label: 'Hackathon' },
];

//  Used in LikeToBe Radiobuttons
export const LikeToBeOptions: Option[] = [
  { id: 1, label: 'Film Actor' },
  { id: 2, label: 'Billionaire' },
  { id: 3, label: 'Angular Developer' },
];

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  modeOfTravel: number;
  sports: number[];
  likeToBe: number;
}

export const People: Person[] = [
  { id: 1, firstName: 'Jackie', lastName: 'Chan', modeOfTravel: 2, sports: [3], likeToBe: 3 },
  { id: 2, firstName: 'Dwayne', lastName: 'Johnson', modeOfTravel: 1, sports: [1, 2], likeToBe: 1 },
  { id: 3, firstName: 'Robert', lastName: 'Downey', modeOfTravel: 3, sports: [3, 4], likeToBe: 2 },
  { id: 4, firstName: 'Bruce', lastName: 'Lee', modeOfTravel: 1, sports: [1], likeToBe: 3 },
  { id: 5, firstName: 'Sylvester', lastName: 'Stallone', modeOfTravel: 4, sports: [2, 4], likeToBe: 2 },
];

export interface Column {
  header: string;
  field: string;
}

export const Columns: Column[] = [
  { header: 'ID', field: 'id' },
  { header: 'First Name', field: 'firstName' },
  { header: 'Last Name', field: 'lastName' },
  { header: 'Mode of Travel', field: 'modeOfTravel' },
  { header: 'Sports', field: 'sports' },
  { header: 'Like to be', field: 'likeToBe' },
];

