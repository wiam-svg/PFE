import React from 'react';
import { usePage } from '@inertiajs/react';
import SignalementItem from '@/Components/SignalementItem';

export default function Show() {
  const { signalement, currentUser } = usePage().props;

  return (
    <div>
      <SignalementItem
        signalement={signalement}
        currentUser={currentUser}
      />
    </div>
  );
}
