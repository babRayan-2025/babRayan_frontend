import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userID = localStorage.getItem("userID");
      if (!userID) {
        router.replace("/login");
      } else {
        setAuthenticated(true);
      }
    }
  }, [router]); // ✅ Add router as a dependency

  return authenticated;
}
