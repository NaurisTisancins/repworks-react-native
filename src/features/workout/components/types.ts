export type ResistanceUnit = 'Kg' | 'Lbs';

export interface ISetCollection {
  id: string;
  resistance: number;
  unit: ResistanceUnit;
  sets: number[];
}
