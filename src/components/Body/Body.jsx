import { useSelector } from "react-redux";

import { BodyHeader } from "./BodyHeader";
import { BodyItem } from "./BodyItem";

const Body = () => {
  const purchases = useSelector(state => state.purchases.purchases);

  return (
    <div>
      <BodyHeader />
      <div>
        {purchases.map(purchase => <BodyItem key={purchase.id} item={purchase} />)}
      </div>
    </div>
  )
}

export { Body };