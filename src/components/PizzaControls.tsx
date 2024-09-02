import { ComponentProps } from 'react';
import { MdOutlineAdd, MdOutlineRemove } from 'react-icons/md';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  PopoverArrow,
} from '@/components/ui/popover';
import { RadioGroup } from '@/components/ui/radio-group';
import { CgSize } from 'react-icons/cg';
import { RxCross1 } from 'react-icons/rx';
import { PizzaSizeList } from './PizzaSizeList';

interface PizzaControlsProps extends ComponentProps<'div'> {
  quantity: number;
  size: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onSizeChange: (size: string) => void;
}

export function PizzaControls({
  quantity,
  size,
  onIncrease,
  onDecrease,
  onSizeChange,
  ...props
}: PizzaControlsProps) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <div className="bg-orange-light/90 border border-orange/20 p-2 rounded-md flex flex-row justify-between items-center gap-1">
        <button type="button" onClick={onDecrease} disabled={quantity <= 1}>
          <MdOutlineRemove size={18} className="text-red" />
        </button>

        <input
          type="number"
          value={quantity}
          readOnly
          className="w-6 bg-transparent text-title text-center leading-tight border-none focus:outline-none"
        />

        <button type="button" onClick={onIncrease}>
          <MdOutlineAdd size={18} className="text-red" />
        </button>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <button
            aria-label="Selecionar tamanho"
            className="bg-orange p-2 rounded-md flex justify-center items-center"
          >
            <CgSize size={20} className="text-white" />
          </button>
        </PopoverTrigger>

        <PopoverContent>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Tamanho da pizza</h1>

            <PopoverClose className="rounded-full focus:outline-none focus-visible:ring focus-visible:ring-orange focus-visible:ring-opacity-75">
              <RxCross1 className="h-4 w-4 text-title hover:text-orange" />
            </PopoverClose>
          </div>

          <form>
            <RadioGroup
              aria-label="Tamanho da pizza"
              defaultValue={size}
              onValueChange={onSizeChange}
            >
              <PizzaSizeList />
            </RadioGroup>
          </form>

          <PopoverArrow className="fill-orange mb-1" />
        </PopoverContent>
      </Popover>
    </div>
  );
}
