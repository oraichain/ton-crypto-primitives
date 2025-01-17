/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function getSecureRandomBytes(size: number): Buffer {    
    const randomBytes = new Uint8Array(size);  
    window.crypto.getRandomValues(randomBytes);
    return randomBytes;
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