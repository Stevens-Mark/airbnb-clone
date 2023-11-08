import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from '@/app/actions/getCurrentUser'
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
// import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AirBnB',
  description: 'AirBnB Clone',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}/>
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}
