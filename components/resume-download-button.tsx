import { HERO_CONTENT } from '@/lib/constants';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

const ResumeDownloadButton = ({ full, onDark = false }: { full?: boolean; onDark?: boolean }) => {
  return (
    <Button
      size="sm"
      variant="outline"
      className={`rounded-full px-3.5 h-9 text-xs font-medium ${onDark ? 'border-white/20 bg-white/10 text-white hover:bg-white/20' : 'border-border bg-secondary text-foreground hover:bg-secondary/80'} transition-colors ${full ? 'w-full' : 'w-auto'}`}
      asChild
    >
      <a href={HERO_CONTENT.cta.secondary.href} target="_blank" rel="noopener noreferrer">
        <Download className="mr-1.5 h-3.5 w-3.5" /> {HERO_CONTENT.cta.secondary.text}
      </a>
    </Button>
  );
};

export default ResumeDownloadButton;

