import { DateTime } from "luxon";
import React from "react";
import { DateRowModelType } from "../../models/main";
import { TextRow } from "./TextRow";

export function DateRow({ style, format, content, prefix }: DateRowModelType) {
  const date = DateTime.fromJSDate(new Date(content)).toLocal();
  const formatted =
    format === "relative" ? date.toRelative() : date.toFormat(format);
  const text = formatted
    ? (prefix || "").toUpperCase() + formatted.toUpperCase()
    : "";
  return <TextRow style={style} content={text} />;
}
