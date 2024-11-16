import jwt from 'jsonwebtoken';

/**
 * Verifies a JWT token.
 * 
 * @param {string} token - The JWT token to verify.
 * @returns {Object} - The decoded payload of the token.
 * @throws {Error} - Throws an error if the token is invalid.
 */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
