// Branded type
export type TimeStringType = string & { __brand: "TimeString" };

// Factory with runtime validation
export function makeTimeString(input: string): TimeStringType {
  const regex =
    /^([01]?\d|2[0-3]):[0-5]\d(:[0-5]\d(\.\d{1,3})?)?$/;

  if (!regex.test(input)) {
    throw new Error(`Invalid time string: ${input}`);
  }
  return input as TimeStringType;
}

/* 
****** usage of the new type ******

const x = makeTimeString('23:59');

const y = makeTimeString('23:59:12');

const z = makeTimeString('23:59:12.099');

*/