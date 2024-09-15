export function validateRut(rut: string): boolean {
  // Normalize the input, removing dots and hyphen
  rut = rut.replace(/\./g, '').replace('-', '');

  // Split the rut into the base number and the verification digit (DV)
  const rutBase = rut.slice(0, -1);
  const verificationDigit = rut.slice(-1).toUpperCase();

  // Validate that the base number is numeric
  if (!/^\d+$/.test(rutBase)) {
    return false;
  }

  // Calculate the expected verification digit
  let sum = 0;
  let multiplier = 2;

  // Loop through the base RUT number digits from right to left
  for (let i = rutBase.length - 1; i >= 0; i--) {
    sum += parseInt(rutBase.charAt(i), 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const mod11 = 11 - (sum % 11);
  let expectedDV = '';

  if (mod11 === 11) {
    expectedDV = '0';
  } else if (mod11 === 10) {
    expectedDV = 'K';
  } else {
    expectedDV = mod11.toString();
  }

  // Check if the verification digit matches the expected one
  return expectedDV === verificationDigit;
}
