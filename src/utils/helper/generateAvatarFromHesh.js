import tinycolor from 'tinycolor2';

const getCorrectIndex = number => Math.min(Math.max(number, 0), 255);

const generateAvatar = hash => {
   if (!hash) {
    return { color: "#000000", colorLighten: "#ffffff" };
  }
  const [r, g, b] = hash
    .substr(0, 3)
    .split('')
    .map(char => getCorrectIndex(char.charCodeAt(0)));

  return {
    color: tinycolor({ r, g, b }).lighten(10).saturate(10).toHexString(),
    colorLighten: tinycolor({ r, g, b }).lighten(30).saturate(30).toHexString(),
  };
};

export default generateAvatar;
