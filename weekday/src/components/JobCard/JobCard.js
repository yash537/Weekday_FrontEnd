import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import "./JobCard.css";

const JobCard = () => {
  return (
    <Card
      className="job-card"
      sx={{
        boxShadow: "lg",
        width: 400,
        maxWidth: "100%",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <Chip size="sm" variant="soft">
          ⏳ posted 13 days ago
        </Chip>
        <Chip size="sm" variant="soft">
          📈 1 referral
        </Chip>
      </Box>
      <Box className="card-header">
        <Box className="company-logo">
          <img
            src={""}
            alt="logo"
            style={{ borderRadius: "50%", objectFit: "contain" }}
          />
        </Box>
        <Box className="company-info">
          <Typography level="body-lg" className="company-name">
            <a href={"#"} target="_blank" rel="noopener noreferrer">
              weekday
            </a>
          </Typography>
          <Typography>frontend</Typography>
          <Typography level="body-sm">Remote</Typography>
        </Box>
      </Box>
      <Box>
        <Typography level="body-sm">
          Estimated Salary : $50k- $60k /yr
        </Typography>
      </Box>
      <CardContent>
        <Typography level="title-lg">About Company:</Typography>
        <Typography level="title-md">About us</Typography>
        <Box className="company-detail">
          <Typography className="company-about" level="body-md">
            This is a sample job and you must have displayed it to understand
            that its not just some random lorem ipsum text but something which
            was manually written. Oh well, if random text is what you were
            looking for then here it is: Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages and now in this assignment.
          </Typography>
          <Typography level="body-md" className="view-job">
            View job
          </Typography>
        </Box>
        <Typography level="body-md">Minimum Experience</Typography>
        <Typography level="body-md">2-3 years</Typography>
      </CardContent>
      <CardActions className="card-footer">
        <Button className="apply-btn">⚡ Easy Apply</Button>
        <Button className="ref-btn">Unlock referral asks</Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
