import logo from './logo.svg';
import './App.css';
import DragAndDrop from './components/swap';
import { ThemeProvider, ThemedComponent } from './components/theme';

function App() {

  const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className="App">
      {/* <DragAndDrop items={initialItems} />; */}

      <ThemeProvider>
      <ThemedComponent />
      {/* Add more components here */}
    </ThemeProvider>
    </div>
  );
}

export default App;
