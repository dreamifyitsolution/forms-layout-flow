import Link from 'next/link';
import React from 'react';

const Login = ({ loginUser }) => {
	return (
		<div>
			<form>
				<div className='flex flex-col mb-4'>
					<label
						htmlFor='email'
						className='text-base font-semibold mb-1 text-gray-600'
					>
						Email Address:
					</label>
					<input
						type='text'
						className='border py-2 px-2'
						placeholder='Enter your email address'
					/>
				</div>
				<div className='flex flex-col mb-4'>
					<label
						htmlFor='email'
						className='text-base font-semibold mb-1 text-gray-600'
					>
						Email Address:
					</label>
					<input
						type='text'
						className='border py-2 px-2'
						placeholder='Enter your email address'
					/>
				</div>
				<div className='mb-4'>
					<Link href={'/'}>
						<a className='underline text-blue-600'>Forgotten your password?</a>
					</Link>
				</div>
				<div className='flex justify-end'>
					<button
						type='submit'
						className='px-6 py-2 bg-blue-600 text-white'
						onClick={loginUser}
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
