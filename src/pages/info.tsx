import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`

const TextStyle = css`
  * {
    font-size: 50px;
    font-weight: 700;
    background-color: black;
    color: red;
  }
`

const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: red;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}))

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
      <Link to="/">To Main</Link>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
