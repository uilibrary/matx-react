import { MatxLoading } from 'app/components';
import { Suspense } from 'react';

const MatxSuspense = ({ children }) => {
  return <Suspense fallback={<MatxLoading />}>{children}</Suspense>;
};

export default MatxSuspense;
