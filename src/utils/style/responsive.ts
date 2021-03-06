type SizeType = {
  mobile: number;
  tablet: number;
  laptop: number;
};

type MediaQueryType = {
  [screen in keyof SizeType]: string;
};

const size: SizeType = {
  mobile: 450,
  tablet: 800,
  laptop: 1024,
};

export const largerThan: MediaQueryType = {
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
};

export const smallerThan: MediaQueryType = {
  mobile: `(max-width: ${size.mobile}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
};
