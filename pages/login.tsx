import Link from 'next/link'

export default function Login () {
    return (
    
        <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
            <div className="card bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label  className="block mt-10 text-3xl text-gray-700 text-center font-semibold">
                Login
              </label>
              <form method="#" action="#" className="mt-10">
                <div>
                  <input type="email" placeholder="Email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div className="mt-7">                
                  <input type="password" placeholder="Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />                           
                </div>
                <div className="mt-7 flex">
                  <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                   
                  </label>
                  <div className="w-full text-right">     
                    <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                      Lupa password? Klik disini
                    </a>                                  
                  </div>
                </div>
                <div className="mt-7">
                  <button className="bg-gradient-to-r from-blue-400 to-indigo-500 w-full  py-3 rounded-md text-xl text-gray-100 shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Login
                  </button>
                </div>
               
               
                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="w-full text-sm text-gray-600">Belum punya akun ?</label>
                    <Link href="/register">
                    <a href="#" className="mx-5 text-right w-full text-blue-600 font-semibold transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Daftar disini
                    </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    )
}