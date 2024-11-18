"use client";
import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const StatsSection = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const stats = [
    {
      value: "500K+",
      label: "Pessoas impactadas",
    },
    {
      value: "98%",
      label: "Índice de satisfação",
    },
    {
      value: "1200+",
      label: "Projetos realizados",
    },
  ];

  return (
    <Box
      sx={{
        py: 5,
        px: 3,
        backgroundColor: isDarkMode ? "#4B5563" : "#32cd32",
        borderRadius: 2,
        maxWidth: "1280px",
        mx: "auto",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Header */}
        <Grid item xs={12} lg={3}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "white", pb: { md: 3 } }}
          >
            Junte-se a nós para transformar vidas
          </Typography>
        </Grid>

        {/* Estatísticas */}
        {stats.map((stat, index) => (
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            key={index}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h3" fontWeight="bold" sx={{ color: "white" }}>
              {stat.value}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDarkMode ? "gray.400" : "white",
              }}
            >
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
