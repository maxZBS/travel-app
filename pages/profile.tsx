import Layout from '@/common/Layout'
import { NextPageAuth } from '@/types/auth'

const Profile: NextPageAuth = () => {
	return <Layout>Profile</Layout>
}

Profile.isOnlyUser = true

export default Profile
