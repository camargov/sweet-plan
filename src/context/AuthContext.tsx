"use client";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import firebaseApp from "../firebase/config";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const auth = getAuth(firebaseApp);
export const AuthContext = createContext<User | null>(null);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = (props: { children: ReactNode }) => {
	const { children } = props;

	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={user}>
			{loading ? <div>Loading</div> : children}
		</AuthContext.Provider>
	);
};
