import { Provider } from "react-redux";
import "./App.css";
import BaseQueryProvider from "./api/provider";
import Router from "./router/Router";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BaseQueryProvider>
        <Router />
      </BaseQueryProvider>
    </Provider>
  );
};

export default App;
