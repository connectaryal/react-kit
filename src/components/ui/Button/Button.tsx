import { cn, iconSizes } from '@/utils';
import { ButtonProps } from './Button.type';
import { buttonVariants } from './Button.variant';
import { Spinner } from '@/icons';

export const Button = ({
  variant,
  intent,
  size,
  font,
  radius,
  iconButton,
  fullWidth,
  isLoading = false,
  loadingText,
  leftIcon,
  rightIcon,
  children,
  disabled,
  className,
  ref,
  ...rest
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={cn(
        buttonVariants({ variant, intent, size, font, radius, iconButton, fullWidth }),
        className,
      )}
      {...rest}
    >
      {isLoading ? (
        <>
          <Spinner className={iconSizes[size ?? 'md']} />
          {loadingText ?? children}
        </>
      ) : (
        <>
          {leftIcon && <span className='shrink-0'>{leftIcon}</span>}
          {children}
          {rightIcon && <span className='shrink-0'>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

Button.displayName = 'Button';
