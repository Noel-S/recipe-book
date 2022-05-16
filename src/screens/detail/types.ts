export type Item = {
  id: string;
  name: string;
  image: string;
  ingredients: [
    {
      name: string;
      quantity: {value: string; type: string | undefined};
    },
  ];
  servings: number;
};

type DetailProps = {
  type: 'trending' | 'recent';
  item: Item;
};

export default DetailProps;
