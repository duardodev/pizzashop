import { sizes } from '@/lib/data';
import { RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

export function PizzaSizeList() {
  return (
    <div className="mt-3 space-y-3">
      {sizes.map(size => (
        <div key={size} className="flex items-center gap-2">
          <RadioGroupItem id={size} value={size} />
          <Label htmlFor={size}>{size}</Label>
        </div>
      ))}
    </div>
  );
}
