import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';

function isNotNil (value) {
  return !isNil(value);
}

export default function(object) {
  return pickBy(object, isNotNil);
}
