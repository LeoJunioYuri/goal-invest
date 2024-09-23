import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const ExpandMoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

const FAQPage: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        FAQ
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h6">Como usar o aplicativo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Este aplicativo ajuda a calcular seus investimentos de forma simples e prática. Você pode inserir seus dados e obter análises detalhadas.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography variant="h6">Como posso acompanhar o desempenho dos meus investimentos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Você pode usar a seção Investimentos para visualizar o desempenho de cada investimento, além de gráficos interativos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
          <Typography variant="h6">Posso acessar o aplicativo em dispositivos móveis?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sim, o aplicativo é responsivo e pode ser acessado facilmente em dispositivos móveis, oferecendo uma experiência otimizada.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h6">O que é inflação?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Inflação é o aumento generalizado e contínuo dos preços de bens e serviços em uma economia durante um período. Ela reduz o poder de compra da moeda e é medida por índices como o IPCA.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography variant="h6">O que é IPCA?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O IPCA (Índice de Preços ao Consumidor Amplo) é o principal indicador da inflação no Brasil. Ele mede a variação dos preços de uma cesta de bens e serviços consumidos pelas famílias.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography variant="h6">O que é CDI?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O CDI (Certificado de Depósito Interbancário) é uma taxa de referência para investimentos em renda fixa. É utilizado como base para calcular o rendimento de vários produtos financeiros, como CDBs e fundos de investimento.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography variant="h6">O que é a bolsa de valores?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A bolsa de valores é um mercado organizado onde são negociadas ações de empresas, além de outros ativos financeiros. É um espaço para investidores comprarem e venderem participação em empresas.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
          <Typography variant="h6">O que é IBOV?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O IBOV (Índice Bovespa) é o principal indicador do desempenho das ações negociadas na bolsa de valores brasileira (B3). Ele reflete a valorização média das ações das empresas mais negociadas.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
          <Typography variant="h6">Por que investir?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Investir é fundamental para multiplicar seu patrimônio, proteger seu dinheiro da inflação e alcançar objetivos financeiros a longo prazo, como comprar uma casa ou garantir uma aposentadoria confortável.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7a-content" id="panel7a-header">
          <Typography variant="h6">Qual a diferença entre poupança e Tesouro Direto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A poupança é uma opção de investimento de baixo risco, mas oferece rendimentos menores e, muitas vezes, abaixo da inflação. O Tesouro Direto, por outro lado, é considerado uma opção mais rentável e segura, pois é um título público emitido pelo governo. Ele pode oferecer rendimentos superiores e opções atreladas à inflação.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8a-content" id="panel8a-header">
          <Typography variant="h6">Qual é o prazo para investimentos no Tesouro Direto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Os investimentos no Tesouro Direto possuem diferentes prazos de vencimento, que podem variar de 1 a 30 anos, dependendo do título escolhido. É importante considerar seu objetivo financeiro ao selecionar o prazo do investimento.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9a-content" id="panel9a-header">
          <Typography variant="h6">Como funciona a tributação sobre os investimentos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A tributação sobre os investimentos varia conforme o tipo de produto. Em geral, os rendimentos de aplicações em renda fixa são tributados pelo Imposto de Renda, com alíquotas que diminuem conforme o prazo de investimento. Para ações, a tributação ocorre sobre os ganhos de capital.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel10a-content" id="panel10a-header">
          <Typography variant="h6">O que são fundos de investimento?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fundos de investimento são carteiras coletivas de recursos onde vários investidores aplicam seu dinheiro. O patrimônio do fundo é gerido por um profissional, permitindo diversificação e acesso a diferentes tipos de ativos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel11a-content" id="panel11a-header">
          <Typography variant="h6">Como escolher um bom investimento?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para escolher um bom investimento, você deve considerar seu perfil de investidor (conservador, moderado ou arrojado), seus objetivos financeiros, prazos e a situação econômica. Além disso, é importante analisar a rentabilidade e os riscos associados a cada tipo de investimento.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Container>
  );
};

export default FAQPage;
