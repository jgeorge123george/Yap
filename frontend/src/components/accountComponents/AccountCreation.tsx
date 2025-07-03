import { useAccountForm } from '../../hooks/useAccountForm.tsx';



export default function AccountCreation() {
    

  const {
  email, setEmail,
  passwordOne, setPasswordOne,
  passwordTwo, setPasswordTwo,
  handleSubmit
} = useAccountForm();
 

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Enter Details</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-base text-gray-400">
              Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="passwordOne" className="text-base text-gray-400">
              Password
            </label>
            <input
              type="password"
              value={passwordOne}
              onChange={(e) => setPasswordOne(e.target.value)}
              className="w-full mt-1 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="passwordTwo" className="text-base text-gray-400">
              Enter Password Again
            </label>
            <input
              type="password"
              value={passwordTwo}
              onChange={(e) => setPasswordTwo(e.target.value)}
              className="w-full mt-1 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
