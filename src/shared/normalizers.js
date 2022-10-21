export const normalizeDate = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
  }

  if (numbers.length <= 8 || numbers.length > 8) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
  }
};

export const normalizeTime = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 4 || numbers.length > 4) {
    return `${numbers.slice(0, 2)}:${numbers.slice(2, 4)}`;
  }
};