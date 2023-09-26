import React from "react";

export const InputTodos = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div className="input-area">
      <input
        disabled={disabled}
        id="add-text"
        placeholder="todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
