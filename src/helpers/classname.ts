type ClassValue = string | { [key: string]: boolean } | ClassValue[];

export function classnames(...args: ClassValue[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (typeof arg === 'string' && arg.trim() !== '') {
      classes.push(arg.trim());
    } else if (typeof arg === 'object' && arg !== null) {
      if (Array.isArray(arg)) {
        const nestedClasses = classnames(...arg);
        if (nestedClasses) {
          classes.push(nestedClasses);
        }
      } else {
        for (const key in arg) {
          if (arg.hasOwnProperty(key) && arg[key]) {
            classes.push(key.trim());
          }
        }
      }
    }
  });

  return classes.join(' ');
}
