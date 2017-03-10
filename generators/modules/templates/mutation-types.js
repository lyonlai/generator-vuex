export default [
  'updateDialogOpen',
  'resetState',
  'updatePriceDate',
  'updateRetailerId',
  'updateDownloading',
  'updateDownloaded'
].reduce((acc, value) => {
  acc[value] = value
  return acc
}, {})
