import './App.css';
import { useFetchBooks } from './api/hooks';

function App() {
  const { data, loading } = useFetchBooks();

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>books</h1>
          <p>{JSON.stringify(data)}</p>
        </>
      )}
    </main>
  );
}

export default App;
