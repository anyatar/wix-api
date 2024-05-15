
export default interface Doctor {
  name: string;
  score: number;
  specialties: string[];
  availableDates: AvailbilityDateItem[];
}

export interface AvailbilityDateItem {
  from: number;
  to: number;
}

