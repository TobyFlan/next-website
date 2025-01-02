// redirect all URLS to the home page

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after the component mounts
    router.replace('/');
  }, [router]);

  return null; 
}