import { createContext, useState } from 'react';

import {
    setAuthStorage,
    getAuthStorage,
    removeAuthStorage,
} from "../utils/auth";

export const AuthContext = createContext({
    auth: {
        idUsuario: Number,
        firstName: "",
        lastName: "",
        email: "",
        jwt: "",
        favoritos: [null],
        roles: [""]
    },
    authenticate: (auth) => {},
    logout : () => {}
});

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(getAuthStorage()); // Guarda el token

    // Si en Login, user y pass son correctos son pasados a la función authenticate 
    const authenticate = (response) => {
        const auth = {
            idUsuario: response.idUsuario,
            firstName: response.nombre,
            lastName: response.apellido,
            email: response.email,
            jwt: response.jwt,
            roles: response.authorities?.map((el) => el.authority),
          };

        setAuth(auth);
        setAuthStorage(auth);
    }

    const logout = () => {
        setAuth(null);
        removeAuthStorage();
    }

    return <Provider value={{ auth, authenticate, logout }}>{children}</Provider>;
}
