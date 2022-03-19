import { Image } from "next/image";
import tw from 'tailwind-styled-components'
import Vercel from '../../public/faceicon.svg'
import styles from '../../styles/Messenger.module.css'

const Messenger: React.FC = () => {

  return (
    <Wrapper>
      <Menu>
        <Vercel className={styles.svgStyle} />
      </Menu>
      <Content>
        <Siderbar>Sidebar</Siderbar>
        <ChatSection>
          <TitleChat>
            Title chat
          </TitleChat>
          <ContentChat>
            nội dung chat
          </ContentChat>
          <InputChat>Enter chat </InputChat>
        </ChatSection>
      </Content>
    </Wrapper>
  );
}


// view root chứa: 
const Wrapper = tw.div`
flex
flex-col
w-full
h-full
`
// 1.thanh menu phía trên
const Menu = tw.div`
flex
space-between
h-[56px]
bg-gray-700
items-center
`
// 2. Content Section
const Content = tw.div`
flex
flex-1
`
//  2.1 Sidebar
const Siderbar = tw.div`
flex
bg-blue-200
min-w-[60px]
`
//  2.2 Messenger section
const ChatSection = tw.div`
flex-1
flex
flex-col

`
//  2.2.1 Title
const TitleChat = tw.div`
bg-red-300
h-[50px]
`
//  2.2.2 Chat show
const ContentChat = tw.div`
flex-1
bg-yellow-400

`
//  2.2.3 Chat input
const InputChat = tw.div`
h-[60px]
bg-green-300
`

export default Messenger;
