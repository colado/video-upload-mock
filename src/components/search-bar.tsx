import { useState } from 'react';

import styles from './button.module.css';
import { Button } from './button';

type SearchBarProps = {
  onSearch: (input: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState('');
  let className = styles.button;

  return (
    <div style={{display: 'flex', marginBottom: 12}}>
      <input onInput={(event) => setValue(event.currentTarget.value)} />
      <Button className={className} onClick={() => onSearch(value)}>Search</Button>
    </div>
  );
};
