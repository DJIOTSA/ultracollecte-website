import { MotionProps as OriginalMotionProps } from 'framer-motion'

declare module 'framer-motion' {
  interface MotionProps extends OriginalMotionProps {
    className?: string
    onClick?: () => void
    onMouseLeave?: () => void
  }
}
