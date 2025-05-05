---
id: Block Propagation Grid
sidebar_label: Block Propagation Grid
sidebar_position: 3
---

The SNP spec specifies that nodes need to announce their blocks only to specific peers - not to the whole network. Our interpretation of the SNP spec leads to the following grid for block propagation:

There are three grids consisting of the previous, current and future validator set. They are topologically identical. This example is simplified and uses eight instead of 31 for the grid size.

You can see the authoring validator in red and propagating to its first order peers through red edges. The second order propagation edges are in green and the third order are all nodes. The third order edges are not drawn for visibility of the others.

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

Assuming the validator with index `32` (grid coordinate `(1, 1)`) wants to propagate a block. It would have to send it to these first-order grid neighbors:

`[{0, 1}, {2, 1}, {3, 1}, {4, 1}, {5, 1}, {6, 1}, {7, 1}, {8, 1}, {9, 1}, {10, 1}, {11, 1}, {12, 1}, {13, 1}, {14, 1}, {15, 1}, {16, 1}, {17, 1}, {18, 1}, {19, 1}, {20, 1}, {21, 1}, {22, 1}, {23, 1}, {24, 1}, {25, 1}, {26, 1}, {27, 1}, {28, 1}, {29, 1}, {30, 1}, {1, 0}, {1, 2}, {1, 3}, {1, 4}, {1, 5}, {1, 6}, {1, 7}, {1, 8}, {1, 9}, {1, 10}, {1, 11}, {1, 12}, {1, 13}, {1, 14}, {1, 15}, {1, 16}, {1, 17}, {1, 18}, {1, 19}, {1, 20}, {1, 21}, {1, 22}, {1, 23}, {1, 24}, {1, 25}, {1, 26}, {1, 27}, {1, 28}, {1, 29}, {1, 30}]`

Translating to the following indices:

`[1, 63, 94, 125, 156, 187, 218, 249, 280, 311, 342, 373, 404, 435, 466, 497, 528, 559, 590, 621, 652, 683, 714, 745, 776, 807, 838, 869, 900, 931, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]`

Additionally, they also send it to the same validator indices of the previous and future epoch.
