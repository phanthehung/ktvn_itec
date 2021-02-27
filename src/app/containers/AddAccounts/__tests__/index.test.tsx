import * as React from 'react';
import { render } from '@testing-library/react';

import { AddAccounts } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<AddAccounts  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddAccounts />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
