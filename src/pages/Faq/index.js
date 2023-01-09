import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Layout from "../../components/Layout";

import theme from "../../config/theme";

import "./style.scss";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout
      className="faq-us-container"
      style={{
        backgroundColor: theme.palette.background.dark,
      }}
    >
      <Grid
        container
        component="main"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item component="section" maxWidth="md">
          <Typography
            component="h2"
            variant="h2"
            sx={{
              mt: 5,
              mb: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            FAQ
          </Typography>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            elevation={0}
            sx={{ mb: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis ipsum at ipsum hendrerit finibus nec a nulla. Curabitur eu
                lacus sed felis blandit pharetra id non ex. Sed quis hendrerit
                magna. Mauris malesuada tortor arcu. Quisque vitae dictum ex.
                Curabitur a est et velit finibus pellentesque. Praesent
                facilisis vel lacus sed sodales. Morbi venenatis enim vitae
                porttitor aliquet. Maecenas vel velit neque. Phasellus eu
                convallis nisl, ac malesuada elit. Mauris et ullamcorper neque.
                Nunc laoreet nibh a libero finibus tempus. Ut a ligula
                tristique, rhoncus urna ut, condimentum leo.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            elevation={0}
            sx={{ mb: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis ipsum at ipsum hendrerit finibus nec a nulla. Curabitur eu
                lacus sed felis blandit pharetra id non ex. Sed quis hendrerit
                magna. Mauris malesuada tortor arcu. Quisque vitae dictum ex.
                Curabitur a est et velit finibus pellentesque. Praesent
                facilisis vel lacus sed sodales. Morbi venenatis enim vitae
                porttitor aliquet. Maecenas vel velit neque. Phasellus eu
                convallis nisl, ac malesuada elit. Mauris et ullamcorper neque.
                Nunc laoreet nibh a libero finibus tempus. Ut a ligula
                tristique, rhoncus urna ut, condimentum leo.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            elevation={0}
            sx={{ mb: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis ipsum at ipsum hendrerit finibus nec a nulla. Curabitur eu
                lacus sed felis blandit pharetra id non ex. Sed quis hendrerit
                magna. Mauris malesuada tortor arcu. Quisque vitae dictum ex.
                Curabitur a est et velit finibus pellentesque. Praesent
                facilisis vel lacus sed sodales. Morbi venenatis enim vitae
                porttitor aliquet. Maecenas vel velit neque. Phasellus eu
                convallis nisl, ac malesuada elit. Mauris et ullamcorper neque.
                Nunc laoreet nibh a libero finibus tempus. Ut a ligula
                tristique, rhoncus urna ut, condimentum leo.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            elevation={0}
            sx={{ mb: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis ipsum at ipsum hendrerit finibus nec a nulla. Curabitur eu
                lacus sed felis blandit pharetra id non ex. Sed quis hendrerit
                magna. Mauris malesuada tortor arcu. Quisque vitae dictum ex.
                Curabitur a est et velit finibus pellentesque. Praesent
                facilisis vel lacus sed sodales. Morbi venenatis enim vitae
                porttitor aliquet. Maecenas vel velit neque. Phasellus eu
                convallis nisl, ac malesuada elit. Mauris et ullamcorper neque.
                Nunc laoreet nibh a libero finibus tempus. Ut a ligula
                tristique, rhoncus urna ut, condimentum leo.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Faq;
