import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Rating,
} from "@mui/material";

const Testimonials = () => {
  const reviews = [
    {
      title: "Transformando Vidas",
      text: `O IPMOVER me ajudou a superar barreiras que pareciam impossíveis. Graças ao apoio deles, pude recomeçar minha vida com dignidade e esperança.`,
      author: "Ana Maria",
      rating: 5,
    },
    {
      title: "Um Futuro Melhor",
      text: `Nunca imaginei que uma instituição pudesse fazer tanto por mim e minha família. O IPMOVER não apenas nos ajudou financeiramente, mas também nos deu suporte emocional.`,
      author: "João Pedro",
      rating: 5,
    },
    {
      title: "Esperança Renovada",
      text: `Participar dos programas do IPMOVER foi transformador. Eles mostram que cada pequena ação pode gerar grandes impactos na vida de muitas pessoas.`,
      author: "Mariana Silva",
      rating: 5,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f9fafb", py: 8 }}>
      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ maxWidth: "600px" }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Conheça as histórias inspiradoras de quem foi ajudado pelo IPMOVER
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mt: 2 }}>
              O IPMOVER é uma instituição beneficente dedicada a transformar
              vidas por meio de ações concretas. Nosso objetivo é levar apoio,
              esperança e oportunidades para aqueles que mais precisam.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", mb: 2 }}>
                    <Rating value={review.rating} readOnly />
                  </Box>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{ color: "info.main", fontWeight: "bold" }}
                  >
                    {review.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 2, color: "text.secondary" }}
                  >
                    {review.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", mt: 2 }}
                  >
                    &mdash; {review.author}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
