import { AuthContext } from "../Context/Auth_context";
import { useContext } from "react";

export const useAuthContext = () => {
      const context = useContext(AuthContext);

      if (!context) {
            throw Error("No authenticative login");
      }

      return context

}