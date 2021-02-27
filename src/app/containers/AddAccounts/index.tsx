/**
 *
 * AddAccounts
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectAddAccounts } from './selectors';
import { addAccountsSaga } from './saga';
import AddLAccounts from 'app/components/AddLAccounts';

interface Props {}

export const AddAccounts = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: addAccountsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addAccounts = useSelector(selectAddAccounts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>AddAccounts</title>
        <meta
          name="description"
          content="Description of DeclarationListOfAccounts"
        />
      </Helmet>
      <AddLAccounts />
    </>
  );
});

const Div = styled.div``;
