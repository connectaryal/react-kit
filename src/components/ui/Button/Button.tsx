import { type ButtonProps } from './Button.type'
import { buttonVariants } from './Button.variant'
import { cn } from '@/utils'
import { Spinner } from '@/icons/Spinner'

export const Button = ({
  variant,
  size,
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
      className={cn(buttonVariants({ variant, size, iconButton, fullWidth }), className)}
      {...rest}
    >
      {isLoading ? (
        <>
          <Spinner size={size ?? 'md'} />
          {loadingText ?? children}
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}