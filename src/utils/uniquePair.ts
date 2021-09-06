import { Schedule } from '../types'

const uniquePair = (schedule: Schedule[]) => {
  let unique: string[] = []
  schedule.forEach((item: any) => {
    if (unique.indexOf(item.time_start.toString()) === -1) {
      unique.push(item.time_start.toString())
      return true
    }
    return false
  })

  return unique
}

export default uniquePair
