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
				<!-- <p>今天是在一起的第${lovingDays}天！</p>-->
				<p>结束了第${lovingDays}天对你的思念~</p>
				<div>
					今天也要好好睡觉哦
					<img  style="width: 8%;"; src="https://s3.bmp.ovh/imgs/2021/12/d82c0c74feafd80c.png" />
				</div>
				<div style="float:right">
					<img  style="width: 70%;"; src="https://s3.bmp.ovh/imgs/2021/12/bbb7a7a1173ec12e.png" />
				</div>
			</div>
			<!-- 每日一句 -->
			<div style="font-weight: bold;line-height: 2;padding: 1rem;margin: 1rem;border-radius: 1rem 0.5rem;text-align: center;float: left;color: #0000ff;margin-bottom: 2px;letter-spacing: 0.2rem;margin-top: 3rem;">
				<!-- ${content} -->
				新鲜感是和旧的人体验新的事物，不是和新的人体验旧的事物，而累了要学会休息而不是放弃，毕竟谁和谁都会有平淡期，晚安。
			</div>
			<div style="position:absolute;bottom:0">
				<img  style="width: 100%;"; src="https://s3.bmp.ovh/imgs/2021/12/c31203495969e9f1.png" />
			</div>
      </div>
      </body>
    </html>
  `;
}

module.exports = fn;
