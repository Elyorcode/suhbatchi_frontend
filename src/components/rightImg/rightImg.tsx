import Image from 'next/image';

export default function RightImg() {
  return (
    <div className="w-full max-w-[600px] h-auto">
      <Image
        src="/my-password-pana.png"
        alt="right-img"
        width={600}
        height={600}
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
