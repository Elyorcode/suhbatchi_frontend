'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from '@/context/TranslationContext'
import type { Lang } from '@/context/TranslationContext'

import gbFlag from '../../public/flags/gb.svg'
import ruFlag from '../../public/flags/ru.svg'
import uzFlag from '../../public/flags/uz.svg'
import Image from 'next/image'

export default function LanguageSwitcherFullName() {
	const { locale, setLocale } = useTranslation()
	const [open, setOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const languages: { code: Lang; name: string; flag: string }[] = [
		{ code: 'uz', name: 'Uzbekistan', flag: uzFlag },
		{ code: 'ru', name: 'Russia', flag: ruFlag },
		{ code: 'en', name: 'England', flag: gbFlag },
	]

	const currentLang =
		languages.find(lang => lang.code === locale) || languages[0]

	const handleLanguageSelect = (code: Lang) => {
		setLocale(code)
		localStorage.setItem('locale', code)
		setOpen(false)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setOpen(false)
			}
		}

		if (open) {
			window.addEventListener('click', handleClickOutside)
		}

		return () => window.removeEventListener('click', handleClickOutside)
	}, [open])

	return (
		<div className='flex items-center justify-center mt-4'>
			<div className='relative inline-block text-left' ref={dropdownRef}>
				<div
					className='flex items-center gap-2 cursor-pointer select-none'
					onClick={() => setOpen(!open)}
				>
					<Image
						className='w-[26px] md:w-[30px] rounded-full'
						src={currentLang.flag}
						alt='language'
					/>
					<p className='font-semibold text-[15px] text-white hover:text-cyan-300 transition'>
						{currentLang.name}
					</p>
				</div>

				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: -5 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: -5 }}
							transition={{ duration: 0.2 }}
							className='absolute right-0 z-50 mt-2 w-[140px] rounded-xl bg-[rgba(245,247,250,1)] shadow-xl'
						>
							<div className='py-1'>
								{languages.map(lang => (
									<button
										key={lang.code}
										onClick={() => handleLanguageSelect(lang.code)}
										className={`w-full px-4 py-2 text-sm text-left flex items-center gap-2 rounded-[10px] transition duration-200 
										${
											locale === lang.code
												? 'bg-cyan-500/20 text-gray-600 font-semibold'
												: 'text-gray-500 hover:bg-white/10 hover:text-cyan-300'
										}`}
									>
										<Image
											src={lang.flag}
											alt={lang.name}
											className='w-7 rounded-full'
										/>
										{lang.name}
									</button>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}
