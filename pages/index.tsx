import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Test from '../components/Test'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Uber next app clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Wrapper>
{/*      <Map>
        MAP
      </Map>
      <ActionItems>
        START
      </ActionItems>
*/}
        <Test />
    </Wrapper>  
  </>
  )
}

const Wrapper = tw.div`
bg-sky-500
h-screen
flex
//flex-col
items-center
justify-center
`

const Map = tw.div`
bg-blue-300
flex-1
`

const ActionItems = tw.div`
bg-red-300
flex-1
`

export default Home
