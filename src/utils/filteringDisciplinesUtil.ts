import { Disciplines } from '@types'

const filteringDisciplinesUtil = (disc: Disciplines[], term: string): Disciplines[] => {
  let result: Disciplines[] = JSON.parse(JSON.stringify(disc))

  return (result = result.filter((x) => {
    if (x.name.toLowerCase().indexOf(term.toLowerCase()) > -1) return true
  }))
}

export default filteringDisciplinesUtil
