import { memo } from "react"
import { useTranslation } from "react-i18next"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Title from "components/atoms/Title"

type Counterprops = {
  count: number
  onIncrease: (count: number) => void
  onDecrease: (count: number) => void
}

const Counter = memo(({ count, onIncrease, onDecrease }: Counterprops) => {
  const { t } = useTranslation()
  return (
    <>
      <Title title={t("counter:counterLabel")} />
      <Box
        sx={{
          width: 300,
          height: 100,
          mt: 2,
        }}
      >
        <TextField variant="filled" id="outlined-disabled" value={count} />
      </Box>

      <Button
        variant="outlined"
        sx={{ mr: 1 }}
        onClick={(count: any) => onIncrease(count)}
      >
        +
      </Button>
      <Button
        variant="outlined"
        sx={{ mr: 1 }}
        onClick={(count: any) => onDecrease(count)}
      >
        -
      </Button>
    </>
  )
})

export default Counter
