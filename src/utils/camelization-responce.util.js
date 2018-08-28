const EACH_LETTER_OF_EACH_WORD = /(^|\s|\W|_)+(.)/g;
const FIRST_LETTER_IN_WORD = /_?(\w)/;

const isObject = data => Object.prototype.toString.call(data) === '[object Object]';

const snakeCaseToCamelCase = str => str
  .split('_')
  .join(' ')
  .toLowerCase()
  .trim()
  .replace(
    EACH_LETTER_OF_EACH_WORD,
    ($1, $2, firstCharacter) => firstCharacter.toUpperCase(),
  )
  .replace(
    FIRST_LETTER_IN_WORD,
    firstCharacter => firstCharacter.toLowerCase(),
  );


const camelizationResponce = (data) => {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce((acc, key) => {
    if (Array.isArray(data[key])) {
      acc[snakeCaseToCamelCase(key)] = data[key].map(camelizationResponce);
    } else {
      acc[snakeCaseToCamelCase(key)] = camelizationResponce(data[key]);
    }
    return acc;
  }, {});
};

export default camelizationResponce;
