import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

export default function AppLayout({ children }) {
  const { auth } = usePage().props;
  const role = auth?.user?.role;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar role={role} />
      <main className="p-6">{children}</main>
    </div>
  );
}
