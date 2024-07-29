import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { ReactQueryProvider, RoutesProvider, UserProvider } from "./providers";

function App() {
  return (
    <ReactQueryProvider>
      <UserProvider>
        <RoutesProvider />
      </UserProvider>
      <ToastContainer />
    </ReactQueryProvider>
  );
}

export default App;
