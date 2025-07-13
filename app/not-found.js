import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 className="text-gray-900"> 404 - Page Not Found </h1>
      <p className="text-gray-900"> Sorry, the page you’re looking for does not exist. </p>
      <Link href="/" className="text-gray-900 underline hover:text-[#6B2D2C]"> Go back home </Link>
    </div>
  )
}