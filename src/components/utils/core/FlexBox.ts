import { TBreakPoints, TSpacing } from "@src/components/utils/types";
import styled from "styled-components";

export type TJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

export type TAlignItems =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";

export interface IFlexBoxProps {
  direction: "row" | "column";
  justify: TJustifyContent;
  align: TAlignItems;
  width?: TBreakPoints;
  gap?: TSpacing;
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
}

export const FlexBox = styled.div<IFlexBoxProps>`
  display: flex;
  justify-content: ${(props) => props?.justify};
  align-items: ${(props) => props?.align};
  flex-direction: ${(props) => props?.direction};
  max-width: ${(props) =>
    props?.width ? props?.theme?.breakpoints?.[props?.width] : "100%"};
  width: 100%;
  gap: ${(props) => (props?.gap ? props?.theme?.spacing?.[props?.gap] : 0)};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;

export const FlexBoxForm = styled.form<IFlexBoxProps>`
  display: flex;
  justify-content: ${(props) => props?.justify};
  align-items: ${(props) => props?.align};
  flex-direction: ${(props) => props?.direction};
  max-width: ${(props) =>
    props?.width ? props?.theme?.breakpoints?.[props?.width] : "100%"};
  width: 100%;
  gap: ${(props) => (props?.gap ? props?.theme?.spacing?.[props?.gap] : 0)};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;
export default FlexBox;
