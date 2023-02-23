import { Player } from "@/types/fpl/interface";

export const sortColumns = (column: string, data: Player[]) => {
  if (!data || !data.length) return data;

  const compare = (a: any, b: any) => {
    const dataA = a[column];
    const dataB = b[column];

    // catch undefined and null
    if (typeof dataA !== typeof dataB) {
      if (!dataA) return 1;
      else return -1;
    }

    if (!dataA && !dataB) return 0;

    return dataA - dataB;
  };
  console.log(data[0]);
  data.sort(compare);
  console.log(data[0]);
};
