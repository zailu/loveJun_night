function fn(weatherData, lifeData, content, imgurl, lovingDays) {
  const { daily: weatherDataDaily } = weatherData;
  const { daily } = lifeData;

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
      <div style="font-size: 1rem;width: 100%;height: 100%;overflow-y: scroll;box-sizing: border-box;border:1px solid rgba(216, 131, 197, 0.5);position: relative;">
			<!-- 天数 -->
			<div style="font-weight: bold;line-height: 2;padding: 1rem;margin: 1rem;border-radius: 1rem 0.5rem;text-align: center;position: relative;color: #000000;margin-bottom: 2px;letter-spacing: 0.2rem;">
				<p>&nbsp;&nbsp;宝宝，转眼间我们已经相识快一年了，在一起也有两百多天了，时间过得真快，快到我十分珍惜和宝宝在一起的每一天，每一分钟，前段时间宝宝跟我讲想让我给宝宝再写一封信，我毫不犹豫的答应了，即便这段时间工作上又开始忙了，我也会抽空去写，去表达我对你的爱意。我从来不会去拒绝宝宝的请求除非我真的做不到，我也从来不会对宝宝食言。这是我写给宝宝的第三封信。</p>
				<p>&nbsp;&nbsp;回想起在一起的这段时光，我们彼此都很惊奇的发现，我们之间没有争吵，没有生气，只有在遇到问题时对对方的理解和包容，我曾经不止一次的想过，美好的爱情大抵不过如此了，很难相信有这样的缘分，像我们这样相识，相爱，走到一起，所以我们彼此也都十分珍惜这段感情，都在不断的成长，不断的维护和巩固这段感情。</p>
				<p>&nbsp;&nbsp;但是现在我们发现了阻拦我们的最大的问题，就是物质上的自由，这是一个看起来很无解的问题，我们最近也有过不止一次的针对这个问题的讨论，虽然每次的讨论都没有结果，但我认为我们是一直在进步的，我们在勇敢的面对内心深处不敢面对的事情，我们在为了这段感情，去做出一些之前胆怯或者不敢去做的事情，这就是在进步，就像我们之前一直所说的，人生所遇之事，没有十全十美，大多都会有些遗憾，但这里的遗憾并不是指我们感情上的遗憾，而是指宝宝和我在一起就一定会面临物质生活没有那么充裕的遗憾，是取舍的含义，我需要做的，就是陪着你，让你相信选择我是你做的最正确的选择，前两天的讨论也让我有了一些新的思考，我觉得不应该说什么让宝宝做选择，这样的话太傻了，我从一开始的角度就是想着让自己表现的不那么自私，但这样的态度会让宝宝觉得我对我们的未来没有信心。现在我的想法变了，我想在这份感情里面变得自私，我想永远和你在一起，我不会再说什么宝宝你去做选择，再次遇到这些问题的时候，我只会用力握住你的手，告诉你，放心，我一直在努力，我一直在陪着你，我们一定会渡过难关，一起去看这个世界上最美丽的风景。</p>
				<p>&nbsp;&nbsp;所以，这封信是写给宝宝的，但同时也是写给我自己的，我希望，接下来的时间，在这段感情里，无论遇到什么问题，我都能够很坚定的和你站在一起（当然，之前也很坚定，只是让你做选择这个决定显得我不够坚定），也希望宝宝能在这份坚定的走下去的基础上，给予我支持和鼓励，让我陪着你一直一直走下去，我一直都相信，人是一个人来到这个世界上，但绝对不是一个人离开这个世界，因为还有对彼此的牵挂，还有爱的存在。</p>
				<p>&nbsp;&nbsp;回到信的话题，李巧巧的那篇微博宝宝发给我之后，我看了很多次，因为我觉得和我们真的很像。宝宝也是上天派来拯救我的人，让我从迷茫和工作工具中解脱出来，让我拥有了这么美好的爱情，让我的生活中充满了欢乐，甜蜜以及无处不在的表达的爱意，我觉得，在这种情况下，我有什么理由不努力，有什么理由不去好好奋斗，为我们的未来奋斗呢，宝宝你总说人要对自己好一点，但我心里很清楚，就像赛跑一样，没有和别人一样的起跑线，那就只能自己用更多的努力去在比赛过程中速度再快一些，这也是我对你的承诺，做到可以让你毫不犹豫相信我值得你去托付一辈子的承诺。</p>
				<p>&nbsp;&nbsp;我对我们未来的路充满信心，希望以及愿意为之付出一切的态度和努力，所以，宝宝，可以让我拉着你的手，陪着你一起经历人生的酸甜苦辣吗。</p>
				<p>——爱你的哥哥</p>
			</div>

			<div>
				<img  style="width: 100%;"; src="https://s3.uuu.ovh/imgs/2022/11/22/461cbb8ca7df3587.png" />
			</div>
      </div>
      </body>
    </html>
  `;
}

module.exports = fn;
