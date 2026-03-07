export const size = {
  mobile: "480px",
  mobileLandscape: "500px",
  tablet: "768px",
  desktop: "1024px",
  desktopL: "1440px",
};

export const device = {
  mobile: `(max-width:${size.mobile})`,
  mobileLandscape: `(max-height:${size.mobileLandscape}) and (orientation: landscape)`,
  tablet: `(max-width:${size.tablet})`,
  desktop: `(max-width:${size.desktop})`,
  desktopL: `(max-width:${size.desktopL})`,
};
