'use client'

import { useTranslation } from '@/context/TranslationContext'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'react-phone-input-2/lib/bootstrap.css'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function SaveNumber() {
	const { t } = useTranslation()
	const [phone, setPhone] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!phone) {
			alert('Iltimos, telefon raqamingizni kiriting.')
			return
		}

		console.log('Yuborilgan raqam:', phone)
	}

	return (
		<div className='w-full flex items-center justify-center'>
			<form onSubmit={handleSubmit} className='w-[377px] max-[800px]:w-[355px] max-[800px]:p-[20px] max-[768px]:w-[377px] max-[768px]:p-0 p-8 space-y-4'>
				<h1 className='text-white text-[23.31px] mb-[35px] font-bold leading-[28.8px]'>
					{t('auth_save_number_title')}
				</h1>

				<p className='text-[15px] font-medium leading-[5px] text-[rgba(248,248,249,0.7)]'>
					{t('phone_number')}
				</p>

				<PhoneInput
					country={'uz'}
					value={phone}
					onChange={setPhone}
					inputStyle={{
						width: '100%',
						height: '48px',
						borderRadius: '8px',
						border: '1px solid #ccc',
					}}
					buttonStyle={{
						borderTopLeftRadius: '8px',
						borderBottomLeftRadius: '8px',
					}}
					containerStyle={{ width: '100%' }}
					enableSearch
					preferredCountries={['uz', 'ru', 'kz', 'tr']}
				/>

				<Button
					type='submit'
					className='w-full h-[48px] text-[15px] font-medium text-[rgba(255,255,255,1)] cursor-pointer bg-[rgba(63,156,251,1)] hover:bg-[#3fb0fb]'
				>
					{t('auth_submit_button')}
				</Button>
			</form>
		</div>
	)
}
