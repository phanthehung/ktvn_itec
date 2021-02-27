/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 *
 * ListWarehouse
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectListWarehouse } from './selectors';
import { listWarehouseSaga } from './saga';

import Navbar from '../../components/Navbar';
import { Sidebar } from 'app/components/Sidebar';

import './styles.scss';

import TableInitialDeclaration from 'app/components/TableInitialDeclaration';

interface Props {}

export function ListWarehouse(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: listWarehouseSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const listWarehouse = useSelector(selectListWarehouse);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  let pathname = window.location.pathname.replace('/', '');

  return (
    <>
      <Helmet>
        <title>ListWarehouse</title>
        <meta name="description" content="Description of ListWarehouse" />
      </Helmet>

      <TableInitialDeclaration />
    </>
  );
}

const Div = styled.div``;
