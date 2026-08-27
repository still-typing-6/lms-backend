import type { authType } from "./auth.types.ts";

declare global {
  namespace Express {
    interface Request {
      user?: authType;
    }
  }
}


export { };
