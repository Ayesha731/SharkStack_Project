import { UserRole } from "../types/user";
import { PropsWithChildren } from "react";
import { useAuth } from "./AuthProvider";

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: UserRole[];
};

export default function ProtectedRoute({
  allowedRoles,
  children,
}: ProtectedRouteProps) {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (
    currentUser === null ||
    (allowedRoles && !allowedRoles.includes(currentUser.role))
  ) {
    return <div>Permission denied</div>;
  }

  return children;
}
