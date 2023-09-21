import { memo } from 'react';

export default memo(function AddButton({ text, onClick }) {
  console.count('AddButton render');
  return (
    <button
      className="form-btn"
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
});
