'use strict';

import {BEM} from '../../base/bem';

const bem = BEM('Anchor');

export const ClassNames = {
  root: {
    base: bem.block(),
    mods: {
      maximized: 'maximized',
      noUnderline: 'no-underline',
      skin: {
        default: 'skin--default',
        inherit: 'skin--inherit',
      },
    },
  },
};
