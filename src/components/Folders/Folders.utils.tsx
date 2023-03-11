import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconLink,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';

import type { LinkRecord } from '@/graphql/graphql';

export const renderLinkIcon = (type: LinkRecord['linkType']): ReactNode => {
  switch (type) {
    case 'github':
      return <IconBrandGithub size={24} />;
    case 'linkedin':
      return <IconBrandLinkedin size={24} />;
    default:
      return <IconLink size={24} />;
  }
};
