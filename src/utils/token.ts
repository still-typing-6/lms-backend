import jwt from "jsonwebtoken";
export interface JwtPayload {
  id: number;
}

export const generateToken = (Id: number) => {
  try {
    if (Id == null) {
      throw new Error("Id not found");
    }
    const token = jwt.sign({ data: Id }, process.env.JWT_SECRET!, { expiresIn: '1h' })
    return token;
  } catch (error) {
    console.log(error);
  }
}

export const validateToken = (token: string): JwtPayload => {
  try {
    const result = jwt.verify(token, process.env.JWT_SECRET!);

    if (typeof result === 'string') {
      throw new Error("Invalid Token Payload");
    }

    return result as JwtPayload;
  } catch (error) {
    console.log(error);
    throw new Error("Invalid Token");
  }
}
