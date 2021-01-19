import './App.css';
import Layout from './components/Layout/Layout';
import VoteContextProvider from './context/VoteContext';

function App() {
  return (
    <VoteContextProvider>
      <div className="App">
        <Layout />
      </div>
    </VoteContextProvider>
  );
}

export default App;
 