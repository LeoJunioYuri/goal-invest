import React from 'react';
import { InvestmentResultData } from '../types';
import { Typography, Paper, Box } from '@mui/material';
import InvestmentChart from './InvestmentChart';

interface InvestmentResultProps {
  data: InvestmentResultData;
}

const InvestmentResult: React.FC<InvestmentResultProps> = ({ data }) => {
  const {
    finalBalance,
    totalMonths,
    years,
    remainingMonths,
    balances,
    labels,
  } = data;

  return (
    <Paper style={{ padding: '16px', marginTop: '16px', backgroundColor: '#fff' }}>
      <Typography variant="h6" sx={{ color: 'black' }}>
        Resultado
      </Typography>
      <Typography sx={{ color: 'black' }}>
        {`Montante Final: R$ ${finalBalance !== null ? finalBalance.toFixed(2) : 'N/A'}`}
      </Typography>
      <Typography sx={{ color: 'black' }}>
        {`Tempo Total: ${years !== null ? `${years} anos e ${remainingMonths} meses (${totalMonths} meses)` : 'N/A meses'}`}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <InvestmentChart balances={balances} labels={labels} />
      </Box>
    </Paper>
  );
};

export default InvestmentResult;
