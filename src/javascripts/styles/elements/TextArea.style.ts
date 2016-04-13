'use strict';

import {Color} from '../base/constants';

import {ClassNames as CN} from './TextArea.constants';

const style = {
  root: {
    base: {
      width: '100%',
      height: '100%',
      padding: '12px',
      backgroundClip: 'padding-box',
      backgroundColor: '#fff',
      border: '1px solid #d1d1d1',
      borderRadius: 0,
      fontSize: '.8rem',
      outline: 'none',
      zIndex: 1,
      appearance: 'none',
      '&:focus': {
        borderColor: Color.Cyan,
        zIndex: 2,
      },
    },
    hasError: {
      '&, &:focus': {
        borderColor: Color.Red,
      },
    },
  },
};

export default {
  [`.${CN.root.base}`]: [style.root.base, {
    [`&.${CN.root.mods.hasError}`]: style.root.hasError,
  }],
};
