import tw from 'tailwind-styled-components'

const Test: React.FC = () => {
  return (
    <Wrapper>
      <Title>
      TEST
    </Title>
      <Button>Click</Button>
    </Wrapper>
  );
}

const Wrapper = tw.div`
w-full
h-full
bg-transparent 
flex

flex-col
`
const Title = tw.p`
text-3xl
text-gray-200
text-center
`

const Button = tw.button`
bg-red-500 hover:bg-red-700
py-2
px-5
text-white
`

export default Test;
