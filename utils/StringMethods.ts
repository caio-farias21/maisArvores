export function Capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function Limiter(lim: number, str: string) {
  if (str.length > lim) {
    return str.slice(0, lim) + "...";
  } else {
    return str;
  }
}

export function ReplaceSpecialCaracters(str: string) {
  return str
    .replace(/[ÀÁÂÃÄÅ]/, "A")
    .replace(/[àáâãäå]/, "a")
    .replace(/[ÈÉÊË]/, "E")
    .replace(/[èéêë]/, "e")
    .replace(/[Ç]/, "C")
    .replace(/[ç]/, "c")
    .replace(/[ÌÍÎÏ]/, "I")
    .replace(/[ìíîï]/, "i")
    .replace(/[ÙÚÛÜ]/, "U")
    .replace(/[ùúûü]/, "u")
    .replace(/[ÒÓÔÕÖ]/, "O")
    .replace(/[òóôõö]/, "o")
    .replace(/[Ñ]/, "N")
    .replace(/[ñ]/, "n")
    .replace(/[Š]/, "S")
    .replace(/[š]/, "s")
    .replace(/[Ÿ]/, "Y")
    .replace(/[ÿý]/, "y")
    .replace(/[Ž]/, "Z")
    .replace(/[ž]/, "z");
}
