import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import Icon from "@/utils/iconsHelper";

const Contact = () => {
  return (
    <Box component="section" sx={{ bgcolor: "background.default", py: 6 }}>
      <Container>
        <Box>
          <Typography
            variant="body1"
            color="primary"
            sx={{ fontWeight: "medium" }}
          >
            Contate-nos
          </Typography>
          <Typography
            variant="h4"
            sx={{ mt: 1, fontWeight: "bold" }}
            color="text.primary"
          >
            Entre em contato
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Nossa equipe pode lhe auxiliar.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={4}>
              {/* Email Section */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#9ccdf4",
                      borderRadius: "50%",
                      color: "primary.main",
                    }}
                  >
                    <Icon name="email" size={25} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, fontWeight: "medium" }}
                    color="text.primary"
                  >
                    E-mail
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Mande-nos um e-mail.
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                    email@email.com
                  </Typography>
                </Box>
              </Grid>

              {/* Office Section */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#9ccdf4",
                      borderRadius: "50%",
                      color: "primary.main",
                    }}
                  >
                    <Icon name="location" size={25} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, fontWeight: "medium" }}
                    color="text.primary"
                  >
                    Instituto
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Venha nos visitar.
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                    100 Smith Street Collingwood VIC 3066 AU
                  </Typography>
                </Box>
              </Grid>

              {/* Phone Section */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#9ccdf4",
                      borderRadius: "50%",
                      color: "primary.main",
                    }}
                  >
                    <Icon name="phone" size={25} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, fontWeight: "medium" }}
                    color="text.primary"
                  >
                    Telefone
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Seg-Sex das 8h às 17h.
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                    +55 (62) 0000-0000
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12} lg={8}>
            <Paper
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                height: "100%",
                minHeight: 400,
              }}
            >
              <iframe
                title="map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                loading="lazy"
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
