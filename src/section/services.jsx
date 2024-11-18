import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  SvgIcon,
} from "@mui/material";

const services = [
  {
    title: "Apoio Educacional",
    description:
      "Oferecemos recursos e suporte para que crianças e jovens possam ter acesso à educação de qualidade e alcançar seus sonhos.",
    icon: (
      <SvgIcon fontSize="large">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </SvgIcon>
    ),
  },
  {
    title: "Programas de Saúde",
    description:
      "Organizamos campanhas de saúde e ações preventivas para comunidades carentes, promovendo bem-estar e qualidade de vida.",
    icon: (
      <SvgIcon fontSize="large">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </SvgIcon>
    ),
  },
  {
    title: "Empoderamento Comunitário",
    description:
      "Incentivamos o desenvolvimento de lideranças locais e projetos que transformam comunidades por meio da colaboração.",
    icon: (
      <SvgIcon fontSize="large">
        <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
      </SvgIcon>
    ),
  },
];

const Services = () => {
  return (
    <Box id="services" sx={{ py: 8, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold" color="#008080"gutterBottom>
            O que fazemos
          </Typography>

          <Typography variant="body1" color="textSecondary">
            Transformamos vidas através de ações solidárias e colaborativas.
          </Typography>
        </Box>

        {/* Services */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 4,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "translateY(-10px)" },
                  backgroundColor: "#f9f9f9",
                  textAlign: "center",
                }}
                className={" box-neon "}
              >
                <CardContent>
                  <Box mb={2}>{service.icon}</Box>
                  <Typography variant="h7" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
