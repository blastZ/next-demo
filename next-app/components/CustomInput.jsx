import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function({ id, label, styles, placeholder = '', value, onChange, error, endAdornment, type }) {
  return (
    <TextField
      error={error}
      required
      id={id}
      label={label}
      style={{ marginBottom: 32, ...styles }}
      placeholder={placeholder}
      fullWidth
      margin="normal"
      InputProps={{
        endAdornment,
        type
      }}
      InputLabelProps={{
        shrink: true
      }}
      value={value}
      onChange={onChange}
    />
  );
}
