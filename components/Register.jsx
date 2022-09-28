import Link from 'next/link';
import React from 'react';

const Register = () => {
	return (
		<form action=''>
			<div className='flex flex-col md:flex-row -mx-3'>
				<div className='w-full md:w-1/2 px-3'>
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							First Name:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your first name'
						/>
					</div>
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							Last Name:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your Last name'
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
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							Password:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your Password'
						/>
					</div>
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							Confirm Password:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your Confirm Password'
						/>
					</div>
				</div>
				<div className='w-full md:w-1/2 px-3'>
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							Contact Telephone:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your contact telephone'
						/>
					</div>
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							Company Name:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your Company Name'
						/>
					</div>
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							Address Line 1:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your Address Line 1'
						/>
					</div>
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							Address Line 2:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your Address Line 2'
						/>
					</div>
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							Town/City:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your Town/City'
						/>
					</div>
					<div className='flex flex-col mb-4'>
						<label
							htmlFor='email'
							className='text-base font-semibold mb-1 text-gray-600'
						>
							Postcode:
						</label>
						<input
							type='text'
							className='border py-2 px-2'
							placeholder='Enter your Postcode'
						/>
					</div>
				</div>
			</div>

			<div className='flex justify-end'>
				<button className='px-6 py-2 bg-blue-600 text-white'>Register</button>
			</div>
		</form>
	);
};

export default Register;
