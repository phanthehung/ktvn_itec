/**
 *
 * Asynchronously loads the component for AddAccounts
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddAccounts = lazyLoad(
  () => import('./index'),
  module => module.AddAccounts,
);
