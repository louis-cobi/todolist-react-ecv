import "./App.css";
import Header from "./components/layout/Header";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
      </Layout>
    </div>
  );
}

export default App;
