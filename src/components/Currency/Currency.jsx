import React, { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import waveMobile from '../../images/waves/wave-mobile.svg';
import waveTablet from '../../images/waves/wave-tablet.svg';
import waveDesktop from '../../images/waves/wave-desktop.svg';

import fetchCurrency from '../../API/fetchCurrency/fetchCurrency';

const useStyles = makeStyles({
  currency_table_container: {
    boxSizing: 'border-box',
    backgroundColor: '#4a56e2',
    width: '280px',
    height: '174px',
    borderRadius: '30px',
    textAlign: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    ['@media (max-width: 767px)']: {
      backgroundImage: `url(${waveMobile})`
    },
    ['@media (min-width: 768px) and (max-width: 1279px)']: {
      width: '334px',
      backgroundImage: `url(${waveTablet})`
    },

    ['@media (min-width: 1280px)']: {
      width: '348px',
      height: '348px'
    }
  },

  currency_header_bg: {
    position: 'fixed',
    height: '50px',
    width: '100%',
    backgroundColor: '#ffff',
    opacity: '0.2',
    ['@media (min-width: 1280px)']: {
      height: '60px'
    }
  },

  currency_head: {
    height: '50px',
    ['@media (min-width: 1280px)']: {
      height: '60px'
    }
  },

  currency_header: {
    fontFamily: 'CirceBold, sans-serif',
    fontSize: '18px',
    padding: '0px, 0px, 0px, 12px',
    color: '#ffff',
    borderBottom: '0px'
  },

  currency_item: {
    fontFamily: 'CirceRegular, sans-serif',
    fontSize: '16px',
    color: '#ffff',
    borderBottom: '0px',
    paddingTop: '10px',
    ['@media (min-width:1280px)']: {
      paddingTop: '20px'
    }
  },

  currency_waves: {
    display: 'none',
    ['@media (min-width:1280px)']: {
      display: 'block',
      height: '134px',
      width: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${waveDesktop})`
    }
  }
});

function createData(name, buy, sale) {
  return { name, buy, sale };
}

const rows = [
  createData('USD', 27.55, 27.65),
  createData('EUR', 30.0, 30.1),
  createData('RUB', 12.0, 12.05)
];

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const styles = useStyles();

  useEffect(() => {
    // (1) определить в области обратного вызова эффекта
    const fetch = async () => {
      try {
        const data = await fetchCurrency();
        const sliced = data.slice(0, -1);
        setCurrency([...sliced]);
      } catch (error) {
        console.log(error);
      }
    };

    const id = setInterval(() => {
      fetch(); // <- (3) вызов в интервале обратного вызова
    }, 300000);

    fetch(); // <- (2) вызываем при монтировании

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className={styles.currency_section}>
        <div className={styles.currency_header_bg}></div>
        <TableContainer className={styles.currency_table_container}>
          <Table className={styles.currency_table} size='small'>
            <TableHead className={styles.currency_head}>
              <TableRow className={styles.currency_head_row}>
                <TableCell className={styles.currency_header}>
                  Currency
                </TableCell>

                <TableCell align='center' className={styles.currency_header}>
                  Buy
                </TableCell>
                <TableCell align='center' className={styles.currency_header}>
                  Sale
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.currency_body}>
              {currency?.map((element) => (
                <TableRow key={element.ccy}>
                  <TableCell
                    component='th'
                    scope='row'
                    align='left'
                    className={styles.currency_item}
                  >
                    {element.ccy}
                  </TableCell>
                  <TableCell align='center' className={styles.currency_item}>
                    {Math.floor(element.buy * 100) / 100}
                  </TableCell>
                  <TableCell align='center' className={styles.currency_item}>
                    {Math.floor(element.sale * 100) / 100}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={styles.currency_waves}></div>
        </TableContainer>
      </div>
    </>
  );
};

export default Currency;
