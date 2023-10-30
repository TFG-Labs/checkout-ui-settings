// @ts-nocheck
/**
 * isInSouthAfrica
 * Validate coordinates to ensure that they are in South Africa.
 * @param {[lnt, lat]} coordinates
 * @returns
 */
export const isInSouthAfrica = (coordinates) => {
  const [lng, lat] = coordinates;
  return lng >= 16.344 && lng <= 32.8301 && lat >= -34.8191 && lat <= -22.1277;
};

export const correctCoords = (coords) => {
  if (!coords || coords.length < 2) return ['', ''];

  const [lng, lat] = coords;

  if (isInSouthAfrica([lng, lat])) return [lng, lat];
  if (isInSouthAfrica([lat, lng])) return [lat, lng];

  return ['', ''];
};

export default isInSouthAfrica;
