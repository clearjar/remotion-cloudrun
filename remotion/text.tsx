interface TextProps {
  text: string;
}

export const Text = ({ text }: TextProps) => {
  return (
    <p
      style={{
        color: 'white',
        fontSize: 100,
        textAlign: 'center',
        padding: '20%',
      }}
    >{text}</p>
  )
};