---
id: Connectivity
sidebar_label: Connectivity
sidebar_position: 2
---

Our interpretation of the SNP spec leads to the following connectivity graph. There are three grids;
previous, current and future validator set. As simplification it uses just eight instead of 31 as
grid size. One validator is selected in red, connecting to its first order peers in red. The
second order connections are in green. The third order connections are all nodes.

<iframe
  src="https://stackblitz.com/edit/typescript-dm85k5?embed=1&file=index.ts&hideDevTools=1&hideExplorer=1&hideNavigation=1&theme=dark&view=preview"
  style={{
    width: '100%',
    height: '600px',
    border: 0,
    borderRadius: '0px',
    overflow: 'hidden'
  }}
  title="TypeScript StackBlitz Example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>

## Example

For the validator with index `32` (grid coordinate `(1, 1)`), this would mean that they are connected to the following other validator coordinates on the same epoch:

`[{0, 0}, {2, 0}, {3, 0}, {4, 0}, {5, 0}, {6, 0}, {7, 0}, {8, 0}, {9, 0}, {10, 0}, {11, 0}, {12, 0}, {13, 0}, {14, 0}, {15, 0}, {16, 0}, {17, 0}, {18, 0}, {19, 0}, {20, 0}, {21, 0}, {22, 0}, {23, 0}, {24, 0}, {25, 0}, {26, 0}, {27, 0}, {28, 0}, {29, 0}, {30, 0}, {1, 1}, {1, 2}, {1, 3}, {1, 4}, {1, 5}, {1, 6}, {1, 7}, {1, 8}, {1, 9}, {1, 10}, {1, 11}, {1, 12}, {1, 13}, {1, 14}, {1, 15}, {1, 16}, {1, 17}, {1, 18}, {1, 19}, {1, 20}, {1, 21}, {1, 22}, {1, 23}, {1, 24}, {1, 25}, {1, 26}, {1, 27}, {1, 28}, {1, 29}, {1, 30}]`

Translating to the following indices:

`[0, 62, 93, 124, 155, 186, 217, 248, 279, 310, 341, 372, 403, 434, 465, 496, 527, 558, 589, 620, 651, 682, 713, 744, 775, 806, 837, 868, 899, 930, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]`

Additionally their are also connected to the same indices in the previous and future epoch.
