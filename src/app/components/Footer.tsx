// components/Footer.tsx
import React from "react";
import { Container, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        Dados atualizados por último em setembro de 2024.
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        Desenvolvido por <Link href="https://github.com/leojunioyuri" target="_blank" rel="noopener">Leonardo Basso</Link>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <Link href="https://www.linkedin.com/in/leojunioyuri" target="_blank" rel="noopener">LinkedIn</Link> | 
        <Link href="https://github.com/LeoJunioYuri" target="_blank" rel="noopener"> GitHub</Link>
      </Typography>
    </Container>
  );
};

export default Footer;
