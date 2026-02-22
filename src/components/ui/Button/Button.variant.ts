import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-md',
    'transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'select-none whitespace-nowrap shrink-0',
  ],
  {
    variants: {
      variant: {
        solid:       ['bg-blue-600 text-white', 'hover:bg-blue-700 active:bg-blue-800', 'focus-visible:ring-blue-500'],
        outline:     ['border border-blue-600 text-blue-600 bg-transparent', 'hover:bg-blue-50 active:bg-blue-100', 'focus-visible:ring-blue-500'],
        ghost:       ['text-blue-600 bg-transparent', 'hover:bg-blue-50 active:bg-blue-100', 'focus-visible:ring-blue-500'],
        link:        ['text-blue-600 bg-transparent', 'underline-offset-4 hover:underline active:text-blue-800', 'focus-visible:ring-blue-500', 'h-auto p-0'],
        destructive: ['bg-red-600 text-white', 'hover:bg-red-700 active:bg-red-800', 'focus-visible:ring-red-500'],
      },
      intent: {
        primary:     'focus-visible:ring-blue-500',
        secondary:   'focus-visible:ring-gray-400',
        destructive: 'focus-visible:ring-red-500',
      },
      size: {
        xs: 'h-7 px-2.5 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-11 px-6 text-base',
        xl: 'h-12 px-8 text-lg',
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
      { variant: 'solid', intent: 'primary',     class: 'bg-primary     text-primary-foreground     hover:bg-primary-hover     active:bg-primary-active'     },
      { variant: 'solid', intent: 'secondary',   class: 'bg-secondary   text-secondary-foreground   hover:bg-secondary-hover   active:bg-secondary-active'   },
      { variant: 'solid', intent: 'destructive', class: 'bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active' },

      // outline
      { variant: 'outline', intent: 'primary',     class: 'border-primary     text-primary     hover:bg-primary-hover/10'     },
      { variant: 'outline', intent: 'secondary',   class: 'border-secondary   text-secondary-foreground   hover:bg-secondary-hover'   },
      { variant: 'outline', intent: 'destructive', class: 'border-destructive text-destructive hover:bg-destructive-hover/10' },

      // ghost
      { variant: 'ghost', intent: 'primary',     class: 'text-primary     hover:bg-primary-hover/10'     },
      { variant: 'ghost', intent: 'secondary',   class: 'text-secondary-foreground   hover:bg-secondary-hover'   },
      { variant: 'ghost', intent: 'destructive', class: 'text-destructive hover:bg-destructive-hover/10' },

      // link
      { variant: 'link', intent: 'primary',     class: 'text-primary'     },
      { variant: 'link', intent: 'secondary',   class: 'text-secondary-foreground'   },
      { variant: 'link', intent: 'destructive', class: 'text-destructive' },

      { iconButton: true, size: 'xs', class: 'h-7 w-7' },
      { iconButton: true, size: 'sm', class: 'h-8 w-8' },
      { iconButton: true, size: 'md', class: 'h-10 w-10' },
      { iconButton: true, size: 'lg', class: 'h-11 w-11' },
      { iconButton: true, size: 'xl', class: 'h-12 w-12' },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  }
)