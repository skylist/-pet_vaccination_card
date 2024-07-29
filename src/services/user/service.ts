import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { firebaseAuth } from "../../config/firebase.ts";

type AuthParams = {
  email: string;
  password: string;
};

export async function registerUser({
  email,
  password,
}: AuthParams): Promise<User | undefined> {
  const authenticatedUser = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password,
  );
  return authenticatedUser.user;
}

export async function loginUser({
  email,
  password,
}: AuthParams): Promise<User | undefined> {
  const authenticatedUser = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password,
  );

  return authenticatedUser.user;
}

export async function logoutUser(): Promise<void> {
  return await signOut(firebaseAuth);
}
