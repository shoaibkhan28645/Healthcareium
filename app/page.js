import dynamic from 'next/dynamic';
import { Navbar } from "./components/navbar/Navbar";

const LandingPage = dynamic(() => import('./components/landingPage'));

export default function Home() {
  return (
    <div>
      <Navbar/>
      <LandingPage />
    </div>
  );
}