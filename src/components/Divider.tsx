import clsx from 'clsx';

interface DividerProps {
  gradientTo: 'right' | 'left';
}

export function Divider({ gradientTo }: DividerProps) {
  return (
    <div
      className={clsx('h-px from-red to-red-border/30', {
        'bg-gradient-to-r': gradientTo === 'right',
        'bg-gradient-to-l': gradientTo === 'left'
      })}
    />
  );
}
