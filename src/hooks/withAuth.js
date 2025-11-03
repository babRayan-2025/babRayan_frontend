import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [isAllowedUser, setIsAllowedUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const userID = localStorage.getItem("userID");
        if (!userID) {
          router.replace("/login");
        } else {
          const getUser = async () => {
            const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/users/${userID}`);
            const user = await response.json();
            if (user.data.role === 'admin' || user.data.role === 'member') {
              setIsAllowedUser(true);
            } else {
              setIsAllowedUser(false);
            }
            setAuthenticated(true);
            setLoading(false);
          }
          getUser();
        }
      }
    };
    checkAuth();
  }, [router]);

  return { authenticated, loading, isAllowedUser };
}
