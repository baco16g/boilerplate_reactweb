import React, { MouseEvent } from 'react'

interface Props {
  label: string
  onPress: (event: MouseEvent) => void
}

const Button = ({ label, onPress }: Props) => {
  return <button onClick={onPress}>{label}</button>
}

export default Button
