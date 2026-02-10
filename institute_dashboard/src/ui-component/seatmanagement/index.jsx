import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Paper
} from "@mui/material";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const seatStats = [
  {
    title: "Total Seats",
    value: 750,
    icon: <EventSeatIcon fontSize="large" color="primary" />
  },
  {
    title: "Filled Seats",
    value: 582,
    icon: <CheckCircleIcon fontSize="large" color="success" />
  },
  {
    title: "Vacant Seats",
    value: 168,
    icon: <CancelIcon fontSize="large" color="warning" />
  }
];

const courses = [
  {
    name: "Full Stack Web Development",
    total: 150,
    filled: 140,
    vacant: 10,
    status: "Limited"
  },
  {
    name: "Data Science Fundamentals",
    total: 200,
    filled: 200,
    vacant: 0,
    status: "Full"
  },
  {
    name: "UI/UX Design Bootcamp",
    total: 120,
    filled: 80,
    vacant: 40,
    status: "Available"
  },
  {
    name: "Cloud Computing with AWS",
    total: 180,
    filled: 162,
    vacant: 18,
    status: "Limited"
  }
];

const statusColor = {
  Available: "success",
  Limited: "warning",
  Full: "error"
};

const SeatManagement = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Seat Management
      </Typography>

      {/* Top Stats */}
      <Grid container spacing={3} mb={3}>
        {seatStats.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box mr={2}>{item.icon}</Box>
              <CardContent sx={{ p: 0 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Course Seat Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Course-wise Seat Allocation
          </Typography>

          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Course Name</b></TableCell>
                  <TableCell align="center"><b>Total Seats</b></TableCell>
                  <TableCell align="center"><b>Filled</b></TableCell>
                  <TableCell align="center"><b>Vacant</b></TableCell>
                  <TableCell align="center"><b>Status</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {courses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell>{course.name}</TableCell>
                    <TableCell align="center">{course.total}</TableCell>
                    <TableCell align="center">{course.filled}</TableCell>
                    <TableCell align="center">{course.vacant}</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={course.status}
                        color={statusColor[course.status]}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SeatManagement;
