import { cn } from '@/lib/utils';
import Link from 'next/link';
import { RiFacebookCircleLine, RiInstagramLine, RiTiktokLine } from 'react-icons/ri';

const socialMediasLinks = [
  { href: '/', icon: RiInstagramLine },
  { href: '/', icon: RiFacebookCircleLine },
  { href: '/', icon: RiTiktokLine },
];

interface SocialMediaLinks {
  alternative?: boolean;
}

export function SocialMediaLinks({ alternative }: SocialMediaLinks) {
  return (
    <div className="flex gap-6">
      {socialMediasLinks.map((socialMediaLink, index) => {
        return (
          <Link key={index} href={socialMediaLink.href}>
            <socialMediaLink.icon
              size={24}
              className={cn('text-red hover:text-red-dark transition-colors', alternative && 'text-white/90 hover:text-white')}
            />
          </Link>
        );
      })}
    </div>
  );
}
