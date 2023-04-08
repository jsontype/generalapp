import * as React from "react"
import Button from "@mui/material/Button"

export default function Button({ disabled, text }) {
  return (
    <div>
      <Button disabled={disabled} variant="contained">
        {text}
      </Button>
    </div>
  )
}
