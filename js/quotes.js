const quotes = [
  {
    quote: "길은 모두에게 열려있지만 모두가 그 길을 가질 수 있는 건 아니다.",
    movie: "인턴",
  },
  {
    quote: "단지 두려움 때문에 좋아하는 일을 포기하지마",
    movie: "씽",
  },
  {
    quote: "우리가 앞서 나갈 기회를 잡으면 저들이 결승점을 옮겨놔",
    movie: "히든 피겨스",
  },
  {
    quote: "인생은 다시 돌아올 두 번의 기회가 없다고 생각하고 살아야 해",
    movie: "어바웃 타임",
  },
  {
    quote: "인생을 바꿀 기회는 1분마다 찾아옵니다.",
    movie: "바닐라 스카이",
  },
  {
    quote: "인생을 낭비하는 자 유죄",
    movie: "빠삐용",
  },
  {
    quote:
      "경험은 나이 들지 않아요, 경험은 결코 시대에 뒤떨어지지 않기 때문이죠",
    movie: "인턴",
  },
  {
    quote: "잊히지 않을 것 같은 무더운 여름 뒤엔 가을도 온다 분명히",
    movie: "500일의 썸머",
  },
  {
    quote: "우리가 두려워할 것은 두려움뿐이죠",
    movie: "주토피아",
  },
  {
    quote: "변화는 너로부터 시작해",
    movie: "주토피아",
  },
];

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

console.log(quotes[0], Math.round(Math.random() * 10));
const randomNumber = Math.round(Math.random() * quotes.length);
quote.innerText = quotes[randomNumber].quote;
movie.innerText = quotes[randomNumber].movie;
