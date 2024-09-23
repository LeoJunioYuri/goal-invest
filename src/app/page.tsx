'use client';
import React, { useState } from "react";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentResult from "./components/InvestmentResult";
import InvestmentChart from "./components/InvestmentChart"; // Importar o gráfico
import { Typography, Alert, Box, Container } from "@mui/material";
import { InvestmentData, InvestmentResultData } from "./types";
import { performCalculations } from "./utils/calculations";

const HomePage: React.FC = () => {
  const [result, setResult] = useState<InvestmentResultData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = (data: InvestmentData) => {
    setError(null);
    try {
      const calculationResult = performCalculations(data);
      setResult(calculationResult);
    } catch (error) {
      console.error("Erro ao calcular:", error);
      setError("Ocorreu um erro ao realizar o cálculo. Tente novamente.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: '16px' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'black' }}>
        Goal Invest
      </Typography>

      <InvestmentForm onCalculate={handleCalculate} />

      {error && (
        <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
          {error}
        </Alert>
      )}

      {result && (
        <Box sx={{ width: '100%', mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" align="center" sx={{ color: 'black' }}>
            Gráfico de Investimentos
          </Typography>
          <InvestmentResult data={result} />
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
