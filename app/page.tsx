import dynamic from 'next/dynamic';

// Dynamically import the HomeContent component with ssr disabled
const HomeContent = dynamic(() => import('./components/HomeContent'), {
  ssr: false
});

export default function Home() {
  return <HomeContent />;
} 