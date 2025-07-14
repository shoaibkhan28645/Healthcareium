import dynamic from 'next/dynamic';
import { Navbar } from "./components/navbar/Navbar";

const LandingPage = dynamic(() => import('./landingPage'));

export default function Home() {
  return (
    <div>
   
      <LandingPage />
    </div>
  );
}