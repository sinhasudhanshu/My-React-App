import * as React from 'react';
import Box from '@mui/material/Box';

import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGridPro } from '@mui/x-data-grid-pro';


 function DataGridProDemo() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10000,
    editable: true,
  });

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
export default DataGridProDemo;