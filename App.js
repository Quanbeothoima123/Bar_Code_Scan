import "react-native-gesture-handler";
import React, { useState } from "react";
import RootRouter from "./routers";
import { AuthContext } from "./contexts/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <SafeAreaProvider>
        <RootRouter />
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

export default App;
