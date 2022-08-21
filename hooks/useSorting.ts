import { useMemo } from 'react';

export type Sorting<T> = {
  desc: boolean;
  field: keyof T;
};

type UseSortingProps<T> = {
  data: T[];
  sorting: Sorting<T>[];
};

export default function useSorting<T>({ data, sorting }: UseSortingProps<T>) {
  const result = useMemo(() => {
    let sortedData = data;

    for (const s of sorting) {
      const firstItem = data[0];
      const isDataTypeNumber =
        firstItem && typeof firstItem[s.field] === 'number';

      if (isDataTypeNumber) {
        sortedData = sortedData
          .slice()
          .sort((a, b) =>
            s.desc
              ? Number(b[s.field]) - Number(a[s.field])
              : Number(a[s.field]) - Number(b[s.field]),
          );
        continue;
      }

      sortedData = sortedData.slice().sort((a, b) => {
        const aAsText = String(a[s.field]);
        const bAsText = String(b[s.field]);

        return s.desc
          ? ('' + aAsText).localeCompare(bAsText)
          : ('' + bAsText).localeCompare(aAsText);
      });
    }

    return sortedData;
  }, [data, sorting]);

  return result;
}
