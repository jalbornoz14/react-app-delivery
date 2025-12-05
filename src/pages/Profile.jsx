import { HaderProfile } from '../components/profile/Hader'
import { FormUserProfile } from '../components/profile/FormUser'


import "../styles/Profile.css";

export const Profile = () => {
    return (
        <div>
            <HaderProfile></HaderProfile>
            <span className='profile-catergory'>Chasky Balck</span>
            <FormUserProfile></FormUserProfile>
        </div>
    )
}