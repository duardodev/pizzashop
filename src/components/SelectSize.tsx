import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  PopoverArrow
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

import { Cross1Icon } from '@radix-ui/react-icons';
import { CgSize } from 'react-icons/cg';

const sizes = ['Grande', 'Média', 'Pequena'];

interface SelectSizeProps {
  onSizeChange: (selectedSize: string) => void;
  size: string;
}

export function SelectSize({ onSizeChange, size }: SelectSizeProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          aria-label="Select Size"
          className="bg-orange p-2 rounded-md flex justify-center items-center"
        >
          <CgSize size={20} className="text-white" />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex items-center justify-between">
          <h1 className="text-text text-lg font-semibold">Tamanho da pizza</h1>

          <PopoverClose className="rounded-full focus:outline-none focus-visible:ring focus-visible:ring-orange focus-visible:ring-opacity-75">
            <Cross1Icon className="h-4 w-4 text-title hover:text-orange" />
          </PopoverClose>
        </div>

        <form>
          <RadioGroup aria-label="Pizza sizes" defaultValue={size} onValueChange={onSizeChange}>
            <div className="mt-3 space-y-3">
              {sizes.map(size => (
                <div key={size} className="flex items-center gap-2">
                  <RadioGroupItem id={size} value={size} />

                  <Label htmlFor={size}>{size}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </form>

        <PopoverArrow className="fill-orange mb-1" />
      </PopoverContent>
    </Popover>
  );
}
