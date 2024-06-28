import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const listsConatiner = style({
  height: "max-content",
  display: "flex",
  flexWrap: "wrap",
  rowGap: vars.spacing.listspacing,
  margin: vars.spacing.listspacing,
});
