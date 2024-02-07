
function App() {
  return (
    <>
      <div class="h-screen w-full bg-gray-100 flex flex-col gap-5 justify-center items-center">
        <div>
          <h1 className=" text-5xl font-bold text-blue-600 cursor-default">facebook</h1>
        </div>
        <div class="bg-white w-[412px] h-[310px] rounded-lg shadow-lg">
          <form>
            <div className="flex flex-col justify-center items-center py-6 gap-3">
              <div>
                <h2 className="text-xl cursor-default pb-3"> Log in to Facebook</h2>
              </div>
              <div className="form-control">
                <input type="email" placeholder="Email address or phone number" className="input input-bordered w-[380px] focus:outline-none placeholder-gray-500 placeholder-opacity-600 focus:placeholder-gray-400" required />
              </div>
              <div className="form-control">
                <input type="password" placeholder="Password" className="input input-bordered w-[380px] focus:outline-none placeholder-gray-500 placeholder-opacity-500 focus:placeholder-gray-400" required />
              </div>
              <div>
                <button className="btn w-[380px] bg-blue-500 text-2xl text-white hover:bg-blue-600"> Log in </button>
              </div>
              <div className="flex gap-2 text-blue-600">
                <a href="#" className="hover:underline">Forgotten account?</a>
                <a href="#" className="hover:underline">Sign Up for facebook </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
