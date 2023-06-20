import { AxiosResponse } from 'axios'
import { reqUser, reqContract } from 'utils/request'
import { Buffer } from 'buffer'

export interface IMyResponse extends AxiosResponse {
  message: string
}

export interface IUserInfo extends AxiosResponse {
  message: string
  data: {
    signUserId: string
    address: string
    nodeType: string
  }
}


const payload = {
  "groupId": 1,
  "contractName": "StudySBT",
  "contractPath": "/StudySBT",
  "version": "",
  "funcName": "mintSBT",
  "contractAddress": "0xbc39251a9b243be08c076fe7ae181ac086907e24",
  "contractAbi": [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Locked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Unlocked","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"finishClass","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"finishClassLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_classId","type":"uint8"},{"internalType":"uint8","name":"_levelIndex","type":"uint8"}],"name":"finishLearnClass","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8","name":"_classId","type":"uint8"}],"name":"getClassLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getFinishClass","outputs":[{"internalType":"uint8[]","name":"","type":"uint8[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8","name":"_classId","type":"uint8"}],"name":"getFinishClassLevel","outputs":[{"internalType":"uint8[]","name":"","type":"uint8[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"isStartClass","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"locked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintSBT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_classId","type":"uint8"}],"name":"startLearnClass","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"studyClassLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
  "useAes": false,
  "useCns": false,
  "cnsName": ""
}

const interact = (
  signUserId: string,
  funcName: string, 
  ...funcParams: Array<string | string[] | number>
) => {
  return reqContract.post('/trans/handleWithSign', {
    ...payload,
    signUserId,
    funcName,
    ...(funcParams.length > 0) && {
      funcParam: funcParams,
    },
  })
}

export const newUser = (signUserId: string, appId = 'test') =>
  reqUser.get('/user/newUser', {
    params: {
      signUserId,
      appId,
    },
  })

export const fetchUserInfo = (signUserId: string) => {
  return reqUser.get(`/user/${signUserId}/userInfo`)
}

export const sign = (signUserId: string, encodedDataStr: string) => {
  encodedDataStr = Buffer.from(encodedDataStr).toString('hex')

  return reqUser.post(`/sign`, {
    signUserId,
    encodedDataStr,
  })
}

// ----- 与合约交互 begin -----
// 用户注册 mintSBT
export const mintSBT = (signUserId: string) => {
  return interact(signUserId, 'mintSBT')
}

// 开始学习课程
export const startLearnClass = (signUserId: string, classId: number) => {
  return interact(signUserId, 'startLearnClass', classId)
}

// 完成章节
export const finishLearnClass = (signUserId: string, classId: number, level: number) => {
  return interact(signUserId, 'finishLearnClass',classId, level)
}

// 查看学习的所有课程
export const getFinishClass = (signUserId: string,userAddr: string) => {
  return interact(signUserId, 'getFinishClass',userAddr)
}

// 获取用户所学习课程课时
export const getFinishClassLevel = (signUserId: string,userAddr: string, classId: number) => {
  return interact(signUserId, 'getFinishClassLevel',userAddr,classId)
}

// 获取课程已学课时总数
export const getStudyClassLevel = (signUserId: string, userAddr: string, classId: number) => {
  return interact(signUserId, 'studyClassLevel',userAddr,classId)
}

// 获取TokenURI
export const getTokenURI = (signUserId: string, tokenId: number) => {
  return interact(signUserId, 'tokenURI', tokenId)
}

// 获取用户的SBT（即tokenId）
export const getUserSBT = (signUserId: string, userAddr: string) => {
  return interact(signUserId, 'userToken', userAddr) 
}


// ----- end 与合约交互 ----- 
export const isRegistered = (signUserId: string, addr: string) => {
  return interact(signUserId, 'isRegister', addr)
}


export const getAllNode = () => {
  return interact('admin', 'getAllNode')
}

export const nodes = (signUserId: string, addr: string) =>{
  return interact(signUserId, 'nodes', addr)
}
