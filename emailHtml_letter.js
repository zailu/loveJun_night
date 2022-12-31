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
			<div style="font-weight: bold;line-height: 2;padding: 1rem;margin: 1rem;border-radius: 1rem 0.5rem;text-align: center;position: relative;color: #000000;margin-bottom: 2px;letter-spacing: 0.2rem;color:#F08080">
				<p>&nbsp;&nbsp;&nbsp;&nbsp;我的宝贝，今晚就要跨年了，因为我自身感染很遗憾不能陪在你的身边，但我仍然希望你能开开心心的度过2022年的最后一个夜晚呀。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;要说今年，我最开心的事情是什么，我肯定会毫不犹豫的回答最开心的事情就是遇到了你，是巧合，也是缘分让我们相识相爱，你真的特别特别棒，我的女朋友无论何时我都会很自豪的真心地夸奖你真的很优秀，你爱读书，善良，待人真诚，友善，不以貌取人等等等等，夸都夸不完，当然，为了配得上这么优秀的你，我也在努力的变得更优秀，不单单是为了你或者为了我自己，而是为了我们两个人的以后，我会时刻铭记自己身上的责任一刻不放松，在工作和个人素养上面提升自己。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;昨天我感染新冠了，晚上高烧的时候，什么都做不了，我很希望我的身边能有你的陪伴，很希望能够抱抱你，无奈我也知道这有些不太现实。我的同事晚上十二点跟我讲，有事随时叫他，我没叫他，我觉得我撑得下去，后来硬挺过去之后，我无意间翻到了一篇文章，讲的是一个家庭儿子北漂，家里剩下儿媳还有婆婆，儿媳感染新冠，婆婆寸步不离的在她身边照顾她，不怕被传染，让她觉得感动，我为什么会讲这个事情，因为我猜测自从放开以后，一定会有一大批什么不怕感染拼死照顾之类的新闻，而我在和宝宝聊天的时候也听到了宝宝跟我讲觉得很自责没能陪在我身边，我想表达的就是宝宝不用觉得太内疚，我们所处的环境不同，所以做的选择也会不同，我感受得到宝宝跟我讲你来不了的时候的真心，我就很开心了，所以不要因为这种事觉得对自己太过于自责，好吗。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;说回来，这次跨年其实是我们在一起之后的第一次跨年，之前真的期待了很久，想着能和你去哪里玩，能一起看跨年晚会，一起吃2022年的最后一顿饭，但自己真的不太争气，不早不晚，偏偏在这个时候感染了新冠，我也是在床上一边发烧，一边断断续续的完成了这封信，这也是我写给宝宝的第四封信了，本来想着上次没能写纸质的信给宝宝，这次要写纸质的，也实在是烧的没有力气了，只能写成电子信封发给宝宝了，宝宝不要怪我呀(˃ ⌑ ˂ഃ )。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;实在是没想到，在跨年的前一天宝宝也发烧了，我只希望宝宝一定不要是阳性，不要再去承受一遍我所承受的痛苦。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;好了，在2022年的最后一个晚上，要对我最爱的宝宝说些什么呢，想起来前两天我生病的时候我们语音，我一直说不了话，一直说不出那三个想说出来的字，我爱你。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;无论何时何地，无论将来变成什么样子，我都永远爱你，无怨无悔，拼尽全力，带着你向前走，祝我的猪猪小宝贝2023年变得越来越漂亮，越来越开心呀❤。</p>
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
