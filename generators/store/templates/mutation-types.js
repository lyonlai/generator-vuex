export default [
  'resetState'
].reduce((acc, value) => {
  acc[value] = value
  return acc
}, {})
