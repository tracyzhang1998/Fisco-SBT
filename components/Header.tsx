import { useContext, useEffect, useState } from 'react'
import SidebarContext from 'context/SidebarContext'
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from 'icons'
import { Avatar, Button, Badge, Input, Dropdown, DropdownItem, WindmillContext } from '@roketid/windmill-react-ui'
import { useRouter } from 'next/router'
import { getTokenURI, getUserSBT, mintSBT } from 'api/user'

function Header() {
  const { mode, toggleMode } = useContext(WindmillContext)
  const { toggleSidebar } = useContext(SidebarContext)

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const [isMintSBT, setIsMintSBT] = useState(false)
  const [tokenURI, setTokenURI] = useState('')

  const router = useRouter()

  useEffect(() => {
    setUserName(localStorage.getItem('signUserId')!)
    getUserTokenURI() 
  }, [])

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  // mint SBT
  async function toMintSBT() {
      alert('稍等片刻，你将会收到一个SBT灵魂小机器人通证！')
      await mintSBT(localStorage.getItem('signUserId')!)
      setIsMintSBT(true)

      // 获取用户的SBT
      getUserTokenURI()
  }

  // 获取用户的SBT
  async function getUserTokenURI() {
      const tokenIdTmp = await getUserSBT(localStorage.getItem('signUserId')!, localStorage.getItem('address')!) as any
      const tokenId = JSON.parse(tokenIdTmp)
      console.log("tokenId:", tokenId)
      setIsMintSBT(tokenId !== 0)

      // 获取tokenId的tokenURI
      const tokenURI = await getTokenURI(localStorage.getItem('signUserId')!, tokenId) as any
      console.log("tokenURI:", tokenURI)
      setTokenURI(tokenURI) 
  }

  function logOut() {
    localStorage.removeItem('signUserId')
    localStorage.removeItem('address')
    localStorage.removeItem('nodeType')
    localStorage.removeItem('isRegister')
    router.push('/pages/login')
  }

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            {/* <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for projects"
              aria-label="Search"
            /> */}
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">

        <li className="flex">
          {isMintSBT ?
          <img src={tokenURI} width={30} height={30} />
          :
          <Button
              onClick={() => toMintSBT()}
          >
            获取灵魂通证
          </Button>
          }
          </li>
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          {/* <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              <!-- Notification badge -->
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Messages</span>
                <Badge type="danger">13</Badge>
              </DropdownItem>
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Sales</span>
                <Badge type="danger">2</Badge>
              </DropdownItem>
              <DropdownItem onClick={() => alert('Alerts!')}>
                <span>Alerts</span>
              </DropdownItem>
            </Dropdown>
          </li> */}
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <Avatar
                className="align-middle"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#">
                <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>{userName}</span>
              </DropdownItem>
              {/* <DropdownItem tag="a" href="#">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem> */}
              <DropdownItem onClick={logOut}>
                <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
