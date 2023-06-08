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
