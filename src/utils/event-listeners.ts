export function addEscListener(setStateFn: (arg: boolean) => void) {
  return document.addEventListener('keydown', ({ code }) => {
    if (code === 'Escape') {
      setStateFn(false);
    }
  });
}

export function addClickOnOutsideListener(setStateFn: (arg: boolean) => void) {
  return document.addEventListener('click', ({ target }) => {
    if (target instanceof HTMLElement) {
      if (!target.className.includes('Lang') && !target.className.includes('Theme') && !target.className.includes('Settings')) {
        setStateFn(false);
      }
    }
  });
}
