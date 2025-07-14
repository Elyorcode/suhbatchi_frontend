'use client'

import { useTranslation } from '@/context/TranslationContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import LanguageSwitcherFullName from '../LanguageAuth'

export default function EnterOtpCode() {
	const { t } = useTranslation()
	const [otp, setOtp] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (otp.trim().length === 0) {
			alert('Iltimos, OTP kodni kiriting!')
			return
		}

		console.log('OTP:', otp)
	}

	return (
		<div className='w-full flex items-center justify-center flex-col'>
			<form
				onSubmit={handleSubmit}
				className='w-[405px] max-[800px]:w-[355px] max-[800px]:p-[20px] max-[768px]:w-[377px] max-[768px]:p-0 p-8 space-y-4'
			>
				<h1 className='text-white text-[23.31px] mb-[35px] font-bold leading-[28.8px]'>
					{t('auth_otp_title')}
				</h1>

				<div className='space-y-1'>
					<label className='text-[15px] font-medium text-[rgba(248,248,249,0.7)]'>
						{t('otp_code')}
					</label>
					<div className='mt-[8px]'>
						<Input
							type='text'
							placeholder={t('otp_code_placeholder')}
							value={otp}
							onChange={e => setOtp(e.target.value)}
							className='bg-white text-black w-full h-[48px]'
							inputMode='numeric'
							pattern='[0-9]*'
						/>
					</div>
				</div>

				<Button
					type='submit'
					className='w-full h-[48px] text-[15px] cursor-pointer font-medium text-white bg-[rgba(63,156,251,1)] hover:bg-[#3fb0fb]'
				>
					{t('auth_submit_button')}
				</Button>
			</form>

			<LanguageSwitcherFullName />
		</div>
	)
}
