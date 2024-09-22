const quotes = [
  {
    quote:
      "프로그램을 작성하는 것은 '문제 해결'을 넘어 '문제를 정의'하는 것이다.",
    author: "Dijkstra (Edsger W. Dijkstra)",
  },
  {
    quote: "코드는 시끄럽다. 코드의 디자인은 시끄럽지 않아야 한다.",
    author: "Robert C. Martin (Uncle Bob)",
  },
  {
    quote: "코드는 사람이 읽을 수 있어야 하며, 컴퓨터가 실행할 수 있어야 한다.",
    author: "Donald Knuth",
  },
  {
    quote:
      "좋은 프로그래머는 코드를 잘 짜는 것이 아니라, 잘 짜여진 코드를 읽는 능력이 뛰어난 사람이다.",
    author: "Martin Fowler",
  },
  {
    quote:
      "프로그램을 작성할 때 중요한 것은 '잘 짠 코드'가 아니라 '문제를 해결하는 방법'이다.",
    author: "Linus Torvalds",
  },
  {
    quote: "결국 모든 컴퓨터 문제는 사람 문제다.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "프로그래밍은 코드의 양보다 품질이 중요하다.",
    author: "Joel Spolsky",
  },
  {
    quote:
      "프로그램을 작성하는 데 있어 가장 중요한 것은 문제를 이해하는 것이다.",
    author: "John Backus",
  },
  {
    quote: "최적화는 나중에 하라. 우선 코드를 작성하라.",
    author: "John Woods",
  },
  {
    quote: "소프트웨어는 인내와 지속적인 개선으로 만들어진다.",
    author: "Martin Fowler",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;