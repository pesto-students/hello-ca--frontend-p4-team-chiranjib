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
import { faqs } from "../../utils/constants/faq";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? panel : false);
  };

  const getList = (list) => {
    return (
      <ul>
        {list?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
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

          {faqs?.map((faq, index) => (
            <Accordion
              expanded={expandedIndex === index}
              onChange={handleChange(index)}
              elevation={0}
              sx={{ mb: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {Array.isArray(faq.answer) ? getList(faq.answer) : faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Faq;
