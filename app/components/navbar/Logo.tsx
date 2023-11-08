'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  // const router = useRouter();
  return (
    <div className="w-[100px] h-[31px] hidden md:block">
      <Image
        alt="logo"
        width="0"
        height="0"
        sizes="100vw"
        className="cursor-pointer w-full h-auto"
        src="/images/logo.webp"
        priority={true}
      />
    </div>
  );
};

export default Logo;
