// This file defines data models.

export interface UserModelType {
  first: string;
  last: string;
  email: string;
  created: number;
  cells: string[];
}

// ------------ CELLS ----------------

// A cell consists of a type, and a list of rows [data].
// A row consists a type, and some arbitrary data depending on the row.

export interface CellModelType {
  data: RowModelType[];
  cardKey?: string;
  expires?: number;
  header?: string;
  sortIndex?: number;
  params?: any;
  actionType?: any;
  actionContent?: any;
  documentId?: string;
}

export interface RowModelType {
  type: RowEnum;
  data: TextRowModelType | ButtonRowModelType | DateRowModelType;
}

export enum RowEnum {
  Text = "TEXT",
  Button = "BUTTON",
  Date = "DATE",
}

export interface DateRowModelType {
  style: string;
  content: number;
  format: string;
  prefix?: string;
}

export interface TextRowModelType {
  style: string;
  content: string;
}

export interface ButtonRowModelType {
  title: string;
  actionType: ActionEnum;
  actionContent: string;
}

export enum ActionEnum {
  Web = "WEB",
  Detail = "DETAIL",
}

// Expansion to Detail Page
export enum PageEnum {
  Map = "MAP",
  Table = "TABLE",
}

export interface NodeType {
  type: PageEnum;
  data: MapDataType | TableDataType;
}

export interface MapDataType {
  region: any;
  locations: MapLocation[];
}

export type TableDataType = CellModelType[];

// Map Feature
export interface MapLocation {
  title: string;
  subtitle: string;
  latitude: number;
  longitude: number;
  icon: string;
  color: string;
}
