export type UserRole = "admin" | "viewer" | "editor";

export type User = {
  id: number;
  email: string;
  role: UserRole;
};
