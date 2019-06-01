export type Dict<T> = {
  [k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  fn: (arg: T, idx: number) => S ): Dict<S> {
    const out: Dict<S> = {};
    Object.keys(dict).forEach((val, idx) => {
      const thisItem = dict[val];
      if (typeof thisItem !== 'undefined') {
        out[val] = fn( thisItem, idx)
      }
    })
    return out;
  }

// Array.prototype.reduce, but for Dict
export function reduceDict<T>(dict: Dict<T>) {}
