export interface CardType {
  key: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  params?: Param[];
}

export interface Param {
  key: string;
  name: string;
  type: ParamType;
  options: any;
}

export interface CategoryType {
  title: string;
  data: CardType[];
}

export enum ParamType {
  SingleSelect = "SINGLE_SELECT",
  MultiSelect = "MULTI_SELECT",
  Text = "TEXT",
}
