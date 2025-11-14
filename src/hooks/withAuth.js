import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [isAllowedUser, setIsAllowedUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const userID = localStorage.getItem("userID");
        if (!userID) {
          router.replace("/login");
        } else {
          const getUser = async () => {
            try {
              const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/users/${userID}`, {
                headers: {
                  "Authorization": `Bearer ${token}`,
                },
              });
              if (!response.ok) {
                throw new Error('Unable to fetch user');
              }
              const user = await response.json();
              const role = user?.data?.role;
              setUserRole(role || null);
              if (role === 'admin' || role === 'member') {
                setIsAllowedUser(true);
              } else {
                setIsAllowedUser(false);
              }
              setAuthenticated(true);
            } catch (error) {
              console.error('Auth check failed:', error);
              setIsAllowedUser(false);
              setAuthenticated(false);
              router.replace("/login");
            } finally {
              setLoading(false);
            }
          }
          getUser();
        }
      }
    };
    checkAuth();
  }, [router]);

  return { authenticated, loading, isAllowedUser, userRole };
}
