import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"

export default function ListItems({ todos, onDelete, onCompleted }) {
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {todos.map((item) => {
        const labelId = `checkbox-list-secondary-label-${item}`
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <>
                <Checkbox
                  edge="end"
                  onChange={() => onCompleted(item.id)}
                  checked={item.completed}
                  inputProps={{ "aria-labelledby": labelId }}
                />
                <IconButton aria-label="delete">
                  <DeleteIcon onClick={() => onDelete(item.id)} />
                </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={`${item.title}`} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}
