import logo from './logo.svg';
import './App.css';
import DragAndDrop from './components/swap';
import { ThemeProvider, ThemedComponent } from './components/theme';
import TodoList from './components/todo';
import ParentComponent from './components/Hoc';
import LifecycleExample from './components/LifeCycle';
import ExpensiveComponent from './components/useMemo';
import CounterProvider from './context/counterProvider';
import App1 from './context/counterProvider';
// import { AuthProvider, LoginComponent, UserComponent } from './authentication/auth';
import { AuthProvider, LoginComp, UserComponent } from './authentication/AuthPract';

import MyComponentWithLogging from './hoc/hoc1';
import Finalcomp from './hoc/hoc2';
import { lazy } from 'react';
// import ComponentA from './context/compA';
const LazyLoadedComponent = lazy(() => import('./lazy/lazyload'));



function App() {

  const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className="App">
      {/* <DragAndDrop items={initialItems} />; */}

      {/* <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider> */}
    {/* <TodoList  /> */}
    {/* <ParentComponent  /> */}
    {/* <LifecycleExample  /> */}
    {/* <ExpensiveComponent /> */}

   {/* <App1 /> */}

   {/* <AuthProvider>
      <UserComponent />
      <LoginComponent />
   </AuthProvider> */}

{/* <MyComponentWithLogging name="John1" /> */}
{/* <Finalcomp  name="alok" /> */}
{/* <LazyLoadedComponent /> */}

<AuthProvider>
  <UserComponent  />
  <LoginComp  />
</AuthProvider>

    </div>
  );
}

export default App;
