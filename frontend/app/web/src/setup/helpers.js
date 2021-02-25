// Helpers

// Render element or component by provided condition
export function renderIf(condition, renderFn) {
  return condition ? renderFn() : null
}

// Substring with ...
export function subString(string = '', length = 0) {
  return string.length > length ? `${string.substr(0, length)}...` : string
}

// Return empty string if value is null
export function nullToEmptyString(value) {
  return value || ''
}

// Return zero if value is null
export function nullToZero(value) {
  return value === null ? 0 : value
}

// Add (s) to any string by count
export function plural(value) {
  return value === 1 ? '' : 's'
}
