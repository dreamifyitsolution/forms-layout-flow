import Link from 'next/link';
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthScreen = ({ loginUser, userEmail, logoutUser }) => {
	const [activeComp, setActiveComp] = useState('guest');

	return (
		<div className='border rounded-md mb-5'>
			<div className='bg-gray-300 px-4 py-2'>
				<h2 className='text-xl font-semibold'>Login</h2>
			</div>
			<div className='px-4 py-4'>
				{userEmail === '' ? (
					<>
						<div>
							<button
								onClick={() => setActiveComp('guest')}
								className={`px-6 py-2  ${
									activeComp === 'guest' ? 'border border-b-0' : 'border-b'
								}`}
							>
								Guest Login
							</button>
							<button
								onClick={() => setActiveComp('login')}
								className={`px-6 py-2 ${
									activeComp === 'login' ? 'border border-b-0' : 'border-b'
								}`}
							>
								Login
							</button>
						</div>
						<div className='pt-5'>
							{activeComp === 'login' && <Login loginUser={loginUser} />}
							{activeComp === 'guest' && <Register />}
						</div>
					</>
				) : (
					<>
						<div className='flex justify-between items-center'>
							<span>{userEmail}</span>
							<button
								className='bg-gray-700 text-white px-4 py-1'
								onClick={logoutUser}
							>
								Logout
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default AuthScreen;
