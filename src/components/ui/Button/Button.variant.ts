import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 select-none whitespace-nowrap shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border bg-transparent',
        ghost: 'bg-transparent',
        link: 'bg-transparent underline-offset-4 hover:underline h-auto p-0',
      },
      intent: {
        primary: 'focus-visible:ring-primary',
        secondary: 'focus-visible:ring-secondary',
        destructive: 'focus-visible:ring-destructive',
      },
      size: {
        xs: 'h-7  px-2.5 text-xs',
        sm: 'h-8  px-3   text-sm',
        md: 'h-10 px-4   text-sm',
        lg: 'h-11 px-6   text-base',
        xl: 'h-12 px-8   text-lg',
      },
      font: {
        normal: 'font-medium',
        bold: 'font-bold',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      iconButton: {
        true: 'p-0',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      // solid
      {
        variant: 'solid',
        intent: 'primary',
        class:
          'bg-primary     text-primary-foreground     hover:bg-primary/90     active:bg-primary/80',
      },
      {
        variant: 'solid',
        intent: 'secondary',
        class:
          'bg-secondary   text-secondary-foreground   hover:bg-secondary/80   active:bg-secondary/70',
      },
      {
        variant: 'solid',
        intent: 'destructive',
        class:
          'bg-destructive text-primary-foreground hover:bg-destructive/90 active:bg-destructive/80',
      },

      // outline
      {
        variant: 'outline',
        intent: 'primary',
        class: 'border-primary     text-primary     hover:bg-primary/10     active:bg-primary/20',
      },
      {
        variant: 'outline',
        intent: 'secondary',
        class:
          'border-border      text-secondary-foreground   hover:bg-secondary      active:bg-secondary/70',
      },
      {
        variant: 'outline',
        intent: 'destructive',
        class:
          'border-destructive text-destructive hover:bg-destructive/10 active:bg-destructive/20',
      },

      // ghost
      {
        variant: 'ghost',
        intent: 'primary',
        class: 'text-primary     hover:bg-primary/10     active:bg-primary/20',
      },
      {
        variant: 'ghost',
        intent: 'secondary',
        class: 'text-secondary-foreground   hover:bg-secondary      active:bg-secondary/70',
      },
      {
        variant: 'ghost',
        intent: 'destructive',
        class: 'text-destructive hover:bg-destructive/10 active:bg-destructive/20',
      },

      // link
      { variant: 'link', intent: 'primary', class: 'text-primary' },
      { variant: 'link', intent: 'secondary', class: 'text-secondary-foreground' },
      { variant: 'link', intent: 'destructive', class: 'text-destructive' },

      // iconButton sizes
      { iconButton: true, size: 'xs', class: 'w-7' },
      { iconButton: true, size: 'sm', class: 'w-8' },
      { iconButton: true, size: 'md', class: 'w-10' },
      { iconButton: true, size: 'lg', class: 'w-11' },
      { iconButton: true, size: 'xl', class: 'w-12' },
    ],
    defaultVariants: {
      variant: 'solid',
      intent: 'primary',
      size: 'md',
      font: 'normal',
      radius: 'md',
    },
  },
);
