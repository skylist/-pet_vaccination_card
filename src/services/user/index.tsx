import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./service.ts";

export type params = {
  notificationError: (message: string) => void;
};

type NotificationBase = (message: string) => void;

export function useRegisterUser(
  notificationError: NotificationBase,
  notificationSuccess?: NotificationBase,
) {
  return useMutation({
    mutationFn: registerUser,
    onError: (error) => {
      notificationError(error.message);
    },
    onSuccess: (data) => {
      notificationSuccess &&
        notificationSuccess(`Welcome ${data?.displayName ?? ""}!`);
    },
  });
}

export function useLoginUser(
  notificationError: NotificationBase,
  notificationSuccess?: NotificationBase,
) {
  return useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      notificationError(error.message);
    },
    onSuccess: (data) => {
      notificationSuccess &&
        notificationSuccess(`Welcome ${data?.displayName ?? ""}!`);
    },
  });
}
