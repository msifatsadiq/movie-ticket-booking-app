import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"

const AdminNavbar = () => {
    return (
        <div>
            <Link to='/'>
                <img src={assets.getticketLogo} alt="" className="w-52 h-auto" />
            </Link>
        </div>
    )
}

export default AdminNavbar