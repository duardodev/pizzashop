'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';

const RadioGroupIndicator = RadioGroupPrimitive.Indicator;

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'w-4 h-4 rounded-full relative radix-state-checked:bg-orange radix-state-unchecked:bg-button-dark focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-orange focus-visible:ring-opacity-75 focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="leading-0 flex items-center justify-center absolute inset-0">
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
