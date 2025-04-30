import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const userID = localStorage.getItem("userID");
        if (!userID) {
          router.replace("/login");
        } else {
          setAuthenticated(true);
        }
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  return { authenticated, loading };
}
