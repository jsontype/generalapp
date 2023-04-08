import Typography from "@mui/material/Typography"
import "./style.css"

export default function Title({ title }) {
  return (
    <Typography variant="h4" gutterBottom className="title">
      {title}
    </Typography>
  )
}
