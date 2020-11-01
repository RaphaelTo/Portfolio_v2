import React from 'react';

const tuplesType = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

const Input = ({ type = 'text', textarea = false, className, valueInput, onChangeInput, name }) => {
  const checkType = tuplesType.includes(type) ? type : 'text';

  return (
    <>
      {textarea ? (
        <textarea
          cols="30"
          rows="10"
          className={className}
          value={valueInput}
          onChange={onChangeInput}
          name={name}
        />
      ) : (
        <input
          type={checkType}
          className={className}
          value={valueInput}
          onChange={onChangeInput}
          name={name}
        />
      )}
    </>
  );
};

export default Input;
