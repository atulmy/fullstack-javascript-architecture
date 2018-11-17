// Validation methods

// Email
export function isEmail({ value }) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(value).toLowerCase())
}

function isEmpty({ value }) {
  return !value
}

// Equal
export function isEqual({ value1, value2 }) {
  return value1 === value2
}

// Length
export function isLength({ value, length }) {
  return value.length === length
}

// Length minimum
export function isLengthMin({ value, length }) {
  return value.length >= length
}

// Length maximum
export function isLengthMax({ value, length }) {
  return value.length <= length
}

// Validation
export default function validate(validations = []) {
  const checks = {
    email: isEmail,
    empty: isEmpty,
    equal: isEqual,
    length: isLength,
    lengthMin: isLengthMin,
    lengthMax: isLengthMax,
  }

  for(let v of validations) {
    if(v.not ? checks[v.check](v.data) : !checks[v.check](v.data)) {
      throw new Error(v.message)
    }
  }
}
