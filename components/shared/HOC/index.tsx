import { FC, ReactNode } from "react";
import { hocWrapper } from "./style";

interface HOCProps {
  children: ReactNode;
}

const HOC: FC<HOCProps> = ({ children }) => {
  return <main css={hocWrapper}>{children}</main>;
};

export default HOC;
