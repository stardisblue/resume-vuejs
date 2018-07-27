import moment from 'moment'

export function formatDate(date?: Date, format: string = 'MMM YYYY') {
  if (date === undefined) { return date }
  if (typeof date !== 'object') { return date }
  return moment(date).format(format)
}
