import React, {
  useContext,
  useState,
} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  newUser,
  IMyResponse,
  fetchUserInfo,
  IUserInfo,
  nodes, mintSBT,
} from 'api/user'
import {
  saveUserInfo,
} from 'utils/data'

import { WindmillContext, Input, Label, Button, Dropdown, DropdownItem } from '@roketid/windmill-react-ui'

function CreateAccount() {
  const { mode } = useContext(WindmillContext)
  const router = useRouter()
  const [userName, setUserName] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  const imgSource = mode === 'dark' ? '/assets/img/create-account-office-dark.jpeg' : '/assets/img/create-account-office.jpeg'

  async function signUp({ userName }: { userName: string }) {

    const result = await newUser(userName) as IMyResponse
    if (result.message !== 'success') {
      alert('用户名已注册！')
    }

    const userInfo = await fetchUserInfo(userName) as IUserInfo

    saveUserInfo({ signUserId: userInfo.data.signUserId, address: userInfo.data.address})

    onAccountCreated()
  }

  function onAccountCreated() {
    router.push('/pages/')
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className='mb-16 text-center text-4xl font-bold'>灵魂绑定通证 - SBT</div>
      <div className="h-full w-1/2 mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="relative h-32 md:h-auto md:w-1/2">
            <Image
              aria-hidden="true"
              className="object-cover w-full h-full"
              src={imgSource}
              alt="Office"
              layout='fill'
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-8 text-xl font-semibold text-gray-700 dark:text-gray-200">
                注册账户
              </h1>
              <Label>
                <span>用户名</span>
                <Input
                  className="mt-1"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  type="text"
                  placeholder="请输入用户名"
                />
              </Label>

              <Button
                block
                className="mt-8"
                onClick={() => signUp({ userName })}
              >
                创建账户
              </Button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link href="/pages/login">
                  <a
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    已经有账户了？点此登录
                  </a>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
