import { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from '@/types/auth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	const { data, status } = useSession()
	const { replace, pathname } = useRouter()

	const Children = () => <>{children}</>

	if (status === 'loading') return null

	if (data) return <Children />

	if (isOnlyUser) {
		pathname !== '/auth' && replace('/auth')
		return null
	}
}

export default CheckRole
