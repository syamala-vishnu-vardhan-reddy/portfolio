import { useState, useEffect, ChangeEvent } from 'react'
import {
  TextField,
  Button,
  IconButton,
  Tooltip,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import { Delete as DeleteIcon, Create as CreateIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface TodoItem {
  text: string
  place: string
  age: string
  isEditing: boolean
}

function TodoList () {
  const [listItems, setListItems] = useState<TodoItem[]>([])
  const [inputText, setInputText] = useState<string>('')
  const [inputPlace, setInputPlace] = useState<string>('')
  const [inputAge, setInputAge] = useState<string>('')
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  useEffect(() => {
    const storedItems = localStorage.getItem('todoList')
    if (storedItems) {
      setListItems(JSON.parse(storedItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(listItems))
  }, [listItems])

  function handleChangeText (event: ChangeEvent<HTMLInputElement>): void {
    setInputText(event.target.value)
  }

  function handleChangePlace (event: ChangeEvent<HTMLInputElement>): void {
    setInputPlace(event.target.value)
  }

  function handleChangeAge (event: ChangeEvent<HTMLInputElement>): void {
    setInputAge(event.target.value)
  }

  function handleAddButton () {
    if (
      inputText.length >= 4 &&
      inputPlace.length >= 2 &&
      inputAge.length > 0
    ) {
      setListItems([
        ...listItems,
        { text: inputText, place: inputPlace, age: inputAge, isEditing: false }
      ])
      setInputText('')
      setInputPlace('')
      setInputAge('')
    }
  }

  function handleEditButton (): void {
    if (
      editIndex !== null &&
      inputText.trim().length >= 4 &&
      inputPlace.trim().length >= 2 &&
      inputAge.trim().length > 0
    ) {
      const updatedItems = [...listItems]
      updatedItems[editIndex] = {
        text: inputText,
        place: inputPlace,
        age: inputAge,
        isEditing: false
      }
      setListItems(updatedItems)
      setInputText('')
      setInputPlace('')
      setInputAge('')
      setEditIndex(null)
    }
  }

  function handleDelete (index: number): void {
    setDeleteIndex(index)
    setOpenDialog(true)
  }

  function confirmDelete (): void {
    if (deleteIndex !== null) {
      const filteredItems = listItems.filter((_, i) => i !== deleteIndex)
      setListItems(filteredItems)
      setDeleteIndex(null)
      setOpenDialog(false)
    }
  }

  function handleEdit (index: number): void {
    setInputText(listItems[index].text)
    setInputPlace(listItems[index].place)
    setInputAge(listItems[index].age)
    setEditIndex(index)
  }

  function handleCloseDialog (): void {
    setOpenDialog(false)
  }

  return (
    <>
      <IconButton color='primary' component={Link} to='/projects' sx={{ m: 2 }}>
        <ArrowBackIcon />
      </IconButton><Typography
          variant='h6'
          gutterBottom
          sx={{ marginLeft: 11, color: 'lightblue' ,marginTop:-6.5}}
        >
          <strong>Todolist</strong>
        </Typography>

      <div style={{ padding: '20px' }}>
        
        <TextField
          error={inputText.length > 0 && inputText.length < 4}
          id='text'
          onChange={handleChangeText}
          label='Enter name'
          variant='outlined'
          autoFocus
          helperText={
            inputText.length > 0 &&
            inputText.length < 4 &&
            'Enter at least four characters!'
          }
          value={inputText}
        />
        <TextField
          error={inputPlace.length > 0 && inputPlace.length < 2}
          id='place'
          onChange={handleChangePlace}
          label='Enter place'
          variant='outlined'
          style={{ marginLeft: '10px' }}
          helperText={
            inputPlace.length > 0 &&
            inputPlace.length < 2 &&
            'Enter at least two characters!'
          }
          value={inputPlace}
        />
        <TextField
          id='age'
          onChange={handleChangeAge}
          label='Enter age'
          variant='outlined'
          style={{ marginLeft: '10px' }}
          value={inputAge}
        />

        {editIndex !== null ? (
          <Button
            disabled={
              inputText.length < 4 ||
              inputPlace.length < 2 ||
              inputAge.length === 0
            }
            variant='contained'
            style={{ marginTop: '10px', marginLeft: '10px' }}
            onClick={handleEditButton}
          >
            Save
          </Button>
        ) : (
          <Button
            disabled={
              inputText.length < 4 ||
              inputPlace.length < 2 ||
              inputAge.length === 0
            }
            variant='contained'
            style={{ marginTop: '10px', marginLeft: '10px' }}
            onClick={handleAddButton}
          >
            Add
          </Button>
        )}

        {listItems.length === 0 ? (
          <Typography variant='subtitle1' gutterBottom>
            No items were added. Please add an item.
          </Typography>
        ) : (
          <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Place</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listItems.map((item, index) => (
                  <TableRow
                    key={index}
                    style={{
                      backgroundColor:
                        editIndex === index ? 'lightblue' : 'transparent'
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.text}</TableCell>
                    <TableCell>{item.place}</TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>
                      <Tooltip title='Edit'>
                        <IconButton onClick={() => handleEdit(index)}>
                          <CreateIcon style={{ color: '#0dde9f' }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Delete'>
                        <IconButton onClick={() => handleDelete(index)}>
                          <DeleteIcon style={{ color: 'red' }} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color='primary'>
              Cancel
            </Button>
            <Button onClick={confirmDelete} color='primary' autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default TodoList
