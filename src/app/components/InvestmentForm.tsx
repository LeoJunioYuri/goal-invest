import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Alert,
  Box,
} from '@mui/material';
import { InvestmentData } from '../types';
import { fetchAllRates } from '../services/api';

interface InvestmentFormProps {
  onCalculate: (data: InvestmentData) => void;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({ onCalculate }) => {
  const [initialInvestment, setInitialInvestment] = useState<number>(0);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [goal, setGoal] = useState<number | undefined>(undefined);
  const [period, setPeriod] = useState<number | undefined>(undefined);
  const [calculationType, setCalculationType] = useState<'goal' | 'period'>('goal');
  const [availableRates, setAvailableRates] = useState<{ name: string; value: number }[]>([]);
  const [selectedRate, setSelectedRate] = useState<number | 'custom' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      try {
        const rates = await fetchAllRates();
        setAvailableRates(rates);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Erro ao buscar as taxas.");
        setAvailableRates([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (
      initialInvestment === undefined ||
      monthlyContribution === undefined ||
      !interestRate ||
      (!goal && !period)
    ) {
      setError("Por favor, preencha todos os campos necessários.");
      return;
    }
  
    setError(null);
    onCalculate({
      initialInvestment,
      monthlyContribution,
      annualInterestRate: interestRate,
      investmentGoal: calculationType === 'goal' ? goal : undefined,
      investmentPeriod: calculationType === 'period' ? period : undefined,
    });
  };
  

  const handleRateChange = (value: string | number) => {
    if (value === 'custom') {
      setSelectedRate('custom');
      setInterestRate(0);
    } else {
      const rate = parseFloat(value as string);
      setSelectedRate(rate);
      setInterestRate(rate);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Aporte Inicial"
        type="number"
        value={initialInvestment}
        onChange={(e) => setInitialInvestment(parseFloat(e.target.value))}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Aportes Mensais"
        type="number"
        value={monthlyContribution}
        onChange={(e) => setMonthlyContribution(parseFloat(e.target.value))}
        fullWidth
        margin="normal"
        required
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="rate-select-label">Taxa de Juros</InputLabel>
        <Select
          labelId="rate-select-label"
          value={selectedRate !== null ? selectedRate : ''}
          label="Taxa de Juros"
          onChange={(e) => handleRateChange(e.target.value)}
        >
          {availableRates.length > 0 ? (
            availableRates.map((rate) => (
              <MenuItem key={rate.name} value={rate.value}>
                {`${rate.name} (${rate.value.toFixed(2)}%)`}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled value="">
              {loading ? "Carregando..." : "Nenhuma taxa disponível"}
            </MenuItem>
          )}
          <MenuItem value="custom">Taxa Personalizada</MenuItem>
        </Select>
      </FormControl>

      {selectedRate === 'custom' && (
        <TextField
          label="Taxa de Juros Anual (%)"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          fullWidth
          margin="normal"
          required
        />
      )}

      <FormControl fullWidth margin="normal">
        <InputLabel id="calculation-type-label">Tipo de Cálculo</InputLabel>
        <Select
          labelId="calculation-type-label"
          value={calculationType}
          label="Tipo de Cálculo"
          onChange={(e) => setCalculationType(e.target.value as 'goal' | 'period')}
        >
          <MenuItem value="goal">Calcular Tempo para Meta</MenuItem>
          <MenuItem value="period">Calcular Montante no Período</MenuItem>
        </Select>
      </FormControl>

      {calculationType === 'goal' ? (
        <TextField
          label="Meta de Investimento"
          type="number"
          value={goal || ''}
          onChange={(e) => setGoal(parseFloat(e.target.value))}
          fullWidth
          margin="normal"
          required
        />
      ) : (
        <TextField
          label="Período de Investimento (meses)"
          type="number"
          value={period || ''}
          onChange={(e) => setPeriod(parseInt(e.target.value))}
          fullWidth
          margin="normal"
          required
        />
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
        {loading ? 'Carregando...' : 'Calcular'}
      </Button>
    </Box>
  );
};

export default InvestmentForm;
