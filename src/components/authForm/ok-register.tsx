'use client'

import { useTranslation } from '@/context/TranslationContext'
import Image from 'next/image'
import Link from 'next/link'
import LanguageSwitcherFullName from '../LanguageAuth'

export default function RegisterOk() {
	const { t } = useTranslation()

	return (
		<div className="w-full min-h-screen flex items-center justify-center px-4">
			<div className="w-full max-w-[405px] max-[420px]:max-w-full max-[420px]:p-0 bg-transparent p-6 sm:p-8 rounded-lg flex flex-col items-center text-center space-y-6">
				<Image
					src="/ok-photo.png"
					alt="success"
					width={120}
					height={108}
					className="w-[100px] h-[90px] sm:w-[120px] sm:h-[108px]"
				/>

				<h1 className="text-white text-[22px] sm:text-[23.31px] font-bold leading-tight">
					{t('registration_success')}
				</h1>

				<p className="text-[15px] sm:text-[16px] font-normal leading-[24px] text-[rgba(230,237,243,1)]">
					{t('auth_otp_reminder')}
				</p>

				<Link
					href="#"
					className="w-full h-[48px] text-[15px] font-medium text-white bg-[rgba(63,156,251,1)] hover:bg-[#3fb0fb] rounded-[10px] flex items-center justify-center transition duration-200"
				>
					{t('auth_go_home')}
				</Link>

				<LanguageSwitcherFullName />
			</div>
		</div>
	)
}
