export function tryCatch<T, E extends new (message?: string) => Error>(
  promise: Promise<T>,
  errorsToCatch?: E[],
): Promise<[undefined, T] | [InstanceType<E>]> {
  return promise
    .then((result) => [undefined, result] as [undefined, T])
    .catch((error) => {
      if (!errorsToCatch) {
        return [error]
      }
      if (errorsToCatch.some((errorType) => error instanceof errorType)) {
        return [error as InstanceType<E>]
      }
      throw error
    })
}
