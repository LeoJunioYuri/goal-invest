'use client';
import React, { useState } from "react";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentResult from "./components/InvestmentResult";
import { Typography, Alert, Box, Container } from "@mui/material";
import { InvestmentData, InvestmentResultData } from "./types";
import { performCalculations } from "./utils/calculations";

const HomePage: React.FC = () => {
  const [result, setResult] = useState<InvestmentResultData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [calculated, setCalculated] = useState<boolean>(false);

  const handleCalculate = (data: InvestmentData) => {
    setError(null);
    try {
      const calculationResult = performCalculations(data);
      setResult(calculationResult);
      setCalculated(true);
    } catch (error) {
      console.error("Erro ao calcular:", error);
      setError("Ocorreu um erro ao realizar o cálculo. Tente novamente.");
      setCalculated(false);
    }
  };

  return (
    <Container
      maxWidth="lg"
      className="flex flex-col min-h-screen p-4 bg-background text-foreground transition-colors duration-300"
    >
      <Typography variant="h4" align="center" gutterBottom>
        Goal Invest
      </Typography>

      <Box
        className={`w-full flex flex-col md:flex-row items-center justify-center transition-transform duration-500 ease-in-out`}
      >
        <Box
          className={`transition-transform duration-500 ease-in-out ${
            calculated ? 'translate-y-0' : '-translate-y-12'
          }`}
          style={{
            maxWidth: '90%',
            width: '500px',
            height: '400px',
            margin: '4rem auto 6rem',
          }}
        >
          <Typography variant="h5" align="center" style={{ paddingBottom: '1rem' }}>
            Dados do investimento
          </Typography>
          <InvestmentForm onCalculate={handleCalculate} />
        </Box>

        {result && (
          <Box
            className={`transition-opacity duration-500 ease-in-out ${
              calculated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{
              maxWidth: '90%',
              width: '500px',
              height: '400px',
              margin: '0 4rem',
              marginTop: window.innerWidth < 768 ? '12rem' : '6rem',
              marginBottom: '12rem',
            }}
          >
            <Typography variant="h5" align="center">
              Gráfico de Investimentos
            </Typography>
            <InvestmentResult data={result} />
          </Box>
        )}
      </Box>

      {error && (
        <Alert severity="error" className="mt-2 w-full">
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default HomePage;
