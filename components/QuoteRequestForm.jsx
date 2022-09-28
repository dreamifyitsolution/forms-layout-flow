import React, { useEffect, useState } from 'react';
import data from '../utils/data';

const QuoteRequestForm = ({ loggedUser }) => {
	const [selectedProduct, setSelectedProduct] = useState('');
	const [activeData, setActiveData] = useState(null);

	useEffect(() => {
		const res = data.filter((item) => item.id === +selectedProduct);
		setActiveData(res[0]);
	}, [selectedProduct]);

	const handleProductChange = (e) => {
		setSelectedProduct(e.target.value);
	};

	return (
		<div className='border rounded-md mb-5'>
			<div className='bg-gray-300 px-4 py-2'>
				<h2 className='text-xl font-semibold'>Quote Request</h2>
			</div>
			{loggedUser && (
				<div className='px-4 py-4'>
					<div className='flex flex-wrap justify-start items-center pb-5 mb-5 border-b-2 border-dotted'>
						<div className='w-2/4 md:w-1/3 flex items-center'>
							<label htmlFor='customSize' className='text-gray-600'>
								Custom Size
							</label>
							<input
								type='checkbox'
								name='customSize'
								id='customSize'
								className='mb-0 ml-5'
							/>
						</div>
						<div className='w-2/4 md:w-1/3 flex items-center'>
							<label htmlFor='customSize' className='text-gray-600'>
								Custom Quantity
							</label>
							<input
								type='checkbox'
								name='customSize'
								id='customSize'
								className='mb-0 ml-5'
							/>
						</div>
						<div className='w-2/4 md:w-1/3 flex items-center'>
							<label htmlFor='customSize' className='text-gray-600'>
								Banding
							</label>
							<input
								type='checkbox'
								name='customSize'
								id='customSize'
								className='mb-0 ml-5'
							/>
						</div>
					</div>

					<div className='flex flex-wrap -mx-3'>
						<div className='w-full md:w-1/2 px-3'>
							<div className='flex flex-row items-center  mb-4'>
								<label htmlFor='product' className='w-1/3 mb-1 text-gray-600 '>
									Product
								</label>
								<select
									className='form-control w-2/3 px-2 py-2 focus:outline-none border rounded-md'
									id='selectedDropdownOption'
									value={selectedProduct}
									onChange={handleProductChange}
								>
									<option disabled='' value='' id='defaultOption'>
										Please select a product
									</option>
									{data.map((item, key) => (
										<option
											key={key}
											disabled=''
											value={item.id}
											id='defaultOption'
										>
											{item.name}
										</option>
									))}
								</select>
							</div>
							{activeData && activeData.finishedSize && (
								<div className='flex flex-row items-center  mb-4'>
									<label htmlFor='product' className='w-1/3 mb-1 text-gray-600'>
										Finished Size
									</label>
									<select
										className='form-control w-2/3 px-2 py-2 focus:outline-none border rounded-md'
										id='selectedDropdownOption'
									>
										<option disabled='' value='0' id='defaultOption'>
											Please select a product
										</option>
										{activeData.finishedSize.map((item, key) => (
											<option value={item.name} id='defaultOption' key={key}>
												{item.name}
											</option>
										))}
									</select>
								</div>
							)}

							{activeData && activeData.delivery && (
								<div className='flex flex-row items-center  mb-4'>
									<label htmlFor='product' className='w-1/3 mb-1 text-gray-600'>
										Delivery
									</label>
									<select
										className='form-control w-2/3 px-2 py-2 focus:outline-none border rounded-md'
										id='selectedDropdownOption'
									>
										<option disabled='' value='0' id='defaultOption'>
											Please select a product
										</option>
										{activeData.delivery.map((item, key) => (
											<option value={item.name} id='defaultOption' key={key}>
												{item.name}
											</option>
										))}
									</select>
								</div>
							)}
						</div>
						<div className='w-full md:w-1/2 px-3'>
							<div className='flex flex-row items-center  mb-4'>
								<label htmlFor='product' className='w-1/3 mb-1 text-gray-600'>
									Product Marketing Name
								</label>
								<select
									className='form-control w-2/3 px-2 py-2 focus:outline-none border rounded-md'
									id='selectedDropdownOption'
								>
									<option disabled='' value='0' id='defaultOption'>
										Please select a product
									</option>
									{activeData &&
										activeData.marketingName.map((item, key) => (
											<option value={item.name} id='defaultOption' key={key}>
												{item.name}
											</option>
										))}
								</select>
							</div>
						</div>
					</div>
					<div className='border-b-2 border-dotted border-gray-400 pb-4 mb-4'>
						<textarea
							name=''
							id=''
							rows='5'
							className='w-full border focus:outline-none p-2 rounded-md'
						></textarea>
					</div>
					<div className='flex justify-end'>
						<button className='px-6 py-2 bg-blue-600 text-white'>
							Send Quote
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default QuoteRequestForm;
