
// import IndexWithColor from '../components/indexwithcolor';
import aql_level from '../constents/aqllevel'

const getAQILevel = (AQI) => {
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
export default getAQILevel;
