'use client'

import { useTranslation } from '@/context/TranslationContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import LanguageSwitcherFullName from '../LanguageAuth'

export default function SavePassword() {
	const { t } = useTranslation()

	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			alert('Parollar mos emas!')
			return
		}

		console.log('Password:', password)
	}

	return (
		<div className='w-full flex items-center justify-center flex-col'>
			<form
				onSubmit={handleSubmit}
				className='w-[405px] max-[800px]:w-[355px] max-[800px]:p-[20px] max-[768px]:w-[377px] max-[768px]:p-0 p-8 space-y-4'
			>
				<h1 className='text-white text-[23.31px] mb-[35px] font-bold leading-[28.8px]'>
					{t('auth_save_password_title')}
				</h1>

				<div className='space-y-1'>
					<label className='text-[15px] font-medium text-[rgba(248,248,249,0.7)]'>
						{t('new_password')}
					</label>
					<div className='relative mt-[8px]'>
						<Input
							type={showPassword ? 'text' : 'password'}
							placeholder={t('new_password_placeholder')}
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='bg-white text-black pr-10 w-full h-[48px]'
						/>
						<button
							type='button'
							onClick={() => setShowPassword(!showPassword)}
							className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500'
						>
							{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
						</button>
					</div>
				</div>

				<div className='space-y-1'>
					<label className='text-[15px] font-medium text-[rgba(248,248,249,0.7)]'>
						{t('confirm_password')}
					</label>
					<div className='relative mt-[8px]'>
						<Input
							type={showConfirmPassword ? 'text' : 'password'}
							placeholder={t('confirm_password_placeholder')}
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
							className='bg-white text-black pr-10 w-full h-[48px]'
						/>
						<button
							type='button'
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500'
						>
							{showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
						</button>
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
