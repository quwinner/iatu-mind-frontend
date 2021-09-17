const convertDate = (date: Date) => {
  const dateComponents = date.toString().split('T')
  const ymd = dateComponents[0]
  const ymdParse = ymd.split('-')
  return ymdParse[2] + '.' + ymdParse[1] + '.' + ymdParse[0]
}

const convertDateTime = (date: Date) => {
  const dateComponents = date.toString().split('T')
  const ymd = dateComponents[0]
  const ymdParse = ymd.split('-')
  return ymdParse[2] + '.' + ymdParse[1] + '.' + ymdParse[0] + ' ' + dateComponents[1].split('.')[0]
}

const convertTime = (date: Date) => {
  const dateComponents = date.toString().split('T')
  return dateComponents[1].split('.')[0]
}

export { convertDate as default, convertDateTime, convertTime }
