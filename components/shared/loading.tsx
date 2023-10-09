import React from 'react';
import { BeatLoader } from 'react-spinners';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div className='flex justify-center'>
      <BeatLoader
        color='red '
        loading={isLoading}
        size={20}
        data-testid='loader'
        aria-label='Loading Spinner'
      />
    </div>
  );
};

export default Loading;
