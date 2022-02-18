import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import showModal from '../../redux/modal/modalActions';

import SplitLineDesktop from '../../components/SplitLineDesktop';
import HomeTabWrapper from '../../components/HomeTabWrapper';

import Container from '../../components/Container';
import HomeTab from '../../components/HomeTab';
import ButtonAdd from '../../components/ButtonAdd';
import { transactionsOperations } from '../../redux/transactions';

export default function DashboardPage() {
  const dispatch = useDispatch();
  useEffect(
    () => dispatch(transactionsOperations.getTransactions()),
    [dispatch]
  );

  return (
    <div>
      <Container>
        <HomeTabWrapper>
          <HomeTab />
          <SplitLineDesktop />
          <Outlet />
        </HomeTabWrapper>
        <ButtonAdd onClick={(event) => dispatch(showModal())}></ButtonAdd>
      </Container>
    </div>
  );
}
