import { cva } from 'class-variance-authority'
export const button = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-full',
    'text-base font-semibold',
    'focus-visible:outline focus-visible:outline-2',
    'focus-visible:outline-offset-2 focus-visible:outline-accent-8',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-black', 'text-white'],
        secondary: ['bg-transparent', 'text-foreground', 'border', 'border-black'],
        icon: ['bg-transparent', 'text-foreground', 'border', 'border-black'],
      },
      size: {
        sm: ['px-5 py-3 [&_svg]:h-5 [&_svg]:w-5'],
        md: ['px-5 py-4  [&_svg]:h-6 [&_svg]:w-6'],
        lg: ['px-12 py-6 [&_svg]:h-7 [&_svg]:w-7 text-2xl'],
      },
    },
    compoundVariants: [
      {
        intent: 'icon',
        size: 'sm',
        class: 'px-6',
      },
      {
        intent: 'icon',
        size: 'md',
        class: 'px-7',
      },
    ],
  },
)
