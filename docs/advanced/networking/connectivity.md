---
id: Connectivity
sidebar_label: Connectivity
sidebar_position: 2
---

Our interpretation of the SNP spec leads to the following connectivity graph. There are three grids;
previous, current and future validator set. As simplification it uses just eight instead of 18 as
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
