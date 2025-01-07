import { useState } from "react";
import {
  Grid,
  Typography,
  Slider,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function calculateEMI(principal: number, rate: number, tenure: number) {
  const monthlyInterestRate = rate / 100 / 12;
  const numberOfMonths = tenure * 12;
  const emi =
    (principal *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** numberOfMonths) /
    ((1 + monthlyInterestRate) ** numberOfMonths - 1);
  return emi.toFixed(2);
}

function calculateTotalInterest(
  principal: number,
  emi: number,
  tenure: number
) {
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - principal;
  return totalInterest.toFixed(2);
}

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(4100000);
  const [interestRate, setInterestRate] = useState(1);
  const [loanTenure, setLoanTenure] = useState(29);

  const emi = parseFloat(calculateEMI(loanAmount, interestRate, loanTenure));
  const totalInterest = parseFloat(
    calculateTotalInterest(loanAmount, emi, loanTenure)
  );
  const totalAmount = loanAmount + totalInterest;

  // Highcharts configuration
  const chartOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "<b>Rs.{point.y:.1f}</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
          format: "<b>{point.name}</b>: ₹{point.y:.0f}",
        },
      },
    },
    series: [
      {
        name: "Amount",
        colorByPoint: true,
        innerSize: "75%",
        data: [
          { name: "Principal Amount", y: loanAmount, color: "#d3d3f7" },
          { name: "Interest Amount", y: totalInterest, color: "#6a5acd" },
        ],
      },
    ],
  };

  return (
    <Box p={4} sx={{ borderRadius: "8px" }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                EMI Calculator
              </Typography>
            </Grid>

            {/* Loan Amount */}
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Loan Amount:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="filled"
                    style={{ background: "#b4f0b4" }}
                    value={loanAmount}
                    onChange={(event) =>
                      setLoanAmount(Number(event.target.value))
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Box sx={{ maxWidth: 500 }}>
                <Slider
                  value={loanAmount}
                  min={100000}
                  step={100000}
                  max={100000000}
                  onChange={(_event, newValue) =>
                    setLoanAmount(newValue as number)
                  }
                  valueLabelDisplay="auto"
                  style={{ color: "#31a831" }}
                />
              </Box>
            </Grid>

            {/* Interest Rate */}
            <Grid item xs={12}>
              <Grid container>
                <Grid item alignContent="center" xs={6}>
                  <Typography>Rate of Interest (p.a.):</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="filled"
                    style={{ background: "#b4f0b4" }}
                    value={interestRate}
                    onChange={(event) =>
                      setInterestRate(Number(event.target.value))
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">%</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Box sx={{ maxWidth: 500 }}>
                <Slider
                  value={interestRate}
                  min={1}
                  step={0.1}
                  max={30}
                  onChange={(_event, newValue) =>
                    setInterestRate(newValue as number)
                  }
                  valueLabelDisplay="auto"
                  style={{ color: "#31a831" }}
                />
              </Box>
            </Grid>

            {/* Loan Tenure */}
            <Grid item xs={12}>
              <Grid container>
                <Grid item alignContent="center" xs={6}>
                  <Typography>Loan Tenure (years):</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="filled"
                    style={{ background: "#b4f0b4", border: "none" }}
                    value={loanTenure}
                    onChange={(event) =>
                      setLoanTenure(Number(event.target.value))
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">yrs</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Box sx={{ maxWidth: 500 }}>
                <Slider
                  value={loanTenure}
                  min={1}
                  step={1}
                  max={30}
                  onChange={(_event, newValue) =>
                    setLoanTenure(newValue as number)
                  }
                  valueLabelDisplay="auto"
                  style={{ color: "#31a831" }}
                />
              </Box>
            </Grid>

            {/* EMI Details */}
            <Grid item xs={12}>
              <Typography>Monthly EMI: ₹{emi.toLocaleString()}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Principal Amount: ₹{loanAmount.toLocaleString()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Total Interest: ₹{totalInterest.toLocaleString()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Total Amount: ₹{totalAmount.toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={6}>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </Grid>
      </Grid>
    </Box>
  );
}
