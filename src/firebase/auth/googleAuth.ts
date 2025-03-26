import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "../config";

const auth = getAuth(firebaseApp);

export async function logInUsingGoogle() {
	const provider = new GoogleAuthProvider();
	provider.setCustomParameters({ prompt: "select_account" });

	try {
		const result = await signInWithPopup(auth, provider);

		if (!result || !result.user) {
			throw new Error("Google sign in failed");
		}
		return result.user;
	} catch (error) {
		console.error("Error signing in with Google", error);
	}
}
