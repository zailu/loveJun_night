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
				<p>结束了一天的工作</p>
				<div>
					今天也要好好睡觉哦
					<img  style="width: 8%;"; src="https://s3.uuu.ovh/imgs/2022/11/22/58b28726161eda8b.png" />
				</div>
				<div style="float:right">
					<img  style="width: 70%;"; src="https://s3.uuu.ovh/imgs/2022/11/22/dfaa964d0f823936.png" />
				</div>
			</div>
			<!-- 每日一句 -->
			<div style="font-weight: bold;line-height: 2;padding: 1rem;margin: 1rem;border-radius: 1rem 0.5rem;text-align: center;float: left;color: #0000ff;margin-bottom: 2px;letter-spacing: 0.2rem;margin-top: 3rem;">
				 ${content} 			
			</div>
			<div style="position:absolute;bottom:0">
				<img  style="width: 100%;"; src="https://s3.uuu.ovh/imgs/2022/11/22/461cbb8ca7df3587.png" />
			</div>
      </div>
      </body>
    </html>
  `;
}

module.exports = fn;
