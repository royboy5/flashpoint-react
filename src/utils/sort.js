export const sortByPoints = (a, b) => {
  const ptsA = a.data.ups - a.data.downs
  const ptsB = b.data.ups - b.data.downs

  // console.log(ptsA, ptsB, 'pts')

  if (ptsA < ptsB) {
    return 1
  }
  if (ptsA > ptsB) {
    return -1
  }

  return 0
}
