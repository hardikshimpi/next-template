import { css } from "@emotion/react";
import { colors, utils } from "@styles/shared";

export const hocWrapper = css({
  height: `calc(100vh - ${utils.remConverter(140)})`,
  backgroundColor: colors.SECONDARY_DARK,
  margin: utils.remConverter(70),
  border: `1px solid ${colors.LINES_GREY}`,
  borderRadius: 8,
  overflowY: "auto",
  "::-webkit-scrollbar": {
    display: "none"
  }
});
