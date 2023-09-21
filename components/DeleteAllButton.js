import { memo } from 'react';

export default memo(function DeleteAllButton({
  text,
  onClick,
}) {
  console.count('DeleteAllButton render');
  return (
    <button
      className={'del-complited-btn'}
      onClick={onClick}
    >
      {text}
    </button>
  );
});
