interface InputProps extends React.ComponentPropsWithoutRef<'input'> {

}
 
export default function GenericInput({ ...rest }: InputProps) {
  return <input {...rest}/>
}