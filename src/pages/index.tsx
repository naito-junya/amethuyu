import { styled } from 'linaria/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <Title>タイトルタイトルタイトルタイトル</Title>
}

const Title = styled.h1`
  color: #f15f79;
`

export default Home
