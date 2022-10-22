import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
          <Link href="/"><img className="cursor-pointer w-44" src="https://links.papareact.com/yvf" alt=""/></Link>
          <div className="hidden md:inline-flex items-center space-x-5">
            <h3 className="cursor-pointer hover:text-green-600 ease-in-out duration-300">About</h3>
            <h3 className="cursor-pointer hover:text-green-600 ease-in-out duration-300">Contact</h3>
            <h3 className="cursor-pointer text-white bg-green-600 px-4 py-1 rounded-full hover:bg-green-700 ease-in-out duration-300">Follow</h3>
          </div>
        </div>

        <div className="flex items-center text-green-600 space-x-5">
          <h3 className="cursor-pointer hover:text-green-700 ease-in-out duration-300">Sign up</h3>
          <h3 className="cursor-pointer border border-green-600 px-4 py-1 rounded-full hover:bg-green-600 hover:text-white ease-in-out duration-300">Get started!</h3>
        </div>
    </header>
  )
}

export default Header