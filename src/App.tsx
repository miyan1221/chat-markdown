import './styles/globals.css';
import 'github-markdown-css/github-markdown-light.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import SideMenu from './components/sideMenu';
import KeyModal from './components/keyModal';

const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-slate-100 h-screen flex">
        <SideMenu />
        <KeyModal />
        <div className="flex py-4 flex-row justify-center m-auto w-5/6 space-x-4 h-full overflow-hidden">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
