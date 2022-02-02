import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { LoginProvider } from "./context";
import store from "./store/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <LoginProvider>
          <AppRouter />
        </LoginProvider>
      </Provider>
    </Router>
  );
}

export default App;
