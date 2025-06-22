import Image from "next/image";
import localFont from 'next/font/local'
import Link from 'next/link'

const Mont = localFont({
  src: "./fonts/Montserrat-ExtraBold.ttf",
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="md:grid md:grid-cols-2 md:h-[60vh] ">
        <div className=" flex flex-col md:gap-4 gap-1 items-center justify-center">
          <p className={` ${Mont.className} md:text-3xl text-xl font-bold md:pt-0 md:pl-0 md:pr-0 pt-6 pl-6 pr-6`}>The Best URL Shortener in the Market</p>
          <p className="md:text-lg px-8">We are the most straightforward URL Shortener. Most of the URL Shorteners will track you or ask you to give details. We understand your needs and hence we have created this URL Shortener</p>
          <div className='flex gap-3 text-white'>
            <Link href="/shorten" className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer' ><button>Try Now</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative min-h-[200px]">
          <Image className="mix-blend-darken" src={"/vector.jpg"} alt="vector" fill={true} priority sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </section>
    </main>
  );
}
