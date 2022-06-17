export { default as Demo1 } from './Demo1'
export { default as Demo2 } from './Demo2'



declare global {
  interface Window {
    stringify: () => string
  }
}
window.stringify = function() {
  return JSON.stringify(this)
}