import { createContext } from "react";

// Khởi tạo AuthContext
export const AuthContext = createContext({
  isLoggedIn: false, // Giá trị mặc định
  setIsLoggedIn: () => {}, // Hàm mặc định
});
