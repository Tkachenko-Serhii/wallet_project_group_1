import { Outlet } from 'react-router-dom';
import SplitLineDesktop from '../../components/SplitLineDesktop';
import HomeTabWrapper from '../../components/HomeTabWrapper';

import Container from '../../components/Container';
import HomeTab from '../../components/HomeTab';

export default function DashboardPage() {
  return (
    <div>
      <Container>
        <HomeTabWrapper>
          <HomeTab />
          <SplitLineDesktop />
          <Outlet />
        </HomeTabWrapper>
      </Container>
    </div>
  );
}
