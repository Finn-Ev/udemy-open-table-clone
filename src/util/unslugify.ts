export const unslugify = (slug: string) => {
  const nameArray = slug.split('-');

  const place = nameArray[nameArray.length - 1];

  nameArray[nameArray.length - 1] = `(${place})`;

  return nameArray.join(' ');
};
