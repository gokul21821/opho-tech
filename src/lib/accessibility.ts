/**
 * Accessibility utilities and helpers
 */

/**
 * Generates accessible button props for screen readers
 */
export function getAccessibleButtonProps(label: string, isExpanded?: boolean) {
  return {
    'aria-label': label,
    ...(isExpanded !== undefined && { 'aria-expanded': isExpanded }),
  };
}

/**
 * Focus trap for modals
 */
export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  function handleTab(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  }

  element.addEventListener('keydown', handleTab);
  firstFocusable?.focus();

  return () => element.removeEventListener('keydown', handleTab);
}

/**
 * Screen reader only class for visually hidden but accessible text
 */
export const srOnly =
  'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0';

