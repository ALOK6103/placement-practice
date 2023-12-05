import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const UserComponent = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>user: {user}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please Login first</p>
      )}
    </div>
  );
};

export const LoginComponent = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    const username = prompt("Enter your username");

    if (username) {
      login(username);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
    </div>
  );
};
