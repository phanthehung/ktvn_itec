/* eslint-disable prettier/prettier */
import { initRequestState } from 'api/types';
import { AuthorizeContainerState } from 'app/containers/AuthorizeContainer/types';
import { DataDeclarationState } from 'app/containers/DataDeclaration/types';
import { DeclarationListOfAccountsState } from 'app/containers/DeclarationListOfAccounts/types';
import { DeclarationListOfWorkState } from 'app/containers/DeclarationListOfWork/types';
import { DeclarationTypeOfFinancialPaperState } from 'app/containers/DeclarationTypeOfFinancialPaper/types';
import { GeneratedVouchersState } from 'app/containers/GeneratedVouchers/types';
import { InitialDeclarationState } from 'app/containers/InitialDeclaration/types';
import { ListWarehouseState } from 'app/containers/ListWarehouse/types';
import { MainLayoutState } from 'app/containers/MainLayout/types';
import { YearStartingState } from 'app/containers/YearStarting/types';

import { AddAccountsState } from 'app/containers/AddAccounts/types';

// import { listWarehouseState } from 'app/containers/ListWarehouseState/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  request?:initRequestState,
  initialDeclaration?: InitialDeclarationState;
  mainLayout?: MainLayoutState;
  authorizeContainer?: AuthorizeContainerState;
  listWarehouse?: ListWarehouseState;
  innitialDeclaration?: InitialDeclarationState;
  dataDeclaration?: DataDeclarationState;
  yearStarting?: YearStartingState;
  declarationListOfAccounts?: DeclarationListOfAccountsState;
  addAccounts?: AddAccountsState;
  declarationListOfWork?: DeclarationListOfWorkState;
  declarationTypeOfFinancialPaper?: DeclarationTypeOfFinancialPaperState;
  generatedVouchers?: GeneratedVouchersState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
