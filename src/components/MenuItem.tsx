import type { MenuItem } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        SEK{(menuItem.price / 10).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
