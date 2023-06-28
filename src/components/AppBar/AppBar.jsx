import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom'
import { Header, Box, Main } from './AppBar.styled'
import { Footer } from 'components/Footer/Footer';


export const AppBar = () => {
  return (
    <Box>
    <Header>
      <Navigation />
    </Header>
    <Main>
        <Outlet />
    </Main>
    <Footer />
    </Box>
  );
}

