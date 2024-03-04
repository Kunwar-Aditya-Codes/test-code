import Camera from '@/components/Camera';

export default function Home() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <h1 className='text-8xl font-light text-center'>
        <Camera />
      </h1>
    </main>
  );
}
