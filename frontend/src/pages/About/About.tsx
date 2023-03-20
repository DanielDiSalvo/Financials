import { Grid, Box, Typography } from "@mui/material";
import { styles } from "./styles";

const About = () => {
  return (
    <Grid container spacing={2} sx={styles.container}>
      <Box>
        <h1>About</h1>
        <Typography sx={{ mt: 4 }}>
          This application was made with the follow technologies:
        </Typography>
        <Typography sx={{ mt: 4, fontWeight: "bold" }}>Backend:</Typography>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
        </ul>
        <Typography sx={{ mt: 2, fontWeight: "bold" }}>Frontend:</Typography>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Redux Toolkit</li>
          <li>Material UI</li>
          <li>React Router Dom</li>
          <li>Storybook</li>
        </ul>
        <Typography sx={{ mt: 2, fontWeight: "bold" }}>Scripts:</Typography>
        <ul>
          <li>
            <span style={{ fontWeight: "bold" }}>Run BE</span>: npm run dev
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Run BE</span>: npm run start
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Run BE</span>: npm run
            storybook
          </li>
        </ul>
      </Box>
    </Grid>
  );
};

export default About;
