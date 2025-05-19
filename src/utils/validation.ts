import validator from "validator";
import { z } from "zod";
interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

export const signupValidation = (req: { body: User }) => {
  const { name, email, password, role } = req.body;
  if (!name) {
    throw new Error("Invalid first name or last name");
  } else if (!validator.isEmail(email)) {
    throw new Error("Invalid email address");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password");
  } else if (!role) {
    throw new Error("Please select a role");
  }
};
