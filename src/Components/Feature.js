import React, { Fragment } from "react";
import { Stack, Typography, CircularProgress, Paper, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import FeatureStyles from "../CSS_modules/Components/Feature.module.css";
// feature used in home page
function Feature() {
  return (
    <Fragment>
      <Paper className={`${FeatureStyles.feature} dark_feature`} elevation={10}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
          height="20%"
          width="100%"
        >
          <Typography>Total Revenue</Typography>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Stack>
        <Stack
          style={{ justifyContent: "center", alignItems: "center" }}
          spacing={3}
        >
          <CircularProgress
            variant="determinate"
            size={90}
            value={75}
            thickness={1}
            color="primary"
            text={75}
          />
          
          <Typography>Total sales made today</Typography>
          <Typography> $420</Typography>
          <Typography className="text-center">
            previous transactions processing last payments may not be included
          </Typography>
          <Stack
            direction="row"
            width="100%"
            style={{ justifyContent: "space-around", alignItems: "center" }}
          >
            <Stack style={{ alignItems: "center" }}>
              <Typography>Target</Typography>
              <Box>
                <IconButton>
                  <KeyboardArrowDownIcon color="error" />
                </IconButton>
                $12.4K
              </Box>
            </Stack>
            <Stack style={{ alignItems: "center" }}>
              <Typography>Target</Typography>
              <Box>
                <IconButton>
                  <KeyboardArrowDownIcon color="success" />
                </IconButton>
                $12.4K
              </Box>
            </Stack>
            <Stack style={{ alignItems: "center" }}>
              <Typography>Target</Typography>
              <Box>
                <IconButton>
                  <KeyboardArrowDownIcon color="error" />
                </IconButton>
                $12.4K
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Fragment>
  );
}

export default Feature;
