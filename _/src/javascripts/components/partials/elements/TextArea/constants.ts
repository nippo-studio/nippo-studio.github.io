'use strict';

import {BEM} from '../../base/bem';

const bem = BEM('TextArea');

export const ClassNames = {
  root: {
    base: bem.block(),
    mods: {
      hasError: 'has-error',
    },
  },
};
