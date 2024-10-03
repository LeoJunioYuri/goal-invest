import React from "react";
import { Container, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
      <Typography variant="body2" sx={{ color: 'var(--foreground)' }}>
        Dados atualizados por último em Outubro de 2024.
      </Typography>
      <Typography variant="body2" sx={{ color: 'var(--foreground)', mt: 1 }}>
        Desenvolvido por <Link href="https://github.com/leojunioyuri" target="_blank" rel="noopener" sx={{ color: 'inherit', textDecoration: 'underline' }}>Leonardo Basso</Link>
      </Typography>
      <Typography variant="body2" sx={{ color: 'var(--foreground)' }}>
        <Link href="https://www.linkedin.com/in/leojunioyuri" target="_blank" rel="noopener" sx={{ color: 'inherit', textDecoration: 'underline' }}>LinkedIn</Link> | 
        <Link href="https://github.com/LeoJunioYuri" target="_blank" rel="noopener" sx={{ color: 'inherit', textDecoration: 'underline' }}> GitHub</Link>
      </Typography>
    </Container>
  );
};

export default Footer;
