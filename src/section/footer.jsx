"use client";

import React from "react";
import {
  Box,
  Container,
  Grid2,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import Icon from "@/utils/iconsHelper";

function Footer() {
  const [currentYear, setCurrentYear] = React.useState(null);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <Box sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 item>
            <Link href="#" color="text.secondary" underline="hover">
              Sobre nós
            </Link>
          </Grid2>

          <Grid2 item>
            <Link href="#" color="text.secondary" underline="hover">
              Serviços
            </Link>
          </Grid2>
          <Grid2 item>
            <Link href="#" color="text.secondary" underline="hover">
              Projetos
            </Link>
          </Grid2>
          <Grid2 item>
            <Link href="#" color="text.secondary" underline="hover">
              Instituições apoiadas
            </Link>
          </Grid2>
          <Grid2 item>
            <Link href="#" color="text.secondary" underline="hover">
              Contato
            </Link>
          </Grid2>
        </Grid2>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <IconButton href="#" color="inherit">
            <Icon name="facebook" />
          </IconButton>
          <IconButton href="#" color="inherit">
            <Icon name="instagram" />
          </IconButton>
          <IconButton href="#" color="inherit">
            <Icon name="twitter" />
          </IconButton>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
          suppressHydrationWarning
        >
          © {currentYear} Time ABC, Inc. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
