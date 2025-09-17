import * as migration_20250703_140736_init from './20250703_140736_init';
import * as migration_20250812_095117_mig1 from './20250812_095117_mig1';
import * as migration_20250819_071735_mig2 from './20250819_071735_mig2';
import * as migration_20250828_063426_mig3 from './20250828_063426_mig3';
import * as migration_20250906_065259_mig4 from './20250906_065259_mig4';
import * as migration_20250910_075901_mig5 from './20250910_075901_mig5';
import * as migration_20250915_104342_mig6 from './20250915_104342_mig6';

export const migrations = [
  {
    up: migration_20250703_140736_init.up,
    down: migration_20250703_140736_init.down,
    name: '20250703_140736_init',
  },
  {
    up: migration_20250812_095117_mig1.up,
    down: migration_20250812_095117_mig1.down,
    name: '20250812_095117_mig1',
  },
  {
    up: migration_20250819_071735_mig2.up,
    down: migration_20250819_071735_mig2.down,
    name: '20250819_071735_mig2',
  },
  {
    up: migration_20250828_063426_mig3.up,
    down: migration_20250828_063426_mig3.down,
    name: '20250828_063426_mig3',
  },
  {
    up: migration_20250906_065259_mig4.up,
    down: migration_20250906_065259_mig4.down,
    name: '20250906_065259_mig4',
  },
  {
    up: migration_20250910_075901_mig5.up,
    down: migration_20250910_075901_mig5.down,
    name: '20250910_075901_mig5',
  },
  {
    up: migration_20250915_104342_mig6.up,
    down: migration_20250915_104342_mig6.down,
    name: '20250915_104342_mig6'
  },
];
