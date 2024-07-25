const getRandomBytes = require('expo-crypto').getRandomBytes;

export function getSecureRandomBytes(size: number): Buffer {
    return Buffer.from(getRandomBytes(size));
}

export function getSecureRandomWords(size: number): Uint16Array {
    const bytes = getSecureRandomBytes(size * 2);

    // Create a new TypedArray that is of the same type as the given TypedArray but is backed with the
    // array buffer containing random bytes. This is cheap and copies no data.
    return new Uint16Array(
        bytes.buffer,
        bytes.byteOffset,
        size
    );
}