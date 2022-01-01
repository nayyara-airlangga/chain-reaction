type FormInputProps = {
  value: any
  placeholder?: string
  name?: string
  type?: "text" | "number"
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({
  placeholder = "",
  name = "",
  value = "",
  type = "text",
  onChange,
}: FormInputProps) => {
  return (
    <input
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      step="0.0001"
      value={value}
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onChange}
    />
  )
}

export { FormInput }
