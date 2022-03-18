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
w-1/3
h-1/3
bg-transparent 
p-8
sm:bg-red-200
md:bg-red-500
lg:bg-red-700
xl:bg-red-900
2xl:bg-green-500
flex

flex-col
`
const Title = tw.p`
text-3xl
text-gray-200
text-center
`

const Button = tw.button`
bg-blue-500 hover:bg-blue-700
min-w-[120px]
rounded
py-2
px-5
text-white
`

export default Test;
