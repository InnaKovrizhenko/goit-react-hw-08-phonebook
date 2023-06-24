import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom'


const AppBar = () => {
  return (
    <>
        <header>
      <Navigation />
      {/* AuthNav, UserMenu */}
    </header>
    <main>
        <Outlet />
    </main>
    </>

  );
}

export default AppBar;
