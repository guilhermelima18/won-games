import { Label, Wrapper } from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

export const Checkbox = ({ label, labelFor = '', labelColor = 'white' }: CheckboxProps) => {
  return (
    <Wrapper>
      <input id={labelFor} type="checkbox" />
      {!!label && <Label labelColor={labelColor} htmlFor={labelFor}>{label}</Label>}
    </Wrapper>
  )
}
