const REGEX = {
  startsWith4: /^[4]\d*$/,
  startsWith5155: /^[5][1-5]\d*$/,
  numbers: /^\d*$/,
  allNumbers: /\d/gi,
  oneToNine: /^[1-9]$/,
  month: /^([0][1-9])|([1][0-2])$/,
  name: /^[a-zA-Z]+ ?[a-zA-Z]*$/,
  zero: /^[0]+$/,
} as const;

export default REGEX;
