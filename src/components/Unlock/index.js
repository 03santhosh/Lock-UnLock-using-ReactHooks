import {useState} from 'react'

import {
  MainContainer,
  LockImageContainer,
  LockImage,
  LockText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setisLocked] = useState(true)
  const onClickLockBtn = () => setisLocked(prevState => !prevState)

  const lockImgUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const lockImgAltText = isLocked ? 'lock' : 'unlock'
  const lockText = isLocked
    ? 'Your device is Locked'
    : 'Your device is Unlocked'
  const lockButtonText = isLocked ? 'Unlock' : 'Lock'
  return (
    <MainContainer>
      <LockImageContainer>
        <LockImage src={lockImgUrl} alt={lockImgAltText} />
        <LockText>{lockText} </LockText>
      </LockImageContainer>
      <LockButton type="button" onClick={onClickLockBtn}>
        {lockButtonText}
      </LockButton>
    </MainContainer>
  )
}

export default Unlock
