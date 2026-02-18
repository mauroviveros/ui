export enum ButtonVariants {
  Solid = 'solid',
  Outline = 'outline',
  Ghost = 'ghost',
}

export enum ButtonColors {
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
  Destructive = 'destructive',
  Muted = 'muted',
}

export enum ButtonSizes {
  XS = 'xs',
  SM = 'sm',
  Base = 'base',
  LG = 'lg',
}

export type ButtonProps = {
  size?: `${ButtonSizes}`;
  variant?: `${ButtonVariants}`;
  color?: `${ButtonColors}`;
  disabled?: boolean;
};

export const defaultButtonProps = {
  size: ButtonSizes.Base,
  variant: ButtonVariants.Solid,
  color: ButtonColors.Primary,
  disabled: false,
};
