import jwt from "jsonwebtoken";
export interface JwtPayload {
  id: number;
}

export const generateToken = (id: number): string => {
  if (id == null) {
    throw new Error("Id not found");
  }
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  const token = jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '1h' })
  return token;
}

export const validateToken = (token: string): JwtPayload => {
  try {
    const result = jwt.verify(token, process.env.JWT_SECRET!);

    if (typeof result === 'string') {
      throw new Error("Invalid Token Payload");
    }
    if (typeof result.id !== "number") {
      throw new Error("Invalid Token Payload");
    }
    return {
      id: result.id
    };
  } catch (error) {
    console.log(error);
    throw new Error("Invalid Token");
  }
}
