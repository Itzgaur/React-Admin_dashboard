/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const Span = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  column-gap: 0.5rem;
`;

export default function StatCard({
  name,
  icon: Icon,
  value,
  color,
}) {
  return (
    <Card sx={{ borderRadius: "10px" }}>
      <CardContent>
        <Typography>
          <Span>
            <Icon size={24} color={color} />
            {name}
          </Span>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "700",
              color: color,
            }}
          >
            {value}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
