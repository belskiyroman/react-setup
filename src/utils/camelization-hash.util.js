const EACH_LETTER_OF_EACH_WORD = /(^|\s|\W|_)+(.)/g;
const FIRST_LETTER_IN_WORD = /_?(\w)/;

const snakeCaseToCamelCase = str => str
  .toLowerCase()
  .trim()
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

const camelizationHash = (data) => {
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    return data;
  }

  return Object.keys(data).reduce((acc, key) => {
    acc[snakeCaseToCamelCase(key)] = camelizationHash(data[key]);
    return acc;
  }, {});
};

export default camelizationHash;
