import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import myImage from '../../../contents/assets/profile.png'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.


const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={myImage} alt="Profile Image" />
}

export default ProfileImage
