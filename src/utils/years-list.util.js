import moment from 'moment';

const yearsList = function yearsList(yearAgo, momentDate, res = []) {
  const date = momentDate || moment().subtract(yearAgo, 'year').startOf('year');
  res.push(date.year());

  return moment().startOf('year').diff(date)
    ? yearsList(yearAgo, date.add(1, 'year'), res)
    : res;
};

export default yearsList;
