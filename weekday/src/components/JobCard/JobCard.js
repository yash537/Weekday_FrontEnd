import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import "./JobCard.css";

const JobCard = ({ job }) => {
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
        {job.referralCount && (
          <Chip size="sm" variant="soft">
            📈 {job.referralCount} referral
          </Chip>
        )}
      </Box>
      <Box className="card-header">
        <Box className="company-logo">
          {job.logoUrl && (
            <img
              src={job.logoUrl}
              alt="logo"
              style={{ borderRadius: "50%", objectFit: "contain" }}
            />
          )}
        </Box>
        <Box className="company-info">
          <Typography level="body-lg" className="company-name">
            <a href={job.jdLink} target="_blank" rel="noopener noreferrer">
              {job.companyName}
            </a>
          </Typography>
          <Typography>{job.jobRole}</Typography>
          <Typography level="body-sm">{job.location}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography level="body-sm">
          {job.minJdSalary &&
            job.maxJdSalary &&
            `Estimated Salary : $${job.minJdSalary}k- $${job.maxJdSalary}k /yr ✅`}
        </Typography>
      </Box>
      <CardContent>
        <Typography level="title-lg">About Company:</Typography>
        <Typography level="title-md">About us</Typography>
        <Box className="company-detail">
          <Typography className="company-about" level="body-md">
            {job.jobDetailsFromCompany || "No details available"}
          </Typography>
          <Typography level="body-md" className="view-job">
            View job
          </Typography>
        </Box>
        <Typography level="body-md">Minimum Experience</Typography>
        <Typography level="body-md">
          {job.minExp && job.maxExp && `${job.minExp}-${job.maxExp}`} years
        </Typography>
      </CardContent>
      <CardActions className="card-footer">
        <Button className="apply-btn">⚡ Easy Apply</Button>
        <Button className="ref-btn">Unlock referral asks</Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
