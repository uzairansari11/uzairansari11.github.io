import { HERO_CONTENT } from '@/lib/constants';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

const ResumeDownloadButton = ({ full }: { full?: boolean }) => {
  return (
    <Button
      size="sm"
      variant="outline"
      className={`rounded-full px-4 bg-transparent w-${full ? 'full' : 'auto'} `}
      asChild
    >
      <a href={HERO_CONTENT.cta.secondary.href} target="_blank" rel="noopener noreferrer">
        <Download className="mr-2 h-4 w-4" /> {HERO_CONTENT.cta.secondary.text}
      </a>
    </Button>
  );
};

export default ResumeDownloadButton;
