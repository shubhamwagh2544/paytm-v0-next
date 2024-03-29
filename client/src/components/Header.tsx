import { Link, useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    function handleLogin() {
        navigate("/signin")
    }

    return (
        <div className="bg-purple-700 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-bold tracking-tight text-white"
                >
                    TigerPay <span className="text-sm">made with ❤️</span>
                </Link>
                {
                    token ? (
                        <div>
                            <div className="flex gap-5">
                                <button
                                    className="text-lg font-semibold bg-purple-700 text-white"
                                    onClick={() => {
                                        navigate("/dashboard")
                                    }}
                                >
                                    Dashboard
                                </button>
                                <button
                                    className="text-lg font-semibold bg-purple-700 text-white"
                                    onClick={() => {
                                        navigate("/profile")
                                    }}
                                >
                                    Profile
                                </button>
                                <button
                                    className="text-lg font-semibold bg-purple-700 text-white"
                                    onClick={() => {
                                        localStorage.removeItem('token')
                                        navigate("/")
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>

                    ) : (
                        <div className="flex gap-5">
                            <button
                                className="text-lg font-semibold bg-purple-700 text-white"
                                onClick={() => navigate("/about")}
                            >
                                About
                            </button>
                            <button
                                className="text-lg font-semibold bg-purple-700 text-white"
                                onClick={handleLogin}
                            >
                                Sign In
                            </button>
                        </div>
                    )
                }
            </div>
        </div >
    )
}