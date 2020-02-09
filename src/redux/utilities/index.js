/* eslint-disable import/prefer-default-export */
export const dynamicSort = property => {
  let sortOrder = 1

  if (property[0] === '-') {
    sortOrder = -1
  }

  return (a, b) => {
    if (sortOrder === -1) {
      return b[property.substr(1)].localeCompare(a[property.substr(1)])
    }
    return a[property].localeCompare(b[property])
  }
}
