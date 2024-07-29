import { toast, ToastOptions } from "react-toastify";

const notificationOptions: ToastOptions = {
  position: "top-right",
};

const notificationError = (message: string) => {
  toast.error(message, notificationOptions);
};

const notificationSuccess = (message: string) => {
  toast.success(message, notificationOptions);
};

export const AppNotification = {
  Error: notificationError,
  Success: notificationSuccess,
};
