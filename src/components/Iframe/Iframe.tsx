import { Box, Loader } from '@mantine/core';
import { useEffect, useState } from 'react';

import { useAppSelector } from '@/redux';

export default function Iframe(): JSX.Element | null {
  const { isInsideIframe, fileAction } = useAppSelector(
    (state) => state.config,
  );
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (isInsideIframe) return;

    if (fileAction !== 'running') return;

    const timeout = setTimeout(() => {
      setSrc(`${window.location.protocol}//${window.location.host}`);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [fileAction, isInsideIframe]);

  return isInsideIframe ? null : fileAction !== 'running' ? null : (
    <Box className="iframe">
      {src ? (
        <iframe className="w-full h-full" src={src} frameBorder="0" />
      ) : (
        <Loader color="teal" variant="dots" />
      )}
    </Box>
  );
}
