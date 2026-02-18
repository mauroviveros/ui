import type { ButtonColors, ButtonVariants } from "./types";

export const SIZE_CLASSES = {
  xs: 'text-sm p-1.5 [&_svg]:size-3.5 gap-1',
  sm: 'text-sm px-3 h-9 [&_svg]:size-3 gap-2',
  base: 'text-sm px-4 h-10 [&_svg]:size-4 gap-2',
  lg: 'text-base px-8 h-12 [&_svg]:size-5 gap-2',
};
export const VARIANT_CLASSES: Record<ButtonVariants, string> = {
  solid: '',
  outline: 'border border-input bg-background',
  ghost: ''
};

export const COLOR_CLASSES: Record<ButtonVariants, Record<ButtonColors, string>> = {
  solid: {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    muted: 'bg-muted text-muted-foreground hover:bg-muted/80',
  },
  outline: {
    primary: 'hover:bg-primary hover:text-primary-foreground',
    secondary: 'hover:bg-secondary hover:text-secondary-foreground',
    accent: 'hover:bg-accent hover:text-accent-foreground',
    destructive: 'hover:bg-destructive hover:text-destructive-foreground',
    muted: 'hover:bg-muted hover:text-muted-foreground',
  },
  ghost: {
    primary: 'hover:bg-primary hover:text-primary-foreground',
    secondary: 'hover:bg-secondary hover:text-secondary-foreground',
    accent: 'hover:bg-accent hover:text-accent-foreground',
    destructive: 'hover:bg-destructive hover:text-destructive-foreground',
    muted: 'text-muted-foreground hover:bg-muted hover:text-inherit',
  },
}

export const CLASSES = [
  'inline-flex items-center justify-center ring-offset-background',
  'cursor-pointer rounded-md transition-colors font-medium whitespace-nowrap',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  '[&_svg]:pointer-events-none [&_svg]:shrink-0',
];
