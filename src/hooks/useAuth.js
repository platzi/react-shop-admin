import React, {useState, useContext, createContext} from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser('login');
  };

  return {
    user,
    signIn,
  };
}
