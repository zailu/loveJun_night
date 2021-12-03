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
      <div style="font-size: 1rem;width: 100%;height: 100%;overflow-y: scroll;box-sizing: border-box;border:1px solid rgba(216, 131, 197, 0.5);">
        <!-- 天数 -->
        <div style="font-weight: bold;line-height: 2;padding: 1rem;margin: 1rem;border-radius: 1rem 0.5rem;text-align: center;position: relative;color: #000000;margin-bottom: 2px;letter-spacing: 0.2rem;">
          <!-- <p>今天是在一起的第${lovingDays}天！</p>-->
          <p>结束了第${lovingDays}天对你的思念！</p>
		  <div>今天有没有开开心心呢</div>
		  <img  style="width: 50%;"; src="https://s3.bmp.ovh/imgs/2021/12/bbb7a7a1173ec12e.png" />
        </div>
        <!-- 每日一句 -->
        <div style="font-size: 1rem;text-indent: 2em;font-style: italic;padding: 3rem 2rem;background: url(https://s3.bmp.ovh/imgs/2021/12/b8b68c4a645b0f91.png) no-repeat center top;background-size: 90% 100%;">
				 ${content}
        </div>
      </div>
      </body>
    </html>
  `;
}

module.exports = fn;
