import Save_number from '@/components/authForm/save-number'
import RightImg from '@/components/rightImg/rightImg'

export default function Register() {
  return (
    <section className="w-full min-h-screen bg-[rgba(15,23,42,1)] flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Save_number />
        </div>
        <div className="w-full md:w-1/2 hidden md:flex justify-center">
          <RightImg />
        </div>
      </div>
    </section>
  )
}
