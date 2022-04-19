import { useState } from "react"

const EmailInput: React.FC<{
  onChange: (event: string) => void
  value: string
}> = ({ onChange }) => {
  const onChangeHandler = (event: React.SyntheticEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }

  return <input onChange={onChangeHandler} type="email" />
}

const ProxyComponent = () => {
  const [inputValue, setInputValue] = useState("")

  const onClickHandler = (value: string) => {
    setInputValue(value)
  }

  return (
    <div>
      <EmailInput onChange={onClickHandler} value={inputValue} />
    </div>
  )
}

export default ProxyComponent
