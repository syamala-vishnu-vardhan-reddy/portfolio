import React, { useState, ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import CreateIcon from '@mui/icons-material/Create'

interface TodoItem {
  text: string
  isEditing: boolean
}

function TodoList () {
  const [listItems, setListItems] = useState<TodoItem[]>([])
  const [inputText, setInputText] = useState<string>('')
  const [editIndex, setEditIndex] = useState<number | null>(null)

  function handleChange (event: ChangeEvent<HTMLInputElement>): void {
    setInputText(event.target.value)
  }

  function handleAddButton () {
    if (inputText.length >= 4) {
      setListItems([...listItems, { text: inputText, isEditing: false }])
      setInputText('')
    }
  }

  function handleEditButton (): void {
    if (editIndex !== null && inputText.trim().length >= 4) {
      const updatedItems = [...listItems]
      updatedItems[editIndex] = { text: inputText, isEditing: false }
      setListItems(updatedItems)
      setInputText('')
      setEditIndex(null)
    }
  }

  function handleDelete (index: number): void {
    const filteredItems = listItems.filter((_, i) => i !== index)
    setListItems(filteredItems)
  }

  function handleEdit (index: number): void {
    setInputText(listItems[index].text)
    setEditIndex(index)
  }

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        error={inputText.length > 0 && inputText.length < 4}
        id='standard-basic'
        onChange={handleChange}
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

      {editIndex !== null ? (
        <Button
          disabled={inputText.length < 4}
          variant='contained'
          style={{ marginTop: '10px', marginLeft: '30px' }}
          onClick={handleEditButton}
        >
          Edit
        </Button>
      ) : (
        <Button
          disabled={inputText.length < 4}
          variant='contained'
          style={{ marginTop: '10px', marginLeft: '30px' }}
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
        listItems.map((item, index) => (
          <div key={index} style={{ marginTop: '10px' }}>
            <span
              style={{ fontSize: '20px', color: '#1959b3', fontWeight: 500 }}
            >
              {index + 1} - {item.text}
            </span>
            <Tooltip title='Edit'>
              <IconButton onClick={() => handleEdit(index)}>
                <CreateIcon style={{ color: '#0dde9f', marginLeft: '20px' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title='Delete'>
              <IconButton onClick={() => handleDelete(index)}>
                <DeleteIcon style={{ color: 'red', marginLeft: '20px' }} />
              </IconButton>
            </Tooltip>
          </div>
        ))
      )}
    </div>
  )
}

export default TodoList
