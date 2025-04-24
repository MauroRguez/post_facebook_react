import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment(""); // Limpiar el campo de texto
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Escribe un comentario..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Agregar Comentario
      </button>
    </form>
  );
};

export default CommentForm;
