/* eslint-disable no-unused-vars */
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCreadentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  loadingApplication: boolean;
  signIn(credentials: SignInCreadentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loadingApplication, setLoadingApplication] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@GoBarber:token',
        '@GoBarber:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoadingApplication(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(
    async ({ email, password }: SignInCreadentials) => {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@GoBarber:token', token],
        ['@GoBarber:user', JSON.stringify(user)],
      ]);

      setData({ token, user });
    },
    [],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoBarber:token', '@GoBarber:user']);

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider
      value={{ user: data.user, loadingApplication, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
