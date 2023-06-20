interface IUserInfo {
  signUserId: string
  address: string
}

export function saveUserInfo(userInfo: IUserInfo) {
  localStorage.setItem('signUserId', userInfo.signUserId)
  localStorage.setItem('address', userInfo.address)
}
