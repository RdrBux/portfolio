import { useState } from 'react';

export default function InputContact({
  value,
  type = 'text',
  onChange,
  label,
  required = true,
  name,
}) {
  const [selected, setSelected] = useState(false);

  return (
    <label className="relative">
      <div
        className={`absolute left-4 font-normal text-zinc-800 duration-100 ${
          selected
            ? 'top-1 text-xs text-teal-800'
            : value
            ? 'top-1 text-xs'
            : 'top-3 text-base'
        }`}
      >
        {label}
        {required && '*'}
      </div>
      <input
        className={`h-12 w-full rounded-t bg-zinc-100 pl-4 pt-3 text-base font-normal text-zinc-900 outline-0 ${
          selected
            ? 'border-b-2 border-teal-800 bg-zinc-200'
            : 'border-b border-black'
        }`}
        type={type}
        onFocus={() => setSelected(true)}
        onBlur={() => setSelected(false)}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
    </label>
  );
}
