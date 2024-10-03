//import axios from 'axios';

// Dados mockados
const MOCK_SELIC = 10.65; // Selic atual
const MOCK_CDI = 10.65; // CDI atual
const MOCK_IPCA = 3.97; // IPCA acumulado nos últimos 12 meses
const MOCK_SAVINGS = 6.17; // Poupança anual

// Função para buscar a taxa Selic
export const fetchSelicRate = async (): Promise<number> => {
  return MOCK_SELIC; // Retornar o valor mockado
};

// Função para buscar a taxa CDI
export const fetchCdiRate = async (): Promise<number> => {
  return MOCK_CDI; // Retornar o valor mockado
};

// Função para buscar a taxa IPCA
export const fetchIpcaRate = async (): Promise<number> => {
  return MOCK_IPCA; // Retornar o valor mockado
};

// Função para buscar a taxa de Poupança
export const fetchSavingsRate = async (): Promise<number> => {
  return MOCK_SAVINGS; // Retornar o valor mockado
};

// Função para buscar todas as taxas disponíveis
export const fetchAllRates = async (): Promise<{ name: string; value: number }[]> => {
  return [
    { name: 'Selic', value: MOCK_SELIC },
    { name: 'CDI', value: MOCK_CDI },
    { name: 'IPCA', value: MOCK_IPCA },
    { name: 'Poupança', value: MOCK_SAVINGS },
  ];
};



//Até então, dificuldade em encontrar API'S que retornem os valores corretos e atualizados do banco central. 
// Exemplo de requisições em axios abaixo:

// import axios from 'axios';

// // Função para buscar a taxa Selic
// export const fetchSelicRate = async (): Promise<number> => {
//   try {
//     const response = await axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json');
//     const valor = response.data[0]?.valor;
//     return valor ? parseFloat(valor.replace(',', '.')) : 0; // Tratar a formatação
//   } catch (error) {
//     console.error('Erro ao buscar a taxa Selic:', error);
//     throw new Error('Erro ao buscar a taxa Selic');
//   }
// };

// // Função para buscar a taxa CDI
// export const fetchCdiRate = async (): Promise<number> => {
//   try {
//     const response = await axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados/ultimos/1?formato=json');
//     const valor = response.data[0]?.valor;
//     return valor ? parseFloat(valor.replace(',', '.')) : 0;
//   } catch (error) {
//     console.error('Erro ao buscar a taxa CDI:', error);
//     throw new Error('Erro ao buscar a taxa CDI');
//   }
// };

// // Função para buscar a taxa IPCA
// export const fetchIpcaRate = async (): Promise<number> => {
//   try {
//     const response = await axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/1?formato=json');
//     const valor = response.data[0]?.valor;
//     return valor ? parseFloat(valor.replace(',', '.')) : 0;
//   } catch (error) {
//     console.error('Erro ao buscar a taxa IPCA:', error);
//     throw new Error('Erro ao buscar a taxa IPCA');
//   }
// };

// // Função para buscar a taxa de Poupança
// export const fetchSavingsRate = async (): Promise<number> => {
//   try {
//     const response = await axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.213/dados/ultimos/1?formato=json');
//     const valor = response.data[0]?.valor;
//     return valor ? parseFloat(valor.replace(',', '.')) : 0;
//   } catch (error) {
//     console.error('Erro ao buscar a taxa de Poupança:', error);
//     throw new Error('Erro ao buscar a taxa de Poupança');
//   }
// };

// // Função para buscar todas as taxas disponíveis
// export const fetchAllRates = async (): Promise<{ name: string; value: number }[]> => {
//   try {
//     const selic = await fetchSelicRate();
//     const cdi = await fetchCdiRate();
//     const ipca = await fetchIpcaRate();
//     const savings = await fetchSavingsRate();

//     return [
//       { name: 'Selic', value: selic },
//       { name: 'CDI', value: cdi },
//       { name: 'IPCA', value: ipca },
//       { name: 'Poupança', value: savings },
//     ];
//   } catch (error) {
//     console.error('Erro ao buscar as taxas:', error);
//     throw new Error('Erro ao buscar as taxas');
//   }
// };
