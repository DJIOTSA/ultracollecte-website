export const generateRandomCode = (prefix?: string, lengthWithoutPrefix?: number) => {
    const characters = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789";
    const codeLength = lengthWithoutPrefix || 18;
    let result = "";
    for (let i = 0; i < codeLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return prefix ? prefix + result : result;
};