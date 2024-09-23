"use client";
import React, { useState } from "react";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentResult from "./components/InvestmentResult";
import { Container, Typography, Alert } from "@mui/material";
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
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Goal Invest
      </Typography>

      <InvestmentForm onCalculate={handleCalculate} />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {result && <InvestmentResult data={result} />}
    </Container>
  );
};

export default HomePage;
