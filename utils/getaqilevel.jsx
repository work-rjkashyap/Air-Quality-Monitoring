
import aql_level from '../constants/Constants'

const getLevelAqI = (AQI) => {
  let result = null;
  aql_level.some((val) => {
    if (val.min <= Math.ceil(AQI) && val.max >= Math.ceil(AQI)) {
      result = val;
      return true;
    }
    return false;
  });
  return result;
};
export default getLevelAqI;
