export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;
export const LINES_PER_LEVEL = 10;
export const COLORS = [
  'none',
  'rgba(0, 255, 255)',
  'rgba(0, 0, 255)',
  'rgba(255, 132, 0)',
  'rgba(255, 255, 0)',
  'rgba(0, 255, 0)',
  'rgba(255, 0, 255)',
  'rgba(255, 0, 0)',
];
export const COLORSLIGHTER= [
  'none',
  'rgba(132, 255, 255)',
  'rgba(132, 132, 255)',
  'rgba(255, 195, 132)',
  'rgba(255, 255, 132)',
  'rgba(132, 255, 132)',
  'rgba(255, 132, 255)',
  'rgba(255, 132, 132)',
];
export const COLORSDARKER= [
  'none',
  'rgba(0, 132, 132)',
  'rgba(0, 0, 132)',
  'rgba(132, 65, 0)',
  'rgba(132, 132, 0)',
  'rgba(0, 132, 0)',
  'rgba(132, 0, 132)',
  'rgba(132, 0, 0)',
];
export const SHAPES = [
  [],
  [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
  [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
  [[4, 4], [4, 4]],
  [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
  [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
  [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
];

export class KEY {
  static readonly ESC = 27;
  static readonly SPACE = 32;
  static readonly LEFT = 37;
  static readonly UP = 38;
  static readonly RIGHT = 39;
  static readonly DOWN = 40;
}

export class POINTS {
  static readonly SINGLE = 100;
  static readonly DOUBLE = 300;
  static readonly TRIPLE = 500;
  static readonly TETRIS = 800;
  static readonly SOFT_DROP = 1;
  static readonly HARD_DROP = 2;
}

export const LEVEL = [
   800,
   720,
   630,
   550,
   470,
   380,
   300,
   220,
   130,
   100,
   80,
   80,
   80,
   70,
   70,
   70,
   50,
   50,
   50,
   30,
   30,
  // 29+ is 20ms
];
