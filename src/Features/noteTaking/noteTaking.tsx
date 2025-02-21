import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

// Define note structure
interface Note {
  id: number;
  text: string;
}

const NoteApp: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState<string>("");
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  // Load notes from local storage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) setNotes(JSON.parse(savedNotes));
  }, []);

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add or Update Note
  const handleAddNote = () => {
    if (!noteText.trim()) return;

    if (editingNote) {
      // Update existing note
      setNotes(
        notes.map((note) =>
          note.id === editingNote.id ? { ...note, text: noteText } : note
        )
      );
      setEditingNote(null);
    } else {
      // Add new note
      setNotes([...notes, { id: Date.now(), text: noteText }]);
    }

    setNoteText("");
  };

  // Edit Note
  const handleEdit = (note: Note) => {
    setNoteText(note.text);
    setEditingNote(note);
  };

  // Delete Note
  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#111",
          color: "#FFF",
          padding: 3,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#FFD700",
            textShadow: "1px 1px 4px rgba(255, 215, 0, 0.7)",
          }}
        >
          Note-Taking App
        </Typography>

        {/* Note Input */}
        <TextField
          label="Write a note..."
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            bgcolor: "#222",
            borderRadius: "5px",
            input: { color: "#FFD700" },
            "& .MuiOutlinedInput-root": { borderColor: "#FFD700" },
          }}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />

        {/* Add / Update Button */}
        <Button
          onClick={handleAddNote}
          sx={{
            bgcolor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#E5C100" },
          }}
        >
          {editingNote ? "Update Note" : "Add Note"}
        </Button>

        {/* Notes List */}
        <Paper
          sx={{
            width: "100%",
            mt: 3,
            padding: 2,
            bgcolor: "#222",
            borderRadius: "8px",
          }}
        >
          <List>
            {notes.length > 0 ? (
              notes.map((note) => (
                <ListItem
                  key={note.id}
                  sx={{ borderBottom: "1px solid #FFD700" }}
                >
                  <ListItemText primary={note.text} sx={{ color: "#FFF" }} />
                  <IconButton
                    onClick={() => handleEdit(note)}
                    sx={{ color: "#FFD700" }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(note.id)}
                    sx={{ color: "red" }}
                  >
                    <Delete />
                  </IconButton>
                </ListItem>
              ))
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#FFD700",
                  fontWeight: "bold",
                }}
              >
                No notes yet!
              </Typography>
            )}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default NoteApp;
