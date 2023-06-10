export function BackgroundTemplate({ color = "#D6D6D6" }: { color?: string }) {
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 351" fill="none">
    <path d="M0 -0.5H-0.5V0V318.5V319.082L0.0754764 318.994C274.11 277.148 503.909 308.271 664.852 330.068C721.179 337.697 769.072 344.183 807.476 345.999C955.51 353.001 1055.56 355 1280.12 300.486L1280.5 300.393V300V0V-0.5H1280H0Z" fill="${color}" />
  </svg>`;

  const svgData = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    svgString
  )}`;

  return svgData;
}
