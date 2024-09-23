import React from 'react';
import { InvestmentResultData } from '../types';
import { Typography, Paper } from '@mui/material';
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
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6">Resultado</Typography>
      <Typography>
        {`Montante Final: R$ ${finalBalance.toFixed(2)}`}
      </Typography>
      <Typography>
        {`Tempo Total: ${years} anos e ${remainingMonths} meses (${totalMonths} meses)`}
      </Typography>

      <InvestmentChart balances={balances} labels={labels} />
    </Paper>
  );
};

export default InvestmentResult;
