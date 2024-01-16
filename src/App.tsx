import "./App.css";
import BaseQueryProvider from "./api/provider";
import Router from "./router/Router";

const App: React.FC = () => {
  return (
    <BaseQueryProvider>
      <Router />
    </BaseQueryProvider>
  );
};

export default App;
