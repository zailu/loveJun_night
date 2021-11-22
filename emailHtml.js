function fn(weatherData, lifeData, word, imgurl, lovingDays) {
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
      <div>
        <!-- 天数 -->
        <div>
          <!-- <p>今天是在一起的第${lovingDays}天！</p>-->
		  <p>转眼间一天就过去啦，今天有没有开开心心呢(*^▽^*)</p>
        </div>
        <!-- 图片 -->
        <div>
          <img
            style="width: 100%; max-width: 768px"
            src="${imgurl}"
            alt="图片"
          />
        </div>
        <!-- 每日一句 -->
        <div>
          <p style="font-size: 14px; text-indent: 2em; font-style: italic;color: red;font-weight:bold;text-align:center">
            ${word}
          </p>
        </div>
      </div>
    </body>
  </html>
  `;
}

module.exports = fn;
