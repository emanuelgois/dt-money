import { useContext } from "react";
import { TransactionsContext } from "../components/contexts/TransactionsContext";

export function useSummary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce(
      (acc, transation) => {
        if (transation.type === 'income'){
          acc.income += transation.price;
          acc.total += transation.price;
        } else {
          acc.outcome += transation.price;
          acc.total -= transation.price;
        }
        return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  
    );

    return summary;
  
}