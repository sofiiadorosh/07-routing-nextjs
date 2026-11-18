'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

type Props = {
  error: Error;
};

function NoteDetailsError({ error }: Props) {
  return (
    <main>
      <ErrorMessage
        message={`Could not fetch note details. ${error.message}`}
      />
    </main>
  );
}

export default NoteDetailsError;
