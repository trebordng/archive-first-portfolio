let portfolios = [
  {
    name: "Santa Monica",
    id: 1,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    id: 2,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    id: 3,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    id: 4,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    id: 5,
    amount: "$4,600",
    due: "01/27/2998",
  },
];

export function getPortfolios() {
  return portfolios;
}

export function getPortfolio(id) {
  return portfolios.find((portfolio) => portfolio.id === id);
}
