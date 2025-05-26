import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from '../assets/logo.svg';
import LandingImg from '../assets/main.svg';



const HomePage = () => {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
        <Image src={Logo} alt='logo' />
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            Jobify it.<span className='text-primary'>track it.</span> Land it!
          </h1>
          <p className='leading-loose max-w-md mt-4 '>
           <strong>Jobify</strong> is your personal job tracking companion, designed to help you stay on top of every application. 
    Easily monitor the status of your job submissions, view detailed stats on your progress, and keep everything organized in one place. 
    Whether you&apos;re actively applying or planning your next move, Jobify gives you the clarity and control you need to manage your career journey with confidence.
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt='landing' className='hidden lg:block ' />
      </section>
    </main>
  );
};
export default HomePage;
