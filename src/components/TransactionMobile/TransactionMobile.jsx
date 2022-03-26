import s from './TransactionMobile.module.css';
import TransactionMobileItem from '../TransactionMobileItem';
import Loader from '../Loader/Loader';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';

export default function TransactionMobile(props) {
  const { t, i18n } = useTranslation();
  const allTransactions = useSelector(transactionsSelectors.getTransactions);
  const isLoading = useSelector(transactionsSelectors.getIsLoading);
  const toSort = [...allTransactions];
  const toRender = toSort.sort((a, b) =>
    a.date > b.date ? -1 : b.date > a.date ? 1 : 0
  );

  return isLoading ? (
    <Loader />
  ) : toRender.length < 1 ? (
    <p className={s.empty}>{t("noTrans")}</p>
  ) : (
    toRender.map((operation) => {
      return <TransactionMobileItem key={operation._id} data={operation} />;
    })
  );
}
