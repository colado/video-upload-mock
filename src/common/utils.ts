import { Format } from "./interfaces";

export const getRandomDate = () => {
  const randomTimestamp = new Date(2000, 0, 1).getTime() + Math.random() * (Date.now() - new Date(2000, 0, 1).getTime());
  const randomDate = new Date(randomTimestamp);
  return `${String(randomDate.getDate()).padStart(2, '0')}.${String(randomDate.getMonth() + 1).padStart(
    2,
    '0'
  )}.${randomDate.getFullYear()}`;
};

export const getHighestRes = (formats: { key: Format }) => {
  return Object.values(formats).sort((a, b) => {
    const resA = parseInt(a.res.replace('p', ''));
    const resB = parseInt(b.res.replace('p', ''));

    return b.size - a.size || resB - resA;
  })[0].res;
};