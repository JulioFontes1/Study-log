const getNormalizedCurrentDate = () => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  return date
}

const getDayAndMonth = (date) => {
  const splitedDate = date.split("-")
  const year = new Date().getFullYear()

  const normalizedDate = `${splitedDate[1].slice(0, 1)}-${splitedDate[0].slice(0, 2)}-${year}`

  return normalizedDate
}

export { getNormalizedCurrentDate, getDayAndMonth }