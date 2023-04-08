import { memo, useState } from "react"
import { TodosItemProps } from "App"
import styles from "./style.module.scss"
import { useTranslation } from "react-i18next"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import ListItems from "components/atoms/ListItems"
import Title from "components/atoms/Title"

type TodosProps = {
  todos: TodosItemProps[]
  onCreate: (title: string) => void
  onCompleted: (id: number) => void
  onDelete: (id: number) => void
}

const Todos = memo(({ todos, onCreate, onDelete, onCompleted }: TodosProps) => {
  // JS
  const { t } = useTranslation()

  const [text, setText] = useState("")

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onCreate(text)
    setText("")
  }

  const onChange = (e: {
    preventDefault: () => void
    target: { value: string }
  }) => {
    e.preventDefault()
    setText(e.target.value)
  }

  // XML
  return (
    <div className={styles.Todos}>
      <Title title={t("todos:title")} />

      <form onSubmit={onSubmit}>
        <TextField
          required
          id="outlined-required"
          label="New Todo"
          type="text"
          // new
          name="todo"
          value={text}
          placeholder={String(t("todos:todoPlaceholder"))}
          onChange={onChange}
        />
        <Button
          color="inherit"
          type="submit"
          variant="contained"
          value={String(t("todos:todoSubmit"))}
          sx={{ ml: 2 }}
          style={{ height: "56px" }}
        >
          <span className={styles.btnText}>{t("todos:todoSubmit")}</span>
        </Button>
      </form>
      <ListItems todos={todos} onDelete={onDelete} onCompleted={onCompleted} />
    </div>
  )
})

export default Todos
