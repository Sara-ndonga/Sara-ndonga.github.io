import { createContext, useEffect, useState } from "react";
import { getPermission } from "../../api/getPermission";

export const AuthenticationContext = createContext<{ permission: boolean }>({
  permission: false,
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<{ permission: boolean }>({
    permission: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPermission();
        setAuthState({ permission: data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return authState.permission ? (
    <AuthenticationContext.Provider
      value={{ permission: authState.permission }}
    >
      {children}
    </AuthenticationContext.Provider>
  ) : (
    <></>
  );
}
