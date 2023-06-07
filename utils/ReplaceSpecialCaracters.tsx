export function ReplaceSpecialCaracters(str) {
  str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
  str = str.replace(/[àáâãäå]/, "a");
  str = str.replace(/[ÈÉÊË]/, "E");
  str = str.replace(/[Ç]/, "C");
  str = str.replace(/[ç]/, "c");
  str = str.replace(/[ÌÍÎÏ]/, "I");
  str = str.replace(/[ìíîï]/, "i");
  str = str.replace(/[ÙÚÛÜ]/, "U");
  str = str.replace(/[ùúûü]/, "u");
  str = str.replace(/[ÒÓÔÕÖ]/, "O");
  str = str.replace(/[òóôõö]/, "o");
  str = str.replace(/[Ñ]/, "N");
  str = str.replace(/[ñ]/, "n");
  str = str.replace(/[Š]/, "S");
  str = str.replace(/[š]/, "s");
  str = str.replace(/[Ÿ]/, "Y");
  str = str.replace(/[ÿý]/, "y");
  str = str.replace(/[Ž]/, "Z");
  str = str.replace(/[ž]/, "z");
  return str;
}
