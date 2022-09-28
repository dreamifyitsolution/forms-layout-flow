import React from 'react';

const QuoteRequestForm = ({ loggedUser }) => {
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
					<form action='' className='text-sm'>
						<div className='flex flex-wrap -mx-3'>
							<div className='w-full md:w-1/2 px-3'>
								<div className='flex flex-row items-center  mb-4'>
									<label
										htmlFor='product'
										className='w-1/3 mb-1 text-gray-600 '
									>
										Product
									</label>
									<select
										class='form-control w-2/3 px-2 py-2 focus:outline-none border rounded-md'
										id='selectedDropdownOption'
										onchange='dropDownOptionChange(this, true);'
									>
										<option
											disabled=''
											value='0'
											selected=''
											id='defaultOption'
										>
											Please select a product
										</option>
										<option value='29'>AddOnProduct, AddOnProduct</option>
										<option value='35'>Booklets, Booklets</option>
										<option value='36'>Booklets, K-Bind Booklets</option>
										<option value='37'>Booklets, Lockbound Booklets</option>
										<option value='6'>Booklets, Perfect Bound Booklets</option>
										<option value='1'>Booklets, Stapled Booklets</option>
										<option value='34'>Booklets, Thread Sewn Booklets</option>
										<option value='12'>Booklets, Wiro Bound Booklets</option>
										<option value='9'>
											Business Cards, Standard Business Cards
										</option>
										<option value='25'>Calendars, Calendars</option>
										<option value='23'>Flags, Flags</option>
										<option value='11'>Flat/Fold, Large</option>
										<option value='32'>Flat/Fold, POS</option>
										<option value='7'>Flat/Fold, Small</option>
										<option value='31'>Mugs, Mugs</option>
										<option value='24'>Notebooks, Notebooks</option>
										<option value='33'>Packaging, Packaging</option>
										<option value='28'>PPE, Visors and Protection</option>
										<option value='14'>
											Presentation Folders, Presentation Folders
										</option>
										<option value='16'>
											Stickers and Labels, Stickers and Labels
										</option>
										<option value='27'>Tshirts, Tshirts</option>
										<option value='13'>
											Unbranded Samples, Unbranded Samples
										</option>
										<option value='15'>
											Unfinished Sheets, Unfinished Sheets
										</option>
										<option value='17'>
											Wide Format &amp; Display, A-Frames
										</option>
										<option value='19'>
											Wide Format &amp; Display, Exhibition Pop-Ups
										</option>
										<option value='30'>Wide Format &amp; Display, POS</option>
										<option value='21'>
											Wide Format &amp; Display, PVC Banners
										</option>
										<option value='18'>
											Wide Format &amp; Display, Roller Banners
										</option>
									</select>
								</div>
							</div>
							<div className='w-full md:w-1/2 px-3'>
								<div className='flex flex-row items-center  mb-4'>
									<label htmlFor='product' className='w-1/3 mb-1 text-gray-600'>
										Product Marketing Name
									</label>
									<select
										class='form-control w-2/3 px-2 py-2 focus:outline-none border rounded-md'
										id='selectedDropdownOption'
										onchange='dropDownOptionChange(this, true);'
									>
										<option
											disabled=''
											value='0'
											selected=''
											id='defaultOption'
										>
											Please select a product
										</option>
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
					</form>
				</div>
			)}
		</div>
	);
};

export default QuoteRequestForm;
