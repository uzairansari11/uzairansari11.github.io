import { HERO_CONTENT } from '@/lib/constants';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

const ResumeDownloadButton = ({ full }: { full?: boolean }) => {
  return (
    <Button
      size="sm"
      variant="outline"
      className={`rounded-sm px-3.5 h-8 text-xs font-medium bg-secondary border-border text-foreground hover:bg-secondary/80 transition-colors ${full ? 'w-full' : 'w-auto'}`}
      asChild
    >
      <a href={HERO_CONTENT.cta.secondary.href} target="_blank" rel="noopener noreferrer">
        <Download className="mr-1.5 h-3.5 w-3.5" /> {HERO_CONTENT.cta.secondary.text}
      </a>
    </Button>
  );
};

export default ResumeDownloadButton;

