
export interface Expert {
  field: string;
  name: string;
  affiliation: string;
  description?: string;
}

export interface Schedule {
  day: string;
  amField: string;
  amExpert: string;
  pmField: string;
  pmExpert: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}
