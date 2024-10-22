import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import { Breadcrumb, SimpleCard } from "app/components";

// STYLED COMPONENT
const ProgressRoot = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    margin: "16px"
  },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  },
  "& .progress": { margin: theme.spacing(2) }
}));

export default function AppProgress() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) return 0;
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ProgressRoot>
      <div className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Progress" }]}
        />
      </div>

      <SimpleCard title="Circular Progress (Indeterminate)">
        <CircularProgress className="progress" />
        <CircularProgress className="progress" color="secondary" />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Circular Progress (static)">
        <CircularProgress value={25} variant="determinate" className="progress" />
        <CircularProgress value={50} variant="determinate" className="progress" color="secondary" />
        <CircularProgress value={75} variant="determinate" className="progress" color="secondary" />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Linear Progress (Indeterminate)">
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Linear Progress (Determinate)">
        <LinearProgress variant="determinate" value={completed} />
        <br />
        <LinearProgress color="secondary" variant="determinate" value={completed} />
      </SimpleCard>
    </ProgressRoot>
  );
}
