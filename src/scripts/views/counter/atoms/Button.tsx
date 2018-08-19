import * as React from 'react'

interface IProps {
  label: string
  onPress: () => void
}

const Button = ({ label, onPress }: IProps) => {
  return <button onClick={onPress}>{label}</button>
}

export default Button
