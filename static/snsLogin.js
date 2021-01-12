const naverService = () => {
  const naverLogin = new window.naver.LoginWithNaverId({
    clientId: 'HoUvgj2DEgzmZ2Fgx8LD',
    callbackUrl: `http://localhost:3000/`,
    isPopup: false,
    loginButton: {
      color: 'white',
      type: 1,
      height: 60,
    },
  })
  const setNaver = () => {
    naverLogin.init()
  }
  return {
    setNaver,
  }
}
const kakaoService = () => {
  window.Kakao.init('5f8ce5eaa37066037c95cb977b9355f4')
  window.Kakao.isInitialized()
}

module.exports = { naverService, kakaoService }
