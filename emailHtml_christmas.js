function fn(weatherData, lifeData, content, imgurl, lovingDays) {
  const { daily: weatherDataDaily } = weatherData;
  const { daily } = lifeData;

  return '\n' +
    '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '  <head>\n' +
    '    <meta charset="UTF-8" />\n' +
    '    <title>Merry Christmas</title>\n' +
    '    <style>\n' +
    '      body {\n' +
    '        background-color: #000;\n' +
    '        overflow: hidden;\n' +
    '        display: flex;\n' +
    '        align-items: center;\n' +
    '        justify-content: space-around;\n' +
    '      }\n' +
    '\n' +
    '      body,\n' +
    '      html {\n' +
    '        height: 100%;\n' +
    '        width: 100%;\n' +
    '        margin: 0;\n' +
    '        padding: 0;\n' +
    '      }\n' +
    '\n' +
    '      svg {\n' +
    '        width: 90%;\n' +
    '        height: 90%;\n' +
    '        visibility: hidden;\n' +
    '      }\n' +
    '\n' +
    '      .sparkle {\n' +
    '        /* mix-blend-mode:luminosity */\n' +
    '      }\n' +
    '\n' +
    '      body {\n' +
    '        margin: 0;\n' +
    '\n' +
    '        text-align: center;\n' +
    '        padding: 0;\n' +
    '\n' +
    '        line-height: 2em;\n' +
    '\n' +
    '        font-family: "Times New Roman", Times, serif;\n' +
    '\n' +
    '        color: #000000;\n' +
    '      }\n' +
    '\n' +
    '      #header {\n' +
    '        /* position: absolute; */\n' +
    '            text-align: center;\n' +
    '            color: #C89568;\n' +
    '            font-family: Times New Roman;\n' +
    '            font-size: 35px;\n' +
    '            min-width: 400px;\n' +
    '            max-height: 100vh;\n' +
    '      }\n' +
    '      .header-item {\n' +
    '        opacity: 0;\n' +
    '        transition: all .5s ease-in-out;\n' +
    '        line-height: 1.5;\n' +
    '        margin: 0;\n' +
    '      }\n' +
    '      .header-item.show {\n' +
    '        opacity: 1;\n' +
    '      }\n' +
    '      #treeStarOutline {\n' +
    '        opacity: 0;\n' +
    '      }\n' +
    '      #mask {\n' +
    '        position: absolute;\n' +
    '        background-color: #000;\n' +
    '        width: 100%;\n' +
    '        height: 100%;\n' +
    '        font-size: 15rem;\n' +
    '        animation: shack 0.4s ease-in-out infinite;\n' +
    '        display: flex;\n' +
    '        align-items: center;\n' +
    '        justify-content: center;\n' +
    '        cursor: pointer;\n' +
    '        /* display: none; */\n' +
    '      }\n' +
    '\n' +
    '      @keyframes shack {\n' +
    '        0% {\n' +
    '          transform: rotate(0);\n' +
    '        }\n' +
    '        25% {\n' +
    '          transform: rotate(-10deg);\n' +
    '        }\n' +
    '        50% {\n' +
    '          transform: rotate(0);\n' +
    '        }\n' +
    '        75% {\n' +
    '          transform: rotate(10deg);\n' +
    '        }\n' +
    '        100% {\n' +
    '          transform: rotate(0);\n' +
    '        }\n' +
    '      }\n' +
    '      #stars {\n' +
    '        position: absolute;\n' +
    '        width: 100%;\n' +
    '        height: 100%;\n' +
    '        z-index: -1;\n' +
    '      }\n' +
    '    </style>\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <div id="mask">🎄</div>\n' +
    '    <canvas id="stars"></canvas>\n' +
    '    <div class="main">\n' +
    '    <!-- partial:index.partial.html -->\n' +
    '    <svg\n' +
    '      class="mainSVG"\n' +
    '      xmlns="http://www.w3.org/2000/svg"\n' +
    '      xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
    '      viewBox="0 0 800 600"\n' +
    '    >\n' +
    '      <defs>\n' +
    '        <circle id="circ" class="particle" cx="0" cy="0" r="1" />\n' +
    '        <polygon\n' +
    '          id="star"\n' +
    '          class="particle"\n' +
    '          points="4.55,0 5.95,2.85 9.1,3.3 6.82,5.52 7.36,8.65 4.55,7.17 1.74,8.65 2.27,5.52 0,3.3 3.14,2.85 "\n' +
    '        />\n' +
    '        <polygon\n' +
    '          id="cross"\n' +
    '          class="particle"\n' +
    '          points="4,3.5 2.5,2 4,0.5 3.5,0 2,1.5 0.5,0 0,0.5 1.5,2 0,3.5 0.5,4 2,2.5 3.5,4 "\n' +
    '        />\n' +
    '        <path\n' +
    '          id="heart"\n' +
    '          class="particle"\n' +
    '          d="M2.9,0C2.53,0,2.2,0.18,2,0.47C1.8,0.18,1.47,0,1.1,0C0.49,0,0,0.49,0,1.1\n' +
    '\tC0,2.6,1.56,4,2,4s2-1.4,2-2.9C4,0.49,3.51,0,2.9,0z"\n' +
    '        />\n' +
    '\n' +
    '        <radialGradient\n' +
    '          id="grad"\n' +
    '          cx="3"\n' +
    '          cy="3"\n' +
    '          r="6"\n' +
    '          gradientUnits="userSpaceOnUse"\n' +
    '        >\n' +
    '          <stop offset="0" style="stop-color: red" />\n' +
    '          <stop offset="0.4" style="stop-color: #334673" />\n' +
    '          <stop offset="0.6" style="stop-color: hsl(37, 53%, 85%)" />\n' +
    '          <stop offset="0.9" style="stop-color: #fee8c7" />\n' +
    '          <stop offset="1" style="stop-color: red" />\n' +
    '        </radialGradient>\n' +
    '        <radialGradient\n' +
    '          id="dotGrad"\n' +
    '          cx="0"\n' +
    '          cy="0"\n' +
    '          r="50"\n' +
    '          gradientUnits="userSpaceOnUse"\n' +
    '        >\n' +
    '          <stop offset="0" style="stop-color: #ffffff; stop-opacity: 1" />\n' +
    '          <stop offset="0.1" style="stop-color: #0867c7; stop-opacity: 0.6" />\n' +
    '          <stop offset="1" style="stop-color: #081029; stop-opacity: 0" />\n' +
    '        </radialGradient>\n' +
    '\n' +
    '        <mask id="treePathMask">\n' +
    '          <path\n' +
    '            class="treePathMask"\n' +
    '            fill="none"\n' +
    '            stroke-width="18"\n' +
    '            stroke="#FFF"\n' +
    '            d="M252.9,447.9c0,0-30.8-21.6,33.9-44.7c64.7-23.1,46.2-37,33.9-41.6\n' +
    '    c-12.3-4.6-59.3-11.6-42.4-28.5s114-52.4,81.7-66.2c-32.4-13.9-58.5-10.8-35.4-29.3s66.2-101.7,70.9-115.6\n' +
    '    c4.4-13.2,16.9-18.5,24.7,0c7.7,18.5,44.7,100.1,67.8,115.6c23.1,15.4-10.8,21.6-26.2,24.7c-15.4,3.1-20,33.9,33.9,49.3\n' +
    '    c53.9,15.4,47.8,40.1,27.7,44.7c-20,4.6-63.2,4.6-27.7,32.4s98.6,21.6,61.6,60.1"\n' +
    '          />\n' +
    '        </mask>\n' +
    '        <mask id="treeBottomMask">\n' +
    '          <path\n' +
    '            class="treeBottomMask"\n' +
    '            stroke="#FFF"\n' +
    '            stroke-width="8"\n' +
    '            d="M207.5,484.1c0,0,58.5-43.1,211.1-3.1s191-16.9,191-16.9"\n' +
    '          />\n' +
    '        </mask>\n' +
    '        <mask id="treePotMask">\n' +
    '          <path\n' +
    '            class="treePotMask"\n' +
    '            stroke="#FFF"\n' +
    '            stroke-width="8"\n' +
    '            d="M374.3,502.5c0,0-4.6,20,7.7,29.3c12.3,9.2,40.1,7.7,50.8,0s10.8-23.1,10.8-29.3"\n' +
    '          />\n' +
    '        </mask>\n' +
    '\n' +
    '        <filter id="glow" x="-150%" y="-150%" width="280%" height="280%">\n' +
    '          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />\n' +
    '          <feGaussianBlur in="offOut" stdDeviation="16" result="blur" />\n' +
    '\n' +
    '          <feComponentTransfer>\n' +
    '            <feFuncR type="discrete" tableValues="0.8" />\n' +
    '            <feFuncG type="discrete" tableValues="0.3" />\n' +
    '            <feFuncB type="discrete" tableValues="0.2" />\n' +
    '            <!--<feFuncA type="linear" slope="1" intercept="0" />-->\n' +
    '          </feComponentTransfer>\n' +
    '\n' +
    '          <feComposite in="SourceGraphic" operator="over" />\n' +
    '        </filter>\n' +
    '      </defs>\n' +
    '      <g class="whole">\n' +
    '        <g class="pContainer"></g>\n' +
    '\n' +
    '        <g class="tree" mask="url(#treePathMask)">\n' +
    '          <path\n' +
    '            d="M252.95,447.85a20.43,20.43,0,0,1-5.64-6.24,14,14,0,0,1-1.91-8.22,16.93,16.93,0,0,1,3.06-8,33.16,33.16,0,0,1,5.79-6.28A74.78,74.78,0,0,1,268.54,410a163.48,163.48,0,0,1,15.52-6.84c10.54-3.93,21-8.07,30.72-13.46a80.83,80.83,0,0,0,7-4.37,37.51,37.51,0,0,0,6.13-5.24c1.75-1.92,3.14-4.18,3.25-6.35s-1.12-4.18-3-5.81a25,25,0,0,0-6.72-3.91,61.25,61.25,0,0,0-7.8-2.42c-5.41-1.4-10.91-2.72-16.38-4.32a84.17,84.17,0,0,1-16.2-6.19,28.26,28.26,0,0,1-3.86-2.5,15.06,15.06,0,0,1-3.44-3.63,9,9,0,0,1-1.51-5.47,10.22,10.22,0,0,1,.61-2.78,12.88,12.88,0,0,1,1.2-2.34,26.73,26.73,0,0,1,6.58-6.56c2.35-1.76,4.76-3.33,7.19-4.84,4.87-3,9.82-5.75,14.77-8.46,9.91-5.4,19.88-10.59,29.63-16.08,4.87-2.75,9.68-5.56,14.33-8.56A81.88,81.88,0,0,0,359.45,280a23,23,0,0,0,2.41-2.79,8.36,8.36,0,0,0,1.35-2.65,2.13,2.13,0,0,0-.17-1.7,5.53,5.53,0,0,0-1.88-1.77,13.15,13.15,0,0,0-1.49-.83c-.52-.26-1.1-.49-1.76-.77-1.27-.53-2.55-1-3.83-1.53q-3.86-1.48-7.8-2.77c-5.26-1.74-10.6-3.23-16-4.79-2.72-.79-5.47-1.58-8.29-2.61a31.74,31.74,0,0,1-4.33-1.92,14.39,14.39,0,0,1-2.29-1.53,8.74,8.74,0,0,1-2.22-2.66,7.2,7.2,0,0,1-.78-4,9.09,9.09,0,0,1,1-3.24,18.93,18.93,0,0,1,3-4.21,44.88,44.88,0,0,1,3.29-3.19c.56-.5,1.12-1,1.68-1.45l1.61-1.33a84,84,0,0,0,10.88-11.88,326.2,326.2,0,0,0,18.79-27.53c5.88-9.5,11.48-19.19,16.89-29S380.1,146.16,385,136.13c1.22-2.51,2.42-5,3.57-7.54s2.29-5.09,3.14-7.45l.36-1c.14-.38.26-.75.42-1.12.29-.75.64-1.48,1-2.21a25.51,25.51,0,0,1,2.65-4.21,19.15,19.15,0,0,1,3.76-3.69,13.74,13.74,0,0,1,5.24-2.42,12.11,12.11,0,0,1,6.12.25,14.59,14.59,0,0,1,5,2.79,20.59,20.59,0,0,1,3.47,3.79,30.33,30.33,0,0,1,2.5,4.1c.35.7.7,1.39,1,2.1l.46,1.05.4,1,1.64,3.84,3.39,7.67q6.88,15.32,14.36,30.37c5,10,10.18,19.94,15.69,29.65a274.94,274.94,0,0,0,17.9,28A73.36,73.36,0,0,0,487.74,233c.49.4,1,.8,1.48,1.15l1.7,1.19a35,35,0,0,1,3.66,3,17.84,17.84,0,0,1,3.32,4.08,10.83,10.83,0,0,1,1.14,2.94,8.54,8.54,0,0,1,0,3.54,10.27,10.27,0,0,1-3.22,5.39,20.71,20.71,0,0,1-4.15,2.91,49,49,0,0,1-8.4,3.46,154,154,0,0,1-16.77,4.09l-4.15.81a9.18,9.18,0,0,0-2.87,1.08,9.51,9.51,0,0,0-4,4.7,12.55,12.55,0,0,0-.67,6.58,19.5,19.5,0,0,0,2.46,6.74A37.19,37.19,0,0,0,468,295.75a75,75,0,0,0,14.14,7.86,129.67,129.67,0,0,0,15.58,5.49A141.4,141.4,0,0,1,513.88,315a75,75,0,0,1,15.19,8.65,37.29,37.29,0,0,1,6.55,6.24,21.05,21.05,0,0,1,4.31,8.49,14.43,14.43,0,0,1-1.24,9.88,18.08,18.08,0,0,1-6.66,6.94,26.74,26.74,0,0,1-8.56,3.33c-2.84.61-5.65,1.06-8.44,1.49-5.58.86-11.13,1.61-16.52,2.77a53.48,53.48,0,0,0-7.81,2.22c-2.43.94-4.81,2.22-6,3.93a4.34,4.34,0,0,0-.77,2.82,8.45,8.45,0,0,0,1,3.29,28,28,0,0,0,4.82,6.25,80.74,80.74,0,0,0,12.81,10.4c9.29,6,19.72,10.29,30.24,14.17,5.27,1.95,10.59,3.79,15.85,5.86,2.63,1,5.24,2.14,7.79,3.39a37.94,37.94,0,0,1,7.28,4.51,11.9,11.9,0,0,1,3.63,15.57,34.68,34.68,0,0,1-4.53,7.16,77.45,77.45,0,0,1-5.64,6.29,77.31,77.31,0,0,0,5.41-6.46,34.27,34.27,0,0,0,4.22-7.21,12.64,12.64,0,0,0,.88-8,12.44,12.44,0,0,0-4.71-6.43,37.71,37.71,0,0,0-7.15-4.16c-2.53-1.16-5.13-2.18-7.76-3.14-5.26-1.91-10.62-3.62-16-5.44-10.65-3.63-21.34-7.64-31.11-13.64a83.84,83.84,0,0,1-13.61-10.49,31.27,31.27,0,0,1-5.6-6.94,12,12,0,0,1-1.55-4.68,8.17,8.17,0,0,1,.19-2.7,8.56,8.56,0,0,1,1.09-2.5,12.1,12.1,0,0,1,3.6-3.44,24.27,24.27,0,0,1,4.08-2.08,57.3,57.3,0,0,1,8.36-2.56c5.59-1.31,11.19-2.17,16.71-3.12,2.76-.48,5.5-1,8.15-1.59a22.1,22.1,0,0,0,7-2.87,13.3,13.3,0,0,0,4.82-5.15,9.42,9.42,0,0,0,.69-6.53,16,16,0,0,0-3.42-6.33,33.25,33.25,0,0,0-5.73-5.27,69.74,69.74,0,0,0-14.19-7.8,135.81,135.81,0,0,0-15.61-5.42,135.53,135.53,0,0,1-16.3-5.51,81,81,0,0,1-15.41-8.31,43.39,43.39,0,0,1-12.6-13,25.53,25.53,0,0,1-3.34-9,19.13,19.13,0,0,1,1-10,16.17,16.17,0,0,1,6.69-8,15.88,15.88,0,0,1,5-1.93l4.13-.84a147.75,147.75,0,0,0,16-4,42.41,42.41,0,0,0,7.17-3,14,14,0,0,0,2.74-1.92,3.42,3.42,0,0,0,1.12-1.68,2.41,2.41,0,0,0-.43-1.61,11.07,11.07,0,0,0-2-2.4,28,28,0,0,0-2.92-2.31l-1.76-1.22c-.65-.46-1.26-.94-1.86-1.43a59,59,0,0,1-6.43-6.27c-2-2.19-3.79-4.44-5.54-6.74a267,267,0,0,1-18.55-28.74c-5.63-9.85-10.89-19.86-16-30s-9.91-20.31-14.57-30.61l-3.45-7.76L417,124.48l-.42-1-.39-.88c-.25-.59-.54-1.15-.82-1.71a22.74,22.74,0,0,0-1.89-3.09,13,13,0,0,0-2.2-2.42,7,7,0,0,0-2.31-1.33,4.49,4.49,0,0,0-2.22-.09,8.55,8.55,0,0,0-4.59,3.32,17.85,17.85,0,0,0-1.84,2.92c-.26.54-.51,1.07-.73,1.64-.12.27-.22.56-.32.85l-.35,1c-1.06,2.93-2.23,5.47-3.42,8.1s-2.42,5.16-3.67,7.7c-5,10.18-10.29,20.16-15.77,30.05s-11.17,19.66-17.16,29.28a310.2,310.2,0,0,1-19.39,28.11,90.46,90.46,0,0,1-12,12.85l-1.65,1.35c-.52.43-1,.85-1.53,1.29a38,38,0,0,0-2.79,2.65,12.42,12.42,0,0,0-1.94,2.57,2.33,2.33,0,0,0-.28.76c0,.11,0,0,0,.09a4.57,4.57,0,0,0,1.7,1.35,25.15,25.15,0,0,0,3.36,1.51c2.46.92,5.11,1.72,7.79,2.52,5.36,1.58,10.84,3.16,16.25,5q4.06,1.37,8.08,2.94c1.34.53,2.67,1.07,4,1.63.64.27,1.36.57,2.1.94a19.66,19.66,0,0,1,2.18,1.24,11.85,11.85,0,0,1,4,4.13,8.64,8.64,0,0,1,1,3.24,9.11,9.11,0,0,1-.27,3.23,14.48,14.48,0,0,1-2.42,4.85,29.32,29.32,0,0,1-3.14,3.56,87.46,87.46,0,0,1-14,10.47c-4.85,3-9.79,5.84-14.76,8.55-9.94,5.42-20,10.49-29.91,15.72-5,2.62-9.88,5.28-14.63,8.12-2.37,1.42-4.7,2.89-6.88,4.46a22.06,22.06,0,0,0-5.45,5.14,8,8,0,0,0-.76,1.39,5.36,5.36,0,0,0-.33,1.32,4.1,4.1,0,0,0,.69,2.53,15.62,15.62,0,0,0,5.49,4.62A80.14,80.14,0,0,0,298.56,353c5.31,1.66,10.73,3.06,16.18,4.58a64.81,64.81,0,0,1,8.26,2.74,27.74,27.74,0,0,1,7.69,4.74,13.65,13.65,0,0,1,3,3.81,9.27,9.27,0,0,1,1,5,11.14,11.14,0,0,1-1.54,4.7,19.09,19.09,0,0,1-2.8,3.67,40.6,40.6,0,0,1-6.81,5.54,83.78,83.78,0,0,1-7.41,4.35c-10.11,5.26-20.76,9.16-31.39,12.82a161.69,161.69,0,0,0-15.52,6.37A74.57,74.57,0,0,0,255,420a32.17,32.17,0,0,0-5.82,5.89,16.21,16.21,0,0,0-3.19,7.52,13.61,13.61,0,0,0,1.59,8A20.29,20.29,0,0,0,252.95,447.85Z"\n' +
    '            fill="#cb9866"\n' +
    '          />\n' +
    '          <path\n' +
    '            d="M207.5,484.06c7.05-5.11,15.14-8.66,23.34-11.63a177.13,177.13,0,0,1,25.29-6.88,263.65,263.65,0,0,1,52.22-4.49h3.28l3.28.09,6.56.19,6.55.39c2.18.13,4.37.26,6.54.48,4.35.39,8.71.74,13,1.28l6.51.75,6.49.91c17.3,2.5,34.41,6,51.36,10.19l12.62,3.2c4.18,1,8.34,2.18,12.55,3.06,8.38,2,16.82,3.63,25.29,5.13a353.5,353.5,0,0,0,51.17,5.47c17.11.32,34.36-.66,51-4.7a118.55,118.55,0,0,0,24.21-8.47,84.82,84.82,0,0,0,11.11-6.49,47.55,47.55,0,0,0,9.69-8.53,48.1,48.1,0,0,1-9,9.45,85.1,85.1,0,0,1-10.81,7.45,116.56,116.56,0,0,1-24.23,10.24,165.66,165.66,0,0,1-25.79,5.35,232.1,232.1,0,0,1-26.27,1.71c-8.77,0-17.55-.24-26.26-1.09-2.18-.2-4.37-.35-6.54-.6l-6.52-.78c-4.36-.46-8.67-1.19-13-1.82-8.64-1.37-17.22-3.09-25.74-5-4.28-.87-8.5-2-12.75-3l-12.62-3.11q-25.06-6.37-50.58-10.47a426.37,426.37,0,0,0-51.3-5.3c-8.59-.42-17.19-.29-25.78,0a240.1,240.1,0,0,0-25.68,2.24,186.57,186.57,0,0,0-25.27,5.19c-4.15,1.16-8.26,2.49-12.28,4.05-2,.79-4,1.6-6,2.52A50.82,50.82,0,0,0,207.5,484.06Z"\n' +
    '            fill="#cb9866"\n' +
    '          />\n' +
    '          <path\n' +
    '            d="M374.32,502.55a48.15,48.15,0,0,0,1.24,14.35c1.15,4.52,3.29,8.64,6.49,11.35a18.5,18.5,0,0,0,5.51,3.14,39.06,39.06,0,0,0,6.41,1.82,65.78,65.78,0,0,0,13.68,1.12,72.9,72.9,0,0,0,13.72-1.44,44.51,44.51,0,0,0,6.46-1.85,17.75,17.75,0,0,0,5.51-3.15,25.45,25.45,0,0,0,7.24-11.17,52,52,0,0,0,1.9-6.91c.48-2.37.83-4.8,1.18-7.25a55.16,55.16,0,0,1,.64,7.42,40.11,40.11,0,0,1-.52,7.56,31.23,31.23,0,0,1-2.19,7.5,24.37,24.37,0,0,1-4.46,6.79,25.16,25.16,0,0,1-6.61,5,39.72,39.72,0,0,1-7.4,3A58.55,58.55,0,0,1,407.75,542a55,55,0,0,1-15.47-1.9,36.65,36.65,0,0,1-7.46-3,25.3,25.3,0,0,1-6.6-5,19.63,19.63,0,0,1-2.5-3.34,21.72,21.72,0,0,1-1.79-3.67,27.66,27.66,0,0,1-1.65-7.7,38.16,38.16,0,0,1,2-14.87Z"\n' +
    '            fill="#cb9866"\n' +
    '          />\n' +
    '        </g>\n' +
    '        <path\n' +
    '          class="treeBottomPath"\n' +
    '          stroke="none"\n' +
    '          fill="none"\n' +
    '          stroke-width="8"\n' +
    '          d="M207.5,484.1c0,0,58.5-43.1,211.1-3.1s191-16.9,191-16.9"\n' +
    '        />\n' +
    '        <path\n' +
    '          class="treePath"\n' +
    '          fill="none"\n' +
    '          stroke="none"\n' +
    '          stroke-miterlimit="10"\n' +
    '          d="M252.95,447.85s-30.81-21.57,33.89-44.68,46.22-37,33.89-41.6-59.32-11.56-42.37-28.5,114-52.38,81.66-66.25S301.48,256,324.59,237.55,390.84,135.87,395.46,122c4.41-13.24,16.95-18.49,24.65,0s44.68,100.14,67.79,115.55-10.78,21.57-26.19,24.65-20,33.89,33.89,49.3,47.76,40.06,27.73,44.68-63.17,4.62-27.73,32.35,98.6,21.57,61.63,60.09"\n' +
    '        />\n' +
    '        <path\n' +
    '          class="treeBottom"\n' +
    '          mask="url(#treeBottomMask)"\n' +
    '          d="M207.5,484.06c7.05-5.11,15.14-8.66,23.34-11.63a177.13,177.13,0,0,1,25.29-6.88,263.65,263.65,0,0,1,52.22-4.49h3.28l3.28.09,6.56.19,6.55.39c2.18.13,4.37.26,6.54.48,4.35.39,8.71.74,13,1.28l6.51.75,6.49.91c17.3,2.5,34.41,6,51.36,10.19l12.62,3.2c4.18,1,8.34,2.18,12.55,3.06,8.38,2,16.82,3.63,25.29,5.13a353.5,353.5,0,0,0,51.17,5.47c17.11.32,34.36-.66,51-4.7a118.55,118.55,0,0,0,24.21-8.47,84.82,84.82,0,0,0,11.11-6.49,47.55,47.55,0,0,0,9.69-8.53,48.1,48.1,0,0,1-9,9.45,85.1,85.1,0,0,1-10.81,7.45,116.56,116.56,0,0,1-24.23,10.24,165.66,165.66,0,0,1-25.79,5.35,232.1,232.1,0,0,1-26.27,1.71c-8.77,0-17.55-.24-26.26-1.09-2.18-.2-4.37-.35-6.54-.6l-6.52-.78c-4.36-.46-8.67-1.19-13-1.82-8.64-1.37-17.22-3.09-25.74-5-4.28-.87-8.5-2-12.75-3l-12.62-3.11q-25.06-6.37-50.58-10.47a426.37,426.37,0,0,0-51.3-5.3c-8.59-.42-17.19-.29-25.78,0a240.1,240.1,0,0,0-25.68,2.24,186.57,186.57,0,0,0-25.27,5.19c-4.15,1.16-8.26,2.49-12.28,4.05-2,.79-4,1.6-6,2.52A50.82,50.82,0,0,0,207.5,484.06Z"\n' +
    '          fill="#cb9866"\n' +
    '        />\n' +
    '        <path\n' +
    '          class="treePot"\n' +
    '          mask="url(#treePotMask)"\n' +
    '          d="M374.32,502.55a48.15,48.15,0,0,0,1.24,14.35c1.15,4.52,3.29,8.64,6.49,11.35a18.5,18.5,0,0,0,5.51,3.14,39.06,39.06,0,0,0,6.41,1.82,65.78,65.78,0,0,0,13.68,1.12,72.9,72.9,0,0,0,13.72-1.44,44.51,44.51,0,0,0,6.46-1.85,17.75,17.75,0,0,0,5.51-3.15,25.45,25.45,0,0,0,7.24-11.17,52,52,0,0,0,1.9-6.91c.48-2.37.83-4.8,1.18-7.25a55.16,55.16,0,0,1,.64,7.42,40.11,40.11,0,0,1-.52,7.56,31.23,31.23,0,0,1-2.19,7.5,24.37,24.37,0,0,1-4.46,6.79,25.16,25.16,0,0,1-6.61,5,39.72,39.72,0,0,1-7.4,3A58.55,58.55,0,0,1,407.75,542a55,55,0,0,1-15.47-1.9,36.65,36.65,0,0,1-7.46-3,25.3,25.3,0,0,1-6.6-5,19.63,19.63,0,0,1-2.5-3.34,21.72,21.72,0,0,1-1.79-3.67,27.66,27.66,0,0,1-1.65-7.7,38.16,38.16,0,0,1,2-14.87Z"\n' +
    '          fill="#cb9866"\n' +
    '        />\n' +
    '        <g class="treeStar">\n' +
    '          <path\n' +
    '            class="treeStarOutline"\n' +
    '            id="treeStarOutline"\n' +
    '            opacity="0"\n' +
    '            d="M421,53.27c5,.83,10.08,1.52,15.15,2.13l3.8.45,1.9.21c.33,0,.6.06,1,.12a2.41,2.41,0,0,1,1.27.66,2.52,2.52,0,0,1,.56,2.76,3.42,3.42,0,0,1-.78,1.07l-.66.69-2.65,2.77c-1.78,1.83-3.54,3.68-5.35,5.48l-2.7,2.71L429.81,75l-.69.67-.34.33,0,0h0a.14.14,0,0,0,0-.08s0-.07,0,0l0,.24.07.47.57,3.78c.4,2.52.71,5,1.06,7.57l.94,7.59.22,1.9c0,.06,0,.19,0,.34a2.21,2.21,0,0,1,0,.43,2.72,2.72,0,0,1-.21.84,2.85,2.85,0,0,1-2.65,1.75,2.57,2.57,0,0,1-.82-.14,3.12,3.12,0,0,1-.65-.3l-1.64-1-6.58-3.91-6.63-3.81-3.34-1.86-.42-.23-.21-.12-.14-.07a1,1,0,0,0-.59,0,1.15,1.15,0,0,0-.31.12l-.43.22-.85.44c-2.27,1.17-4.54,2.31-6.79,3.52s-4.51,2.38-6.74,3.61l-3.36,1.83-.84.46a3.07,3.07,0,0,1-1.28.44,2.68,2.68,0,0,1-2.84-3l.15-1,.29-1.89.57-3.78,1.18-7.56,1.24-7.52a.13.13,0,0,0,0,.08l0,0-.1-.09-.17-.17-1.37-1.34-2.73-2.68-10.93-10.7-.34-.33a4,4,0,0,1-.64-.84,3.63,3.63,0,0,1-.43-2.12,3.68,3.68,0,0,1,2.64-3.17l.52-.11.25,0,.47-.06.95-.12,1.9-.25,7.58-1,7.6-.9,1.9-.23.95-.11c.24,0,.11,0,.09,0l-.09.05-.07.08,0,0,.09-.16.46-.84.91-1.68c2.41-4.5,4.95-8.92,7.51-13.34l1-1.66.48-.83.24-.41.13-.23a3.49,3.49,0,0,1,.22-.33,2.66,2.66,0,0,1,2.83-.9,2.52,2.52,0,0,1,1.26.84,2.85,2.85,0,0,1,.37.62l.18.44q1.45,3.54,3,7.06c1,2.36,2,4.68,3.06,7,.51,1.17,1.06,2.32,1.59,3.48l.8,1.74a2.12,2.12,0,0,0,.45.75A1.42,1.42,0,0,0,421,53.27Zm-.06.39a1.82,1.82,0,0,1-1-.46,2.52,2.52,0,0,1-.56-.86l-.84-1.72c-.56-1.14-1.11-2.3-1.69-3.43-1.17-2.27-2.29-4.56-3.5-6.81s-2.39-4.51-3.6-6.76l-.23-.42a.8.8,0,0,0-.14-.18.58.58,0,0,0-.33-.15.56.56,0,0,0-.57.28L407,36.48c-2.09,4.66-4.2,9.31-6.45,13.88l-.83,1.72-.42.86-.13.27a3.57,3.57,0,0,1-2,1.67,4.26,4.26,0,0,1-.84.18l-.95.13-1.89.27L386,56.53l-7.58,1-3.49.44a.45.45,0,0,0,.34-.4.51.51,0,0,0-.07-.28s-.06-.08-.07-.08l.33.34,10.65,11,2.66,2.75,1.33,1.37.4.42a3.41,3.41,0,0,1,.53.84,3.36,3.36,0,0,1,.24,1.95c-.53,2.56-1,5-1.57,7.52L388,90.85l-.83,3.73-.42,1.87-.2.9a.5.5,0,0,0,0,.3.58.58,0,0,0,.52.37,6.28,6.28,0,0,0,1.38-.58l3.46-1.62q3.47-1.61,6.9-3.3c2.3-1.1,4.57-2.26,6.85-3.39l.86-.43.43-.21a2.55,2.55,0,0,1,.57-.22,2.21,2.21,0,0,1,1.29.08l.29.13.21.11.42.23,3.37,1.81,6.8,3.51,6.85,3.41,1.71.85c.19.09.15.07.22.08a.25.25,0,0,0,.12,0,.42.42,0,0,0,.21-.1.33.33,0,0,0,.1-.19.2.2,0,0,0,0-.09.1.1,0,0,0,0,0l0-.13L428.74,96l-1.42-7.52c-.43-2.51-.9-5-1.29-7.54l-.6-3.78-.08-.47,0-.24a3.75,3.75,0,0,1,0-.45,3.37,3.37,0,0,1,.52-1.9,3.33,3.33,0,0,1,.3-.4,3.73,3.73,0,0,1,.3-.3l.35-.32.7-.65,2.81-2.59,2.86-2.54c1.9-1.71,3.84-3.36,5.77-5l2.91-2.49a12.91,12.91,0,0,0,1.15-1,.7.7,0,0,0-.06-.79.73.73,0,0,0-.37-.26c-.23-.06-.6-.13-.89-.2l-1.87-.4L436,56.39C431,55.39,426,54.45,420.95,53.66Z"\n' +
    '            fill="#FFFCF9"\n' +
    '          />\n' +
    '          <path\n' +
    '            d="M408.12,83.45l-17.78,8.94,3.72-19.55-14-14.15,19.74-2.5,9.13-17.68,8.48,18L437,59.73l-14.5,13.63,3,19.67Z"\n' +
    '            fill="#C89568"\n' +
    '          />\n' +
    '        </g>\n' +
    '        <circle class="sparkle" fill="url(#dotGrad)" cx="0" cy="0" r="50" />\n' +
    '      </g>\n' +
    '    </svg>\n' +
    '    <h1 id="header"></h1>\n' +
    '  </div>\n' +
    '    <!-- partial -->\n' +
    '    <script>\n' +
    '      /*!\n' +
    ' * GSAP 3.11.3\n' +
    ' * https://greensock.com\n' +
    ' * \n' +
    ' * @license Copyright 2022, GreenSock. All rights reserved.\n' +
    ' * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.\n' +
    ' * @author: Jack Doyle, jack@greensock.com\n' +
    ' */\n' +
    '\n' +
    '!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&Ce}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new jt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Ot(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=ct.length,i=ct.slice(0);for(dt={},t=ct.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){ct.length&&ma(),t.render(e,r,i||B&&e<0&&(t._initted||t._startAt)),ct.length&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||L,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}($(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(B?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||V)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=Ga(t.rawTime(),e),(!e._dur||kt(0,e.totalDuration(),r)-e._tTime>V)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-V}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==L?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Ht(t,e,n),t._initted?!r&&t._pt&&!B&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Et.frame?(ct.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Ut?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Gt(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Ot(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Ot(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=Yt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,c=(r||p).length,d=y[c];if(!d){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(d=y[c]=[],i=T?Math.min(f,c)*w-.5:m%f,n=f===U?0:T?c*x/f-.5:m/f|0,l=U,u=h=0;u<c;u++)a=u%f-i,s=n-(u/f|0),d[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(d),d.max=h-l,d.min=l,d.v=c=(parseFloat(p.amount)||parseFloat(p.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),d.b=c<0?g-c:g,d.u=Ya(p.amount||p.each)||0,_=_&&c<0?Lt(_):_}return c=(d[t]-d.min)/d.max||0,ja(d.b+(_?_(c):c)*d.v)+d.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=$(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Ot(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa($(t)?!e:!0===r?!!(r=0):!i,function(){return $(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!B),t.progress()<1&&Ct(t,"onInterrupt"),t}function yb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*At+.5|0}function zb(e,r,i){var n,a,s,o,u,h,l,f,c,d,p=e?t(e)?[e>>16,e>>8&At,e&At]:0:St.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),St[e])p=St[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&At,p&At,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&At,e&At]}else if("hsl"===e.substr(0,3))if(p=d=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=yb(o+1/3,n,a),p[1]=yb(o,n,a),p[2]=yb(o-1/3,n,a);else p=e.match(tt)||St.transparent;p=p.map(Number)}return r&&!d&&(n=p[0]/At,a=p[1]/At,s=p[2]/At,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(c=l-f,u=.5<h?c/(2-l-f):c/(l+f),o=l===n?(a-s)/c+(a<s?6:0):l===a?(s-n)/c+2:(n-a)/c+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Ab(t){var r=[],i=[],n=-1;return t.split(Rt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Bb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Rt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=zb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Ab(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Rt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Rt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Eb(t){var e,r=t.join(" ");if(Rt.lastIndex=0,Rt.test(r))return e=Dt.test(r),t[1]=Bb(t[1],e),t[0]=Bb(t[0],e,Ab(t[1])),!0}function Nb(t){var e=(t+"").split("("),r=Ft[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Ft._CE&&It.test(t)?Ft._CE("",t):r}function Pb(t,e){for(var r,i=t._first;i;)i instanceof Ut?Pb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Pb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Rb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Ft[t]=ot[t]=a,Ft[n=t.toLowerCase()]=r,a)Ft[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Ft[t+"."+e]=a[e]}),a}function Sb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Tb(r,t,e){function Hm(t){return 1===t?1:i*Math.pow(2,-10*t)*G((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/W*(Math.asin(1/i)||0),s="out"===r?Hm:"in"===r?function(t){return 1-Hm(1-t)}:Sb(Hm);return n=W/n,s.config=function(t,e){return Tb(r,t,e)},s}function Ub(e,r){function Pm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Pm:"in"===e?function(t){return 1-Pm(1-t)}:Sb(Pm);return t.config=function(t){return Ub(e,t)},t}var I,B,l,L,h,n,a,i,o,f,c,d,p,_,m,g,b,k,M,O,C,A,D,E,z,F,Y,N,j={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},q={duration:.5,overwrite:!1,delay:0},U=1e8,V=1/U,W=2*Math.PI,X=W/4,H=0,K=Math.sqrt,Z=Math.cos,G=Math.sin,J="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},$=Array.isArray,tt=/(?:-?\\.?\\d|\\.)+/gi,et=/[-+=.]*\\d+[.e\\-+]*\\d*[e\\-+]*\\d*/g,rt=/[-+=.]*\\d+[.e-]*\\d*[a-z%]*/g,it=/[-+=.]*\\d+\\.?\\d*(?:e-|e\\+)?\\d*/gi,nt=/[+-]=-?[.\\d]+/,at=/[^,\'"\\[\\]\\s]+/gi,st=/^[+\\-=e\\s\\d]*\\d+[.\\d]*([a-z]*|%)\\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},ct=[],dt={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*($(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},kt=function _clamp(t,e,r){return r<t?t:e<r?e:r},Mt=[].slice,Ot=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&zt()?$(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Ot(t)):i.push(t)})||i}(t,i):_a(t)?Mt.call(t,0):t?[t]:[]:Mt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},Ct=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&ct.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},At=255,St={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Rt=function(){var t,e="(?:\\\\b(?:(?:rgb|rgba|hsl|hsla)\\\\(.+?\\\\))|\\\\B#(?:[0-9a-f]{3,4}){1,2}\\\\b";for(t in St)e+="|"+t+"\\\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\\(/,Et=(M=Date.now,O=500,C=33,A=M(),D=A,z=E=1e3/240,g={time:0,frame:0,tick:function tick(){wl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=Ce,(h.gsapVersions||(h.gsapVersions=[])).push(Ce.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),m=h.requestAnimationFrame),p&&g.sleep(),_=m||function(t){return setTimeout(t,z-1e3*g.time+1|0)},d=1,wl(2))},sleep:function sleep(){(m?h.cancelAnimationFrame:clearTimeout)(p),d=0,_=T},lagSmoothing:function lagSmoothing(t,e){O=t||1e8,C=Math.min(e,O,0)},fps:function fps(t){E=1e3/(t||240),z=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),F[e?"unshift":"push"](a),zt(),a},remove:function remove(t,e){~(e=F.indexOf(t))&&F.splice(e,1)&&e<=k&&k--},_listeners:F=[]}),zt=function _wake(){return!d&&Et.wake()},Ft={},It=/^[\\d.\\-M][\\d.\\-,\\s]/,Bt=/["\']/g,Lt=function _invertEase(e){return function(t){return 1-e(1-t)}},Yt=function _parseEase(t,e){return t&&(s(t)?t:Ft[t]||Nb(t))||e};function wl(t){var e,r,i,n,a=M()-D,s=!0===t;if(O<a&&(A+=a-C),(0<(e=(i=(D+=a)-A)-z)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,z+=e+(E<=e?4:E-e),r=1),s||(p=_(wl)),r)for(k=0;k<F.length;k++)F[k](i,b,n,t)}function en(t){return t<N?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Rb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Ft.Linear.easeNone=Ft.none=Ft.Linear.easeIn,Rb("Elastic",Tb("in"),Tb("out"),Tb()),Y=7.5625,N=1/2.75,Rb("Bounce",function(t){return 1-en(1-t)},en),Rb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Rb("Circ",function(t){return-(K(1-t*t)-1)}),Rb("Sine",function(t){return 1===t?1:1-Z(t*X)}),Rb("Back",Ub("in"),Ub("out"),Ub()),Ft.SteppedEase=Ft.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*kt(0,.99999999,t)|0)+n)*r}}},q.ease=Ft["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var Nt,jt=function GSCache(t,e){this.id=H++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:re},qt=((Nt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Nt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Nt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Nt.totalTime=function totalTime(t,e){if(zt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===V||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},Nt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Nt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Nt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Nt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},Nt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-V?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-V?0:this._rts,this.totalTime(kt(-this._delay,this._tDur,e),!0),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},Nt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==V&&(this._tTime-=V)))),this):this._ps},Nt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},Nt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},Nt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},Nt.revert=function revert(t){void 0===t&&(t=lt);var e=B;return B=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),B=e,this},Nt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this.vars.immediateRender?-1:r},Nt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},Nt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},Nt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Nt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},Nt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},Nt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Nt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Nt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Nt.resume=function resume(){return this.paused(!1)},Nt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-V:0)),this):this._rts<0},Nt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-V,this},Nt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-V))},Nt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Nt.then=function then(t){var i=this;return new Promise(function(e){function zo(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?zo():i._prom=zo})},Nt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),d||Et.wake()}qa(qt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-V,_prom:0,_ps:!1,_rts:1});var Ut=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),L&&Ka(t.parent||L,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Gt(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,Gt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Gt(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==L&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(d=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),c=Tt(this._tTime,o),!_&&this._tTime&&c!==s&&(c=s),d&&1&s&&(i=g-i,p=1),s!==c&&!this._lock){var T=d&&1&c,b=T===(d&&1&s);if(s<c&&(T=!T),_=T?0:g,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Pb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Ct(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-V);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||B&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-V:V);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-V)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&Ct(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(Ct(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof qt)){if($(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=Gt.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Gt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Et.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Gt.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Vt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Ot(e),s=this._first,o=t(r);s;)s instanceof Gt?la(s._targets,a)&&(o?(!Vt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Gt.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||V,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+V)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===L&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(L._ts&&(na(L,Ga(t,L)),f=Et.frame),Et.frame>=mt){mt+=j.autoSleep||120;var e=L._first;if((!e||!e._ts)&&j.autoSleep&&Et._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Et.sleep()}}},Timeline}(qt);qa(Ut.prototype,{_lock:0,_hasPause:0,_forcing:0});function _b(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Qt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||$(t)||J(t))return r(t)?Qt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Qt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new pe(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==c))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function fc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if($(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Vt,Wt,Xt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var c,d=t[e],p="get"!==i?i:s(d)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=s(d)?l?ee:$t:Jt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(c=ka(p,n)+(Ya(p)||0))&&0!==c||(n=c))),!f||p!==n||Wt)return isNaN(p*n)||""===n?(d||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,c,d,p,_=new pe(this._pt,t,e,0,1,se,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(d=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?ka(c,l)-c:parseFloat(l)-c,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||d)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||j.stringFilter,l)):(c=new pe(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof d?ae:ne,0,_),l&&(c.fp=l),u&&c.modifier(u,this,t),this._pt=c)},Ht=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.onUpdateParams,k=m.callbackScope,M=m.runBackwards,O=m.yoyoEase,P=m.keyframes,C=m.autoRevert,A=t._dur,S=t._startAt,R=t._targets,D=t.parent,E=D&&"nested"===D.data?D.vars.targets:R,z="auto"===t._overwrite&&!I,F=t.timeline;if(!F||P&&g||(g="none"),t._ease=Yt(g,q.ease),t._yEase=O?Lt(Yt(!0===O?g:O,q.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!F&&!!m.runBackwards,!F||P&&!m.stagger){if(p=(l=R[0]?fa(R[0]).harness:0)&&m[l.prop],i=ua(m,ft),S&&(S._zTime<0&&S.progress(1),e<0&&M&&y&&!C?S.render(-1,!0):S.revert(M&&A?ht:ut),S._lazy=0),v){if(za(t._startAt=Gt.set(R,qa({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:w(T),startAt:null,delay:0,onUpdate:b,onUpdateParams:x,callbackScope:k,stagger:0},v))),e<(t._startAt._dp=0)&&(B||!y&&!C)&&t._startAt.revert(ht),y&&A&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(M&&A&&!S)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&w(T),immediateRender:y,stagger:0,parent:D},i),p&&(a[l.prop]=p),za(t._startAt=Gt.set(R,a)),e<(t._startAt._dp=0)&&(B?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,V,V);for(t._pt=t._ptCache=0,T=A&&w(T)||T&&!A,n=0;n<R.length;n++){if(h=(o=R[n])._gsap||ea(R)[n]._gsap,t._ptLookup[n]=c={},dt[h.id]&&ct.length&&ma(),d=E===R?n:E.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,d,E)&&(t._pt=s=new pe(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){c[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=_b(a,i,t,d,o,E))?f.priority&&(u=1):c[a]=s=Xt.call(t,o,a,"get",i[a],d,E,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),z&&t._pt&&(Vt=t,L.killTweensOf(o,c,t.globalTime(e)),_=!t.parent,Vt=0),t._pt&&T&&(dt[h.id]=1)}u&&de(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,P&&e<=0&&F.render(U,!0,!0)},Qt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Kt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zt={};ha(Kt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Zt[t]=1});var Gt=function(z){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,c,d,p=(a=z.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,k=p.defaults,M=p.scrollTrigger,O=p.yoyoEase,P=r.parent||L,C=($(e)||J(e)?t(e[0]):"length"in r)?[e]:Ot(e);if(a._targets=C.length?ea(C):R("GSAP target "+e+" not found. https://greensock.com",!j.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Ut({data:"nested",defaults:k||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,c=T&&eb(T),v(T))for(l in T)~Kt.indexOf(l)&&((d=d||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Zt)).stagger=0,O&&(u.yoyoEase=O),d&&yt(u,d),f=C[o],u.duration=+Qt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Qt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,c?c(o,f,C):0),s._ease=Ft.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=Yt(x.ease||r.ease||"none");var A,S,D,E=0;if($(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||fc(l,x[l],u,x.easeEach);for(l in u)for(A=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<A.length;o++)(D={ease:(S=A[o]).e,duration:(S.t-(o?A[o-1].t:0))/100*_})[l]=S.v,s.to(C,D,E),E+=D.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||I||(Vt=_assertThisInitialized(a),L.killTweensOf(C),Vt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-V,a.render(Math.max(0,-m)||0)),M&&La(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,z);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c=this._time,d=this._tDur,p=this._dur,_=t<0,m=d-V<t&&!_?d:t<V?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===d?(a=this._repeat,i=p):((a=~~(m/s))&&a===m/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===c&&!r&&this._initted)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Pb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(c!==this._time)return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!c&&!e&&(Ct(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-V:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),Ct(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ct(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!c||!(m||c||u)||(Ct(this,m===d?"onComplete":"onReverseComplete",!0),!this._prom||m<d&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=kt(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||B||i||t._zTime===V||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?V:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&Ct(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ct(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||B||(Ct(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),z.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i){d||Et.wake(),this._ts||this.play();var n,a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Ht(this,a),n=this._ease(a/this._dur),function _updatePropTweens(t,e,r,i,n,a,s){var o,u,h,l,f=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!f)for(f=t._ptCache[e]=[],h=t._ptLookup,l=t._targets.length;l--;){if((o=h[l][e])&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==e&&o.fp!==e;)o=o._next;if(!o)return Wt=1,t.vars[e]="+=0",Ht(t,s),Wt=0,1;f.push(o)}for(l=f.length;l--;)(o=(u=f[l])._pt||u).s=!i&&0!==i||n?o.s+(i||0)+a*o.c:i,o.c=r-o.s,u.e&&(u.e=ia(r)+Ya(u.e)),u.b&&(u.b=o.s+Ya(u.b))}(this,t,e,r,i,n,a)?this.resetTo(t,e,r,i):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Vt&&!0!==Vt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,c=t?Ot(t):f,d=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,c))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~c.indexOf(f[l]))for(u in a=d[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return L.killTweensOf(t,e,r)},Tween}(qt);qa(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var t=new Ut,e=Mt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function nc(t,e,r){return t.setAttribute(e,r)}function vc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Jt=function _setterPlain(t,e,r){return t[e]=r},$t=function _setterFunc(t,e,r){return t[e](r)},ee=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},re=function _getSetter(t,e){return s(t[e])?$t:u(t[e])&&t.setAttribute?nc:Jt},ne=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},ae=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},se=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},oe=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},le=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},fe=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},de=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},pe=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=vc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ne,this.d=s||this,this.set=o||Jt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=Gt,ot.TimelineLite=ot.TimelineMax=Ut,L=new Ut({sortChildren:!1,defaults:q,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),j.stringFilter=Eb;function Cc(t){return(Te[t]||we).map(function(t){return t()})}function Dc(){var t=Date.now(),o=[];2<t-xe&&(Cc("matchMediaInit"),ye.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Cc("matchMediaRevert"),o.forEach(function(t){return t.onMatch(t)}),xe=t,Cc("matchMedia"))}var _e,ye=[],Te={},we=[],xe=0,ke=((_e=Context.prototype).add=function add(t,i,n){function Cw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Cw,t===s?Cw(a):t?a[t]=Cw:Cw},_e.ignore=function ignore(t){var e=l;l=null,t(this),l=e},_e.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof Gt&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},_e.clear=function clear(){this._r.length=this.data.length=0},_e.kill=function kill(e,t){var r=this;if(e){var i=this.getTweens();this.data.forEach(function(t){"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return i.splice(i.indexOf(t),1)}))}),i.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1}).forEach(function(t){return t.t.revert(e)}),this.data.forEach(function(t){return!(t instanceof qt)&&t.revert&&t.revert(e)}),this._r.forEach(function(t){return t(e,r)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),t){var n=ye.indexOf(this);~n&&ye.splice(n,1)}},_e.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var Me,Oe=((Me=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new ke(0,r||this.scope),o=s.conditions={};for(n in this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ye.indexOf(s)<0&&ye.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Dc):i.addEventListener("change",Dc));return a&&e(s),this},Me.revert=function revert(t){this.kill(t||{})},Me.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t}var Pe={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:oe,add:Xt,kill:fe,modifier:le,rawVars:0},a={targetTest:0,get:0,getSetter:re,aliases:{},register:0};if(zt(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(Ce,i,pe)}(t)})},timeline:function timeline(t){return new Ut(t)},getTweensOf:function getTweensOf(t,e){return L.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Ot(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Ot(r)).length){var n=r.map(function(t){return Ce.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&oe(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function Ux(t,e,r){return n.resetTo(i,t,e,r)}var r,n=Ce.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return Ux.tween=n,Ux},isTweening:function isTweening(t){return 0<L.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Yt(t.ease,q.ease)),ta(q,t||{})},config:function config(t){return ta(j,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Ot(t),qa(e||{},a),r)},r&&(Ut.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Ft[t]=Yt(e)},parseEase:function parseEase(t,e){return arguments.length?Yt(t,e):Ft},getById:function getById(t){return L.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Ut(t);for(n.smoothChildTiming=w(t.smoothChildTiming),L.remove(n),n._dp=0,n._time=n._tTime=L._time,r=L._first;r;)i=r._next,!e&&!r._dur&&r instanceof Gt&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(L,n,0),n},context:function context(t,e){return t?new ke(t,e):l},matchMedia:function matchMedia(t){return new Oe(t)},matchMediaRefresh:function matchMediaRefresh(){return ye.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Dc()},addEventListener:function addEventListener(t,e){var r=Te[t]||(Te[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=Te[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return $(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return $(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return kt(e,r,t)})},splitColor:zb,toArray:Ot,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),c={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if($(e)&&!$(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt($(e)?[]:{},e));if(!u){for(s in i)Xt.call(c,e,s,"get",i[s]);a=function func(t){return oe(t,c)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Et,updateRoot:Ut.updateRoot,plugins:pt,globalTimeline:L,core:{PropTween:pe,globals:S,Tween:Gt,Timeline:Ut,Animation:qt,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return B},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return I=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Pe[t]=Gt[t]}),Et.add(Ut.updateRoot),c=Pe.to({},{duration:0});function Hc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Jc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Hc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var Ce=Pe.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)B?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Jc("roundProps",fb),Jc("modifiers"),Jc("snap",gb))||Pe;Gt.version=Ut.version=Ce.version="3.11.3",o=1,x()&&zt();function td(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function ud(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function vd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function wd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function yd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function zd(t,e,r){return t.style[e]=r}function Ad(t,e,r){return t.style.setProperty(e,r)}function Bd(t,e,r){return t._gsap[e]=r}function Cd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Dd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Ed(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Hd(t,e){var r=this,i=this.target,n=i.style;if(t in rr){if(this.tfm=this.tfm||{},"transform"!==t&&(~(t=hr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=mr(i,t)}):this.tfm[t]=i._gsap.x?i._gsap[t]:mr(i,t)),0<=this.props.indexOf(lr))return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(fr,e,"")),t=lr}(n||e)&&this.props.push(t,e,n[t])}function Id(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Jd(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty(r[t].replace(sr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),!(t=Fe())||t.isStart||n[lr]||(Id(n),a.uncache=1)}}function Kd(t,e){var r={target:t,props:[],revert:Jd,save:Hd};return e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Md(t,e){var r=Se.createElementNS?Se.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Se.createElement(t);return r.style?r:Se.createElement(t)}function Nd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(sr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Nd(t,dr(e)||e,1)||""}function Qd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ae=window,Se=Ae.document,Re=Se.documentElement,Ee=Md("div")||{style:{}},Md("div"),lr=dr(lr),fr=lr+"Origin",Ee.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ie=!!dr("perspective"),Fe=Ce.core.reverting,De=1)}function Rd(t){var e,r=Md("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Rd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Sd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Td(e){var r;try{r=e.getBBox()}catch(t){r=Rd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Rd||(r=Rd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Sd(e,["x","cx","x1"])||0,y:+Sd(e,["y","cy","y1"])||0,width:0,height:0}}function Ud(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Td(t))}function Vd(t,e){if(e){var r=t.style;e in rr&&e!==fr&&(e=lr),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(sr,"-$1").toLowerCase())):r.removeAttribute(e)}}function Wd(t,e,r,i,n,a){var s=new pe(t._pt,e,r,0,1,a?yd:xd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function Zd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Ee.style,f=or.test(e),c="svg"===t.tagName.toLowerCase(),d=(c?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||pr[i]||pr[h]?u:("px"===h||p||(u=Zd(t,e,r,"px")),o=t.getCTM&&Ud(t),!_&&"%"!==h||!rr[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==Se&&a.appendChild||(a=Se.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Et.time&&!s.uncache?ia(u/s.width*100):(!_&&"%"!==h||_r[Nd(a,"display")]||(l.position=Nd(t,"position")),a===t&&(l.position="static"),a.appendChild(Ee),n=Ee[d],a.removeChild(Ee),l.position="absolute",f&&_&&((s=fa(a)).time=Et.time,s.width=a[d]),ia(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[d],ia(_?u/n*100:u/100*n)))}function _d(t,e,r,i){if(!r||"none"===r){var n=dr(e,t,1),a=n&&Nd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Nd(t,"borderTopColor"))}var s,o,u,h,l,f,c,d,p,_,m,g=new pe(this._pt,t.style,e,0,1,se),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=Nd(t,e)||i,t.style[e]=r),Eb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)c=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),c!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===c.charAt(1)&&(c=ka(h,c)+m),d=parseFloat(c),_=c.substr((d+"").length),v=rt.lastIndex-_.length,_||(_=_||j.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=Zd(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:d-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?yd:xd;return nt.test(i)&&(g.e=0),this._pt=g}function be(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=gr[r]||r,e[1]=gr[i]||i,e.join(" ")}function ce(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],rr[r]&&(i=1,r="transformOrigin"===r?fr:lr),Vd(a,r);i&&(Vd(a,lr),u&&(u.svg&&a.removeAttribute("transform"),br(a,1),u.uncache=1,Id(s)))}}function ge(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function he(t){var e=Nd(t,lr);return ge(e)?yr:e.substr(7).match(et).map(ia)}function ie(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=he(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?yr:u:(u!==yr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=he(t),n?o.display=n:Vd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function je(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ie(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,d=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==yr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Td(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-c,h.xOffset=d+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[fr]="0px 0px",a&&(Wd(a,h,"xOrigin",f,w),Wd(a,h,"yOrigin",c,x),Wd(a,h,"xOffset",d,h.xOffset),Wd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function me(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(Zd(t,"x",r+"px",i)))+i}function te(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?ir:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new pe(t._pt,e,i,n,l,ud),o.e=f,o.u="deg",t._props.push(i),o}function ue(t,e){for(var r in e)t[r]=e[r];return t}function ve(t,e,r){var i,n,a,s,o,u,h,l=ue({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[lr]=e,i=br(r,1),Vd(r,lr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[lr],f[lr]=e,i=br(r,1),f[lr]=a),rr)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?Zd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new pe(t._pt,i,n,o,u-o,td),t._pt.u=h||0,t._props.push(n));ue(i,l)}var Ae,Se,Re,De,Ee,ze,Fe,Ie,Be=Ft.Power0,Le=Ft.Power1,Ye=Ft.Power2,Ne=Ft.Power3,qe=Ft.Power4,Ue=Ft.Linear,Ve=Ft.Quad,We=Ft.Cubic,Xe=Ft.Quart,He=Ft.Quint,Qe=Ft.Strong,Ke=Ft.Elastic,Ze=Ft.Back,Ge=Ft.SteppedEase,Je=Ft.Bounce,$e=Ft.Sine,tr=Ft.Expo,er=Ft.Circ,rr={},ir=180/Math.PI,nr=Math.PI/180,ar=Math.atan2,sr=/([A-Z])/g,or=/(left|right|width|margin|padding|x)/i,ur=/[\\s,\\(]\\S/,hr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lr="transform",fr=lr+"Origin",cr="O,Moz,ms,Ms,Webkit".split(","),dr=function _checkPropPrefix(t,e,r){var i=(e||Ee).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(cr[n]+t in i););return n<0?null:(3===n?"ms":0<=n?cr[n]:"")+t},pr={deg:1,rad:1,turn:1},_r={grid:1,flex:1},mr=function _get(t,e,r,i){var n;return De||Qd(),e in hr&&"transform"!==e&&~(e=hr[e]).indexOf(",")&&(e=e.split(",")[0]),rr[e]&&"transform"!==e?(n=br(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:wr(Nd(t,fr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=vr[e]&&vr[e](t,e,r)||Nd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?Zd(t,e,n,r)+r:n},gr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vr={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new pe(t._pt,e,r,0,0,ce);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},yr=[1,0,0,1,0,0],Tr={},br=function _parseTransform(t,e){var r=t._gsap||new jt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w,x,k,M,O,P,C,A,S,R,D,E,z,F=t.style,I=r.scaleX<0,B="deg",L=getComputedStyle(t),Y=Nd(t,fr)||"0";return i=n=a=u=h=l=f=c=d=0,s=o=1,r.svg=!(!t.getCTM||!Ud(t)),L.translate&&("none"===L.translate&&"none"===L.scale&&"none"===L.rotate||(F[lr]=("none"!==L.translate?"translate3d("+(L.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==L.rotate?"rotate("+L.rotate+") ":"")+("none"!==L.scale?"scale("+L.scale.split(" ").join(",")+") ":"")+("none"!==L[lr]?L[lr]:"")),F.scale=F.rotate=F.translate="none"),m=ie(t,r.svg),r.svg&&(O=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),je(t,O||Y,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==yr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ar(b,T)*ir:0,(f=w||x?ar(w,x)*ir+u:0)&&(o*=Math.abs(Math.cos(f*nr))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(z=m[6],D=m[7],A=m[8],S=m[9],R=m[10],E=m[11],i=m[12],n=m[13],a=m[14],h=(g=ar(z,R))*ir,g&&(O=k*(v=Math.cos(-g))+A*(y=Math.sin(-g)),P=M*v+S*y,C=z*v+R*y,A=k*-y+A*v,S=M*-y+S*v,R=z*-y+R*v,E=D*-y+E*v,k=O,M=P,z=C),l=(g=ar(-w,R))*ir,g&&(v=Math.cos(-g),E=x*(y=Math.sin(-g))+E*v,T=O=T*v-A*y,b=P=b*v-S*y,w=C=w*v-R*y),u=(g=ar(b,T))*ir,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=k*v+M*y,b=b*v-T*y,M=M*v-k*y,T=O,k=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(M*M+z*z)),g=ar(k,M),f=2e-4<Math.abs(g)?g*ir:0,d=E?1/(E<0?-E:E):0),r.svg&&(O=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ge(Nd(t,lr)),O&&t.setAttribute("transform",O))),90<Math.abs(f)&&Math.abs(f)<270&&(I?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+B,r.rotationX=ia(h)+B,r.rotationY=ia(l)+B,r.skewX=f+B,r.skewY=c+B,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||0)&&(F[fr]=wr(Y)),r.xOffset=r.yOffset=0,r.force3D=j.force3D,r.renderTransform=r.svg?Cr:Ie?Pr:xr,r.uncache=0,r},wr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},xr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Pr(t,e)},kr="0deg",Mr="0px",Or=") ",Pr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==kr||h!==kr)){var b,w=parseFloat(h)*nr,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*nr,b=Math.cos(w),a=me(g,a,x*b*-v),s=me(g,s,-Math.sin(w)*-v),o=me(g,o,k*b*-v+v)}_!==Mr&&(y+="perspective("+_+Or),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Mr&&s===Mr&&o===Mr||(y+=o!==Mr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Or),u!==kr&&(y+="rotate("+u+Or),h!==kr&&(y+="rotateY("+h+Or),l!==kr&&(y+="rotateX("+l+Or),f===kr&&c===kr||(y+="skew("+f+", "+c+Or),1===d&&1===p||(y+="scale("+d+", "+p+Or),g.style[lr]=y||"translate(0, 0)"},Cr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,d=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);c=parseFloat(c),d=parseFloat(d),(p=parseFloat(p))&&(d+=p=parseFloat(p),c+=p),c||d?(c*=nr,d*=nr,r=Math.cos(c)*_,i=Math.sin(c)*_,n=Math.sin(c-d)*-m,a=Math.cos(c-d)*m,d&&(p*=nr,s=Math.tan(d-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=Zd(g,"x",l,"px"),k=Zd(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),k=ia(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),k=ia(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[lr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});vr[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return mr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Ar,Sr,Rr,Dr={name:"css",register:Qd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w=this._props,x=t.style,k=i.vars.startAt;for(c in De||Qd(),this.styles=this.styles||Kd(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==c&&(o=e[c],!pt[c]||!_b(c,e,i,n,t,a)))if(l=typeof o,f=vr[c],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,c,o,i)&&(T=1);else if("--"===c.substr(0,2))s=(getComputedStyle(t).getPropertyValue(c)+"").trim(),o+="",Rt.lastIndex=0,Rt.test(s)||(d=Ya(s),p=Ya(o)),p?d!==p&&(s=Zd(t,c,s,p)+p):d&&(o+=d),this.add(x,"setProperty",s,o,n,a,0,0,c),w.push(c),b.push(c,0,x[c]);else if("undefined"!==l){if(k&&c in k?(s="function"==typeof k[c]?k[c].call(i,n,t,a):k[c],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||(s+=j.units[c]||Ya(mr(t,c))||""),"="===(s+"").charAt(1)&&(s=mr(t,c))):s=mr(t,c),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),c in hr&&("autoAlpha"===c&&(1===h&&"hidden"===mr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Wd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==c&&"transform"!==c&&~(c=hr[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in rr)if(this.styles.save(c),g||((v=t._gsap).renderTransform&&!e.parseTransform||br(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new pe(this._pt,x,lr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===c)this._pt=new pe(this._pt,v,"scaleY",h,(_?ka(h,_+u):u)-h||0,td),this._pt.u=0,w.push("scaleY",c),c+="X";else{if("transformOrigin"===c){b.push(fr,0,x[fr]),o=be(o),v.svg?je(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Wd(this,v,"zOrigin",v.zOrigin,p),Wd(this,x,c,wr(s),wr(o)));continue}if("svgOrigin"===c){je(t,o,1,y,0,this);continue}if(c in Tr){te(this,v,c,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===c){Wd(this,v,"smooth",v.smooth,o);continue}if("force3D"===c){v[c]=o;continue}if("transform"===c){ve(this,o,t);continue}}else c in x||(c=dr(c)||c);if(m||(u||0===u)&&(h||0===h)&&!ur.test(o)&&c in x)u=u||0,(d=(s+"").substr((h+"").length))!==(p=Ya(o)||(c in j.units?j.units[c]:d))&&(h=Zd(t,c,s,p)),this._pt=new pe(this._pt,m?v:x,c,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==c||!1===e.autoRound?td:wd),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=vd);else if(c in x)_d.call(this,t,c,s,_?_+o:o);else{if(!(c in t)){Q(c,o);continue}this.add(t,c,s||t[c],_?_+o:o,n,a)}m||(c in x?b.push(c,0,x[c]):b.push(c,1,s||t[c])),w.push(c)}T&&de(this)},render:function render(t,e){if(e.tween._time||!Fe())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:mr,aliases:hr,getSetter:function getSetter(t,e,r){var i=hr[e];return i&&i.indexOf(",")<0&&(e=i),e in rr&&e!==fr&&(t._gsap.x||mr(t,"x"))?r&&ze===r?"scale"===e?Cd:Bd:(ze=r||{})&&("scale"===e?Dd:Ed):t.style&&!u(t.style[e])?zd:~e.indexOf("-")?Ad:re(t,e)},core:{_removeProperty:Vd,_getMatrix:ie}};Ce.utils.checkPrefix=dr,Ce.core.getStyleSaver=Kd,Rr=ha((Ar="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Sr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){rr[t]=1}),ha(Sr,function(t){j.units[t]="deg",Tr[t]=1}),hr[Rr[13]]=Ar+","+Sr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");hr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){j.units[t]="px"}),Ce.registerPlugin(Dr);var Er=Ce.registerPlugin(Dr)||Ce,zr=Er.core.Tween;e.Back=Ze,e.Bounce=Je,e.CSSPlugin=Dr,e.Circ=er,e.Cubic=We,e.Elastic=Ke,e.Expo=tr,e.Linear=Ue,e.Power0=Be,e.Power1=Le,e.Power2=Ye,e.Power3=Ne,e.Power4=qe,e.Quad=Ve,e.Quart=Xe,e.Quint=He,e.Sine=$e,e.SteppedEase=Ge,e.Strong=Qe,e.TimelineLite=Ut,e.TimelineMax=Ut,e.TweenLite=Gt,e.TweenMax=zr,e.default=Er,e.gsap=Er;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});\n' +
    '    </script>\n' +
    '    <script>\n' +
    '      /*!\n' +
    ' * MorphSVGPlugin 3.8.0\n' +
    ' * https://greensock.com\n' +
    ' * \n' +
    ' * @license Copyright 2021, GreenSock. All rights reserved.\n' +
    ' * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.\n' +
    ' * @author: Jack Doyle, jack@greensock.com\n' +
    ' */\n' +
    '\n' +
    '!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function m(t){return"string"==typeof t}var b=/[achlmqstvz]|(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[0-9]/gi,N=/(?:(-)?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[0-9]/gi,A=/[\\+\\-]?\\d*\\.?\\d+e[\\+\\-]?\\d+/gi,r=/(^[#\\.][a-z]|[a-y][a-z])/i,B=Math.PI/180,D=Math.sin,E=Math.cos,k=Math.abs,Q=Math.sqrt,s=function _isNumber(t){return"number"==typeof t},h=function _round(t){return Math.round(1e5*t)/1e5||0};function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var R={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,o,i,a,s,h,l,c,g,f,p,u,d,P,_,m,w,v,y,x,M,T=t.tagName.toLowerCase(),b=.552284749831;return"path"!==T&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(t.attributes),i=o.length;for(e=","+e+",";-1<--i;)n=o[i].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,o[i].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},o=n.length;-1<--o;)r[n[o]]=+t.getAttribute(n[o])||0;return r}(t,R[T]),"rect"===T?(i=M.rx,a=M.ry||i,r=M.x,o=M.y,g=M.width-2*i,f=M.height-2*a,n=i||a?"M"+(_=(d=(u=r+i)+g)+i)+","+(w=o+a)+" V"+(v=w+f)+" C"+[_,y=v+a*b,P=d+i*b,x=v+a,d,x,d-(d-u)/3,x,u+(d-u)/3,x,u,x,p=r+i*(1-b),x,r,y,r,v,r,v-(v-w)/3,r,w+(v-w)/3,r,w,r,m=o+a*(1-b),p,o,u,o,u+(d-u)/3,o,d-(d-u)/3,o,d,o,P,o,_,m,_,w].join(",")+"z":"M"+(r+g)+","+o+" v"+f+" h"+-g+" v"+-f+" h"+g+"z"):"circle"===T||"ellipse"===T?(l="circle"===T?(i=a=M.r)*b:(i=M.rx,(a=M.ry)*b),n="M"+((r=M.cx)+i)+","+(o=M.cy)+" C"+[r+i,o+l,r+(h=i*b),o+a,r,o+a,r-h,o+a,r-i,o+l,r-i,o,r-i,o-l,r-h,o-a,r,o-a,r+h,o-a,r+i,o-l,r+i,o].join(",")+"z"):"line"===T?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==T&&"polygon"!==T||(n="M"+(r=(c=(t.getAttribute("points")+"").match(N)||[]).shift())+","+(o=c.shift())+" L"+c.join(","),"polygon"===T&&(n+=","+r+","+o+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function arcToSegment(t,e,n,r,o,i,a,s,h){if(t!==s||e!==h){n=k(n),r=k(r);var l=o%360*B,c=E(l),g=D(l),f=Math.PI,p=2*f,u=(t-s)/2,d=(e-h)/2,P=c*u+g*d,_=-g*u+c*d,m=P*P,w=_*_,v=m/(n*n)+w/(r*r);1<v&&(n=Q(v)*n,r=Q(v)*r);var y=n*n,x=r*r,M=(y*x-y*w-x*m)/(y*w+x*m);M<0&&(M=0);var T=(i===a?-1:1)*Q(M),b=n*_/r*T,S=-r*P/n*T,N=c*b-g*S+(t+s)/2,z=g*b+c*S+(e+h)/2,A=(P-b)/n,R=(_-S)/r,O=(-P-b)/n,C=(-_-S)/r,j=A*A+R*R,Y=(R<0?-1:1)*Math.acos(A/Q(j)),V=(A*C-R*O<0?-1:1)*Math.acos((A*O+R*C)/Q(j*(O*O+C*C)));isNaN(V)&&(V=f),!a&&0<V?V-=p:a&&V<0&&(V+=p),Y%=p,V%=p;var I,F=Math.ceil(k(V)/(p/4)),U=[],X=V/F,L=4/3*D(X/2)/(1+E(X/2)),G=c*n,W=g*n,q=g*-r,H=c*r;for(I=0;I<F;I++)P=E(o=Y+I*X),_=D(o),A=E(o+=X),R=D(o),U.push(P-L*_,_+L*P,A+L*R,R-L*A,A,R);for(I=0;I<U.length;I+=2)P=U[I],_=U[I+1],U[I]=P*G+_*q+N,U[I+1]=P*W+_*H+z;return U[I-2]=s,U[I-1]=h,U}}function stringToRawPath(t){function yc(t,e,n,r){c=(n-t)/3,g=(r-e)/3,s.push(t+c,e+g,n-c,r-g,n,r)}var e,n,r,o,i,a,s,h,l,c,g,f,p,u,d,P=(t+"").replace(A,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(b)||[],_=[],m=0,w=0,v=P.length,y=0,x="ERROR: malformed path: "+t;if(!t||!isNaN(P[0])||isNaN(P[1]))return console.log(x),_;for(e=0;e<v;e++)if(p=i,isNaN(P[e])?a=(i=P[e].toUpperCase())!==P[e]:e--,r=+P[e+1],o=+P[e+2],a&&(r+=m,o+=w),e||(h=r,l=o),"M"===i)s&&(s.length<8?--_.length:y+=s.length),m=h=r,w=l=o,s=[r,o],_.push(s),e+=2,i="L";else if("C"===i)a||(m=w=0),(s=s||[0,0]).push(r,o,m+1*P[e+3],w+1*P[e+4],m+=1*P[e+5],w+=1*P[e+6]),e+=6;else if("S"===i)c=m,g=w,"C"!==p&&"S"!==p||(c+=m-s[s.length-4],g+=w-s[s.length-3]),a||(m=w=0),s.push(c,g,r,o,m+=1*P[e+3],w+=1*P[e+4]),e+=4;else if("Q"===i)c=m+2/3*(r-m),g=w+2/3*(o-w),a||(m=w=0),m+=1*P[e+3],w+=1*P[e+4],s.push(c,g,m+2/3*(r-m),w+2/3*(o-w),m,w),e+=4;else if("T"===i)c=m-s[s.length-4],g=w-s[s.length-3],s.push(m+c,w+g,r+2/3*(m+1.5*c-r),o+2/3*(w+1.5*g-o),m=r,w=o),e+=2;else if("H"===i)yc(m,w,m=r,w),e+=1;else if("V"===i)yc(m,w,m,w=r+(a?w-m:0)),e+=1;else if("L"===i||"Z"===i)"Z"===i&&(r=h,o=l,s.closed=!0),("L"===i||.5<k(m-r)||.5<k(w-o))&&(yc(m,w,r,o),"L"===i&&(e+=2)),m=r,w=o;else if("A"===i){if(u=P[e+4],d=P[e+5],c=P[e+6],g=P[e+7],n=7,1<u.length&&(u.length<3?(g=c,c=d,n--):(g=d,c=u.substr(2),n-=2),d=u.charAt(1),u=u.charAt(0)),f=arcToSegment(m,w,+P[e+1],+P[e+2],+P[e+3],+u,+d,(a?m:0)+1*c,(a?w:0)+1*g),e+=n,f)for(n=0;n<f.length;n++)s.push(f[n]);m=s[s.length-2],w=s[s.length-1]}else console.log(x);return(e=s.length)<6?(_.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),_.totalPoints=y+e,_}function rawPathToString(t){s(t[0])&&(t=[t]);var e,n,r,o,i="",a=t.length;for(n=0;n<a;n++){for(o=t[n],i+="M"+h(o[0])+","+h(o[1])+" C",e=o.length,r=2;r<e;r++)i+=h(o[r++])+","+h(o[r++])+" "+h(o[r++])+","+h(o[r++])+" "+h(o[r++])+","+h(o[r])+" ";o.closed&&(i+="z")}return i}function y(){return o||"undefined"!=typeof window&&(o=window.gsap)&&o.registerPlugin&&o}function z(t){return"function"==typeof t}function M(t){return console&&console.warn(t)}function P(){return String.fromCharCode.apply(null,arguments)}function S(t){var e,n=t.length,r=0,o=0;for(e=0;e<n;e++)r+=t[e++],o+=t[e];return[r/(n/2),o/(n/2)]}function T(t){var e,n,r,o=t.length,i=t[0],a=i,s=t[1],h=s;for(r=6;r<o;r+=6)i<(e=t[r])?i=e:e<a&&(a=e),s<(n=t[r+1])?s=n:n<h&&(h=n);return t.centerX=(i+a)/2,t.centerY=(s+h)/2,t.size=(i-a)*(s-h)}function U(t,e){void 0===e&&(e=3);for(var n,r,o,i,a,s,h,l,c,g,f,p,u,d,P,_,m=t.length,w=t[0][0],v=w,y=t[0][1],x=y,M=1/e;-1<--m;)for(n=(a=t[m]).length,i=6;i<n;i+=6)for(c=a[i],g=a[i+1],f=a[i+2]-c,d=a[i+3]-g,p=a[i+4]-c,P=a[i+5]-g,u=a[i+6]-c,_=a[i+7]-g,s=e;-1<--s;)w<(r=((h=M*s)*h*u+3*(l=1-h)*(h*p+l*f))*h+c)?w=r:r<v&&(v=r),y<(o=(h*h*_+3*l*(h*P+l*d))*h+g)?y=o:o<x&&(x=o);return t.centerX=(w+v)/2,t.centerY=(y+x)/2,t.left=v,t.width=w-v,t.top=x,t.height=y-x,t.size=(w-v)*(y-x)}function V(t,e){return e.length-t.length}function W(t,e){var n=t.size||T(t),r=e.size||T(e);return Math.abs(r-n)<(n+r)/20?e.centerX-t.centerX||e.centerY-t.centerY:r-n}function X(t,e){var n,r,o=t.slice(0),i=t.length,a=i-2;for(e|=0,n=0;n<i;n++)r=(n+e)%a,t[n++]=o[r],t[n]=o[1+r]}function Y(t,e,n,r,o){var i,a,s,h,l=t.length,c=0,g=l-2;for(n*=6,a=0;a<l;a+=6)h=t[i=(a+n)%g]-(e[a]-r),s=t[1+i]-(e[a+1]-o),c+=w(s*s+h*h);return c}function Z(t,e,n){var r,o,i,a=t.length,s=S(t),h=S(e),l=h[0]-s[0],c=h[1]-s[1],g=Y(t,e,0,l,c),f=0;for(i=6;i<a;i+=6)(o=Y(t,e,i/6,l,c))<g&&(g=o,f=i);if(n)for(reverseSegment(r=t.slice(0)),i=6;i<a;i+=6)(o=Y(r,e,i/6,l,c))<g&&(g=o,f=-i);return f/6}function $(t,e,n){for(var r,o,i,a,s,h,l=t.length,c=1e20,g=0,f=0;-1<--l;)for(h=(r=t[l]).length,s=0;s<h;s+=6)o=r[s]-e,i=r[s+1]-n,(a=w(o*o+i*i))<c&&(c=a,g=r[s],f=r[s+1]);return[g,f]}function _(t,e,n,r,o,i){var a,s,h,l,c=e.length,g=0,f=Math.min(t.size||T(t),e[n].size||T(e[n]))*r,p=1e20,u=t.centerX+o,d=t.centerY+i;for(a=n;a<c&&!((e[a].size||T(e[a]))<f);a++)s=e[a].centerX-u,h=e[a].centerY-d,(l=w(s*s+h*h))<p&&(g=a,p=l);return l=e[g],e.splice(g,1),l}function aa(t,e){var n,r,o,i,a,s,h,l,c,g,f,p,u,d,P=0,_=t.length,m=e/((_-2)/6);for(u=2;u<_;u+=6)for(P+=m;.999999<P;)n=t[u-2],r=t[u-1],o=t[u],i=t[u+1],a=t[u+2],s=t[u+3],h=t[u+4],l=t[u+5],c=n+(o-n)*(d=1/((Math.floor(P)||1)+1)),c+=((f=o+(a-o)*d)-c)*d,f+=(a+(h-a)*d-f)*d,g=r+(i-r)*d,g+=((p=i+(s-i)*d)-g)*d,p+=(s+(l-s)*d-p)*d,t.splice(u,4,n+(o-n)*d,r+(i-r)*d,c,g,c+(f-c)*d,g+(p-g)*d,f,p,a+(h-a)*d,s+(l-s)*d),u+=6,_+=6,P--;return t}function ba(t,e,n,r,o){var i,a,s,h,l,c,g,f=e.length-t.length,p=0<f?e:t,u=0<f?t:e,d=0,P="complexity"===r?V:W,m="position"===r?0:"number"==typeof r?r:.8,w=u.length,v="object"==typeof n&&n.push?n.slice(0):[n],y="reverse"===v[0]||v[0]<0,x="log"===n;if(u[0]){if(1<p.length&&(t.sort(P),e.sort(P),p.size||U(p),u.size||U(u),c=p.centerX-u.centerX,g=p.centerY-u.centerY,P===W))for(w=0;w<u.length;w++)p.splice(w,0,_(u[w],p,w,m,c,g));if(f)for(f<0&&(f=-f),p[0].length>u[0].length&&aa(u[0],(p[0].length-u[0].length)/6|0),w=u.length;d<f;)p[w].size||T(p[w]),h=(s=$(u,p[w].centerX,p[w].centerY))[0],l=s[1],u[w++]=[h,l,h,l,h,l,h,l],u.totalPoints+=8,d++;for(w=0;w<t.length;w++)i=e[w],a=t[w],(f=i.length-a.length)<0?aa(i,-f/6|0):0<f&&aa(a,f/6|0),y&&!1!==o&&!a.reversed&&reverseSegment(a),(n=v[w]||0===v[w]?v[w]:"auto")&&(a.closed||Math.abs(a[0]-a[a.length-2])<.5&&Math.abs(a[1]-a[a.length-1])<.5?"auto"===n||"log"===n?(v[w]=n=Z(a,i,!w||!1===o),n<0&&(y=!0,reverseSegment(a),n=-n),X(a,6*n)):"reverse"!==n&&(w&&n<0&&reverseSegment(a),X(a,6*(n<0?-n:n))):!y&&("auto"===n&&Math.abs(i[0]-a[0])+Math.abs(i[1]-a[1])+Math.abs(i[i.length-2]-a[a.length-2])+Math.abs(i[i.length-1]-a[a.length-1])>Math.abs(i[0]-a[a.length-2])+Math.abs(i[1]-a[a.length-1])+Math.abs(i[i.length-2]-a[0])+Math.abs(i[i.length-1]-a[1])||n%2)?(reverseSegment(a),v[w]=-1,y=!0):"auto"===n?v[w]=0:"reverse"===n&&(v[w]=-1),a.closed!==i.closed&&(a.closed=i.closed=!1));return x&&M("shapeIndex:["+v.join(",")+"]"),t.shapeIndex=v}}function ca(t,e,n,r,o){var i=stringToRawPath(t[0]),a=stringToRawPath(t[1]);ba(i,a,e||0===e?e:"auto",n,o)&&(t[0]=rawPathToString(i),t[1]=rawPathToString(a),"log"!==r&&!0!==r||M(\'precompile:["\'+t[0]+\'","\'+t[1]+\'"]\'))}function ea(t,e){var n,r,o,i,a,s,h,l=0,c=parseFloat(t[0]),g=parseFloat(t[1]),f=c+","+g+" ";for(n=.5*e/(.5*(o=t.length)-1),r=0;r<o-2;r+=2){if(l+=n,s=parseFloat(t[r+2]),h=parseFloat(t[r+3]),.999999<l)for(a=1/(Math.floor(l)+1),i=1;.999999<l;)f+=(c+(s-c)*a*i).toFixed(2)+","+(g+(h-g)*a*i).toFixed(2)+" ",l--,i++;f+=s+","+h+" ",c=s,g=h}return f}function fa(t){var e=t[0].match(L)||[],n=t[1].match(L)||[],r=n.length-e.length;0<r?t[0]=ea(e,r):t[1]=ea(n,-r)}function ga(e){return isNaN(e)?fa:function(t){fa(t),t[1]=function _offsetPoints(t,e){if(!e)return t;var n,r,o,i=t.match(L)||[],a=i.length,s="";for(n="reverse"===e?(r=a-1,-2):(r=(2*(parseInt(e,10)||0)+1+100*a)%a,2),o=0;o<a;o+=2)s+=i[r-1]+","+i[r]+" ",r=(r+n)%a;return s}(t[1],parseInt(e,10))}}function ia(t,e){for(var n,r,o,i,a,s,h,l,c,g,f,p,u=t.length,d=.2*(e||1);-1<--u;){for(f=(r=t[u]).isSmooth=r.isSmooth||[0,0,0,0],p=r.smoothData=r.smoothData||[0,0,0,0],f.length=4,l=r.length-2,h=6;h<l;h+=6)o=r[h]-r[h-2],i=r[h+1]-r[h-1],a=r[h+2]-r[h],s=r[h+3]-r[h+1],c=v(i,o),g=v(s,a),(n=Math.abs(c-g)<d)&&(p[h-2]=c,p[h+2]=g,p[h-1]=w(o*o+i*i),p[h+3]=w(a*a+s*s)),f.push(n,n,0,0,n,n);r[l]===r[0]&&r[1+l]===r[1]&&(o=r[0]-r[l-2],i=r[1]-r[l-1],a=r[2]-r[0],s=r[3]-r[1],c=v(i,o),g=v(s,a),Math.abs(c-g)<d&&(p[l-2]=c,p[2]=g,p[l-1]=w(o*o+i*i),p[3]=w(a*a+s*s),f[l-2]=f[l-1]=!0))}return t}function ja(t){var e=t.trim().split(" ");return{x:(~t.indexOf("left")?0:~t.indexOf("right")?100:isNaN(parseFloat(e[0]))?50:parseFloat(e[0]))/100,y:(~t.indexOf("top")?0:~t.indexOf("bottom")?100:isNaN(parseFloat(e[1]))?50:parseFloat(e[1]))/100}}function ma(t,e,n,r){var o,i,a=this._origin,s=this._eOrigin,h=t[n]-a.x,l=t[n+1]-a.y,c=w(h*h+l*l),g=v(l,h);return h=e[n]-s.x,l=e[n+1]-s.y,i=function _shortAngle(t){return t!==t%f?t+(t<0?p:-p):t}(o=v(l,h)-g),!r&&I&&Math.abs(i+I.ca)<u&&(r=I),this._anchorPT=I={_next:this._anchorPT,t:t,sa:g,ca:r&&i*r.ca<0&&Math.abs(i)>d?o:i,sl:c,cl:w(h*h+l*l)-c,i:n}}function na(t){o=y(),n=n||o&&o.plugins.morphSVG,o&&n?(j=o.utils.toArray,n.prototype._tweenRotation=ma,F=1):t&&M("Please gsap.registerPlugin(MorphSVGPlugin)")}var o,j,I,F,n,v=Math.atan2,x=Math.cos,O=Math.sin,w=Math.sqrt,f=Math.PI,p=2*f,u=.3*f,d=.7*f,L=/[-+=\\.]*\\d+[\\.e\\-\\+]*\\d*[e\\-\\+]*\\d*/gi,G=/(^[#\\.][a-z]|[a-y][a-z])/i,q=/[achlmqstvz]/i,i="MorphSVGPlugin",a=P(103,114,101,101,110,115,111,99,107,46,99,111,109),H=function(t){var e=0===(window?window.location.href:"").indexOf(P(102,105,108,101,58,47,47))||-1!==t.indexOf(P(108,111,99,97,108,104,111,115,116))||-1!==t.indexOf(P(49,50,55,46,48,32,48,46,49)),n=[a,P(99,111,100,101,112,101,110,46,105,111),P(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),P(99,111,100,101,112,101,110,46,100,101,118),P(99,111,100,101,112,101,110,46,97,112,112),P(112,101,110,115,46,99,108,111,117,100),P(99,115,115,45,116,114,105,99,107,115,46,99,111,109),P(99,100,112,110,46,105,111),P(112,101,110,115,46,105,111),P(103,97,110,110,111,110,46,116,118),P(99,111,100,101,99,97,110,121,111,110,46,110,101,116),P(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),P(99,101,114,101,98,114,97,120,46,99,111,46,117,107),P(116,121,109,112,97,110,117,115,46,110,101,116),P(116,119,101,101,110,109,97,120,46,99,111,109),P(116,119,101,101,110,108,105,116,101,46,99,111,109),P(112,108,110,107,114,46,99,111),P(104,111,116,106,97,114,46,99,111,109),P(119,101,98,112,97,99,107,98,105,110,46,99,111,109),P(97,114,99,104,105,118,101,46,111,114,103),P(99,111,100,101,115,97,110,100,98,111,120,46,105,111),P(99,115,98,46,97,112,112),P(115,116,97,99,107,98,108,105,116,122,46,99,111,109),P(99,111,100,105,101,114,46,105,111),P(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),P(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),P(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),P(106,115,102,105,100,100,108,101,46,110,101,116)],r=n.length;for(setTimeout(function(){window&&window.console&&!window._gsapWarned&&o&&!1!==o.config().trialWarn&&(console.log(P(37,99,87,97,114,110,105,110,103),P(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(P(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+i+P(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(P(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),P(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)},50);-1<--r;)if(-1!==t.indexOf(n[r]))return!0;return e||!setTimeout(function(){window.location.href=P(104,116,116,112,115,58,47,47)+a+P(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin="+i+"&source=codepen"},3e3)}(window?window.location.host:""),J="Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",K={version:"3.8.0",name:"morphSVG",rawVars:1,register:function register(t,e){o=t,n=e,na()},init:function init(t,e,n,r,o){if(F||na(1),!e)return M("invalid shape"),!1;var i,a,s,h,l,c,g,f,p,u,d,P,_,m,w,v,y,x,T,b,S,N;if(z(e)&&(e=e.call(n,r,t,o)),"string"==typeof e||e.getBBox||e[0])e={shape:e};else if("object"==typeof e){for(a in i={},e)i[a]=z(e[a])&&"render"!==a?e[a].call(n,r,t,o):e[a];e=i}var A=t.nodeType?window.getComputedStyle(t):{},R=A.fill+"",O=!("none"===R||"0"===(R.match(L)||[])[3]||"evenodd"===A.fillRule),C=(e.origin||"50 50").split(",");if(l="POLYLINE"===(i=(t.nodeName+"").toUpperCase())||"POLYGON"===i,"PATH"!==i&&!l&&!e.prop)return M("Cannot morph a <"+i+"> element. "+J),!1;if(a="PATH"===i?"d":"points",!e.prop&&!z(t.setAttribute))return!1;if(h=function _parseShape(t,e,n){var r,o;return(!("string"==typeof t)||G.test(t)||(t.match(L)||[]).length<3)&&((r=j(t)[0])?(o=(r.nodeName+"").toUpperCase(),e&&"PATH"!==o&&(r=convertToPath(r,!1),o="PATH"),t=r.getAttribute("PATH"===o?"d":"points")||"",r===n&&(t=r.getAttributeNS(null,"data-original")||t)):(M("WARNING: invalid morph to: "+t),t=!1)),t}(e.shape||e.d||e.points||"","d"===a,t),l&&q.test(h))return M("A <"+i+"> cannot accept path data. "+J),!1;if(c=e.shapeIndex||0===e.shapeIndex?e.shapeIndex:"auto",g=e.map||K.defaultMap,this._prop=e.prop,this._render=e.render||K.defaultRender,this._apply="updateTarget"in e?e.updateTarget:K.defaultUpdateTarget,this._rnd=Math.pow(10,isNaN(e.precision)?2:+e.precision),this._tween=n,h){if(this._target=t,y="object"==typeof e.precompile,u=this._prop?t[this._prop]:t.getAttribute(a),this._prop||t.getAttributeNS(null,"data-original")||t.setAttributeNS(null,"data-original",u),"d"===a||this._prop){if(u=stringToRawPath(y?e.precompile[0]:u),d=stringToRawPath(y?e.precompile[1]:h),!y&&!ba(u,d,c,g,O))return!1;for("log"!==e.precompile&&!0!==e.precompile||M(\'precompile:["\'+rawPathToString(u)+\'","\'+rawPathToString(d)+\'"]\'),(S="linear"!==(e.type||K.defaultType))&&(u=ia(u,e.smoothTolerance),d=ia(d,e.smoothTolerance),u.size||U(u),d.size||U(d),b=ja(C[0]),this._origin=u.origin={x:u.left+b.x*u.width,y:u.top+b.y*u.height},C[1]&&(b=ja(C[1])),this._eOrigin={x:d.left+b.x*d.width,y:d.top+b.y*d.height}),this._rawPath=t._gsRawPath=u,_=u.length;-1<--_;)for(w=u[_],v=d[_],f=w.isSmooth||[],p=v.isSmooth||[],m=w.length,P=I=0;P<m;P+=2)v[P]===w[P]&&v[P+1]===w[P+1]||(S?f[P]&&p[P]?(x=w.smoothData,T=v.smoothData,N=P+(P===m-4?7-m:5),this._controlPT={_next:this._controlPT,i:P,j:_,l1s:x[P+1],l1c:T[P+1]-x[P+1],l2s:x[N],l2c:T[N]-x[N]},s=this._tweenRotation(w,v,P+2),this._tweenRotation(w,v,P,s),this._tweenRotation(w,v,N-1,s),P+=4):this._tweenRotation(w,v,P):(s=this.add(w,P,w[P],v[P]),s=this.add(w,P+1,w[P+1],v[P+1])||s))}else s=this.add(t,"setAttribute",t.getAttribute(a)+"",h+"",r,o,0,ga(c),a);S&&(this.add(this._origin,"x",this._origin.x,this._eOrigin.x),s=this.add(this._origin,"y",this._origin.y,this._eOrigin.y)),s&&(this._props.push("morphSVG"),s.end=h,s.endProp=a)}return H},render:function render(t,e){for(var n,r,o,i,a,s,h,l,c,g,f,p,u=e._rawPath,d=e._controlPT,P=e._anchorPT,_=e._rnd,m=e._target,w=e._pt;w;)w.r(t,w.d),w=w._next;if(1===t&&e._apply)for(w=e._pt;w;)w.end&&(e._prop?m[e._prop]=w.end:m.setAttribute(w.endProp,w.end)),w=w._next;else if(u){for(;P;)a=P.sa+t*P.ca,i=P.sl+t*P.cl,P.t[P.i]=e._origin.x+x(a)*i,P.t[P.i+1]=e._origin.y+O(a)*i,P=P._next;for(r=t<.5?2*t*t:(4-2*t)*t-1;d;)p=(s=d.i)+(s===(o=u[d.j]).length-4?7-o.length:5),a=v(o[p]-o[s+1],o[p-1]-o[s]),g=O(a),f=x(a),l=o[s+2],c=o[s+3],i=d.l1s+r*d.l1c,o[s]=l-f*i,o[s+1]=c-g*i,i=d.l2s+r*d.l2c,o[p-1]=l+f*i,o[p]=c+g*i,d=d._next;if(m._gsRawPath=u,e._apply){for(n="",h=0;h<u.length;h++)for(i=(o=u[h]).length,n+="M"+(o[0]*_|0)/_+" "+(o[1]*_|0)/_+" C",s=2;s<i;s++)n+=(o[s]*_|0)/_+" ";e._prop?m[e._prop]=n:m.setAttribute("d",n)}}e._render&&u&&e._render.call(e._tween,u,m)},kill:function kill(){this._pt=this._rawPath=0},getRawPath:function getRawPath(t){var e,n=(t=m(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?m(t)?stringToRawPath(t):s(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")},stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,normalizeStrings:function normalizeStrings(t,e,n){var r=n.shapeIndex,o=n.map,i=[t,e];return ca(i,r,o),i},pathFilter:ca,pointsFilter:fa,getTotalSize:U,equalizeSegmentQuantity:ba,convertToPath:function convertToPath$1(t,e){return j(t).map(function(t){return convertToPath(t,!1!==e)})},defaultType:"linear",defaultUpdateTarget:!0,defaultMap:"size"};y()&&o.registerPlugin(K),t.MorphSVGPlugin=K,t.default=K;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});\n' +
    '    </script>\n' +
    '    <script>\n' +
    '      /*!\n' +
    ' * DrawSVGPlugin 3.10.4\n' +
    ' * https://greensock.com\n' +
    ' * \n' +
    ' * @license Copyright 2022, GreenSock. All rights reserved.\n' +
    ' * *** DO NOT DEPLOY THIS FILE ***\n' +
    ' * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.\n' +
    ' * Loading it on an unauthorized domain violates the license and will cause a redirect.\n' +
    ' * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club\n' +
    ' * @author: Jack Doyle, jack@greensock.com\n' +
    ' */\n' +
    '\n' +
    '!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function j(){return"undefined"!=typeof window}function k(){return r||j()&&(r=window.gsap)&&r.registerPlugin&&r}function n(e){return Math.round(1e4*e)/1e4}function o(e){return parseFloat(e)||0}function p(e,t){var n=o(e);return~e.indexOf("%")?n/100*t:n}function q(e,t){return o(e.getAttribute(t))}function s(e,t,n,r,i,s){return M(Math.pow((o(n)-o(e))*i,2)+Math.pow((o(r)-o(t))*s,2))}function t(e){return console.warn(e)}function u(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")}function x(){return String.fromCharCode.apply(null,arguments)}function B(e){if(!(e=v(e)[0]))return 0;var r,i,o,a,d,f,h,l=e.tagName.toLowerCase(),c=e.style,x=1,g=1;u(e)&&(g=e.getScreenCTM(),x=M(g.a*g.a+g.b*g.b),g=M(g.d*g.d+g.c*g.c));try{i=e.getBBox()}catch(e){t("Some browsers won\'t measure invisible elements (like display:none or masks inside defs).")}var p=i||{x:0,y:0,width:0,height:0},w=p.x,_=p.y,y=p.width,m=p.height;if(i&&(y||m)||!O[l]||(y=q(e,O[l][0]),m=q(e,O[l][1]),"rect"!==l&&"line"!==l&&(y*=2,m*=2),"line"===l&&(w=q(e,"x1"),_=q(e,"y1"),y=Math.abs(y-w),m=Math.abs(m-_))),"path"===l)a=c.strokeDasharray,c.strokeDasharray="none",r=e.getTotalLength()||0,n(x)!==n(g)&&!b&&(b=1)&&t("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn\'t proportionally scaled."),r*=(x+g)/2,c.strokeDasharray=a;else if("rect"===l)r=2*y*x+2*m*g;else if("line"===l)r=s(w,_,w+y,_+m,x,g);else if("polyline"===l||"polygon"===l)for(o=e.getAttribute("points").match(P)||[],"polygon"===l&&o.push(o[0],o[1]),r=0,d=2;d<o.length;d+=2)r+=s(o[d-2],o[d-1],o[d],o[d+1],x,g)||0;else"circle"!==l&&"ellipse"!==l||(f=y/2*x,h=m/2*g,r=Math.PI*(3*(f+h)-M((3*f+h)*(f+3*h))));return r||0}function C(e,t){if(!(e=v(e)[0]))return[0,0];t=t||B(e)+1;var n=d.getComputedStyle(e),r=n.strokeDasharray||"",i=o(n.strokeDashoffset),s=r.indexOf(",");return s<0&&(s=r.indexOf(" ")),t<(r=s<0?t:o(r.substr(0,s)))&&(r=t),[-i||0,r-i||0]}function D(){j()&&(d=window,h=r=k(),v=r.utils.toArray,f=-1!==((d.navigator||{}).userAgent||"").indexOf("Edge"))}var r,v,d,f,h,b,P=/[-+=\\.]*\\d+[\\.e\\-\\+]*\\d*[e\\-\\+]*\\d*/gi,O={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},M=Math.sqrt,a="DrawSVGPlugin",l=x(103,114,101,101,110,115,111,99,107,46,99,111,109),c=function(e){var t="undefined"!=typeof window,n=0===(t?window.location.href:"").indexOf(x(102,105,108,101,58,47,47))||-1!==e.indexOf(x(108,111,99,97,108,104,111,115,116))||-1!==e.indexOf(x(49,50,55,46,48,32,48,46,49)),r=[l,x(99,111,100,101,112,101,110,46,105,111),x(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),x(99,111,100,101,112,101,110,46,100,101,118),x(99,111,100,101,112,101,110,46,97,112,112),x(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),x(112,101,110,115,46,99,108,111,117,100),x(99,115,115,45,116,114,105,99,107,115,46,99,111,109),x(99,100,112,110,46,105,111),x(112,101,110,115,46,105,111),x(103,97,110,110,111,110,46,116,118),x(99,111,100,101,99,97,110,121,111,110,46,110,101,116),x(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),x(99,101,114,101,98,114,97,120,46,99,111,46,117,107),x(116,121,109,112,97,110,117,115,46,110,101,116),x(116,119,101,101,110,109,97,120,46,99,111,109),x(116,119,101,101,110,108,105,116,101,46,99,111,109),x(112,108,110,107,114,46,99,111),x(104,111,116,106,97,114,46,99,111,109),x(119,101,98,112,97,99,107,98,105,110,46,99,111,109),x(97,114,99,104,105,118,101,46,111,114,103),x(99,111,100,101,115,97,110,100,98,111,120,46,105,111),x(99,115,98,46,97,112,112),x(115,116,97,99,107,98,108,105,116,122,46,99,111,109),x(115,116,97,99,107,98,108,105,116,122,46,105,111),x(99,111,100,105,101,114,46,105,111),x(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),x(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),x(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),x(106,115,102,105,100,100,108,101,46,110,101,116)],i=r.length;for(setTimeout(function checkWarn(){t&&("loading"===document.readyState||"interactive"===document.readyState?document.addEventListener("readystatechange",checkWarn):(document.removeEventListener("readystatechange",checkWarn),t&&window.console&&!window._gsapWarned&&"object"==typeof window.gsap&&!1!==window.gsap.config().trialWarn&&(console.log(x(37,99,87,97,114,110,105,110,103),x(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(x(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+a+x(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(x(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),x(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)))},50);-1<--i;)if(-1!==e.indexOf(r[i]))return!0;return n||!setTimeout(function(){t&&(window.location.href=x(104,116,116,112,115,58,47,47)+l+x(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin="+a+"&source=trial")},3e3)}("undefined"!=typeof window?window.location.host:""),i={version:"3.10.4",name:"drawSVG",register:function register(e){r=e,D()},init:function init(e,t){if(!e.getBBox)return!1;h||D();var r,i,s,a=B(e);return this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",i=function _parse(e,t,n){var r,i,o=e.indexOf(" ");return i=o<0?(r=void 0!==n?n+"":e,e):(r=e.substr(0,o),e.substr(o+1)),r=p(r,t),(i=p(i,t))<r?[i,r]:[r,i]}(t,a,(r=C(e,a))[0]),this._length=n(a),this._dash=n(r[1]-r[0]),this._offset=n(-r[0]),this._dashPT=this.add(this,"_dash",this._dash,n(i[1]-i[0])),this._offsetPT=this.add(this,"_offset",this._offset,n(-i[0])),f&&(s=d.getComputedStyle(e)).strokeLinecap!==s.strokeLinejoin&&(i=o(s.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",i,i+.01)),this._live=u(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),c},render:function render(e,t){var n,r,i,o,s=t._pt,a=t._style;if(s){for(t._live&&(n=B(t._target))!==t._length&&(r=n/t._length,t._length=n,t._offsetPT&&(t._offsetPT.s*=r,t._offsetPT.c*=r),t._dashPT?(t._dashPT.s*=r,t._dashPT.c*=r):t._dash*=r);s;)s.r(e,s.d),s=s._next;i=t._dash||e&&1!==e&&1e-4||0,n=t._length-i+.1,o=t._offset,i&&o&&i+Math.abs(o%t._length)>t._length-.2&&(o+=o<0?.1:-.1)&&(n+=.1),a.strokeDashoffset=i?o:o+.001,a.strokeDasharray=n<.2?"none":i?i+"px,"+(t._nowrap?999999:n)+"px":"0px, 999999px"}},getLength:B,getPosition:C};k()&&r.registerPlugin(i),e.DrawSVGPlugin=i,e.default=i;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});\n' +
    '    </script>\n' +
    '    <script>\n' +
    '      /*!\n' +
    ' * MotionPathPlugin 3.11.0\n' +
    ' * https://greensock.com\n' +
    ' * \n' +
    ' * @license Copyright 2022, GreenSock. All rights reserved.\n' +
    ' * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.\n' +
    ' * @author: Jack Doyle, jack@greensock.com\n' +
    ' */\n' +
    '\n' +
    '!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function p(t){return"string"==typeof t}function x(t){return Math.round(1e10*t)/1e10||0}function y(t,e,n,r){var a=t[e],o=1===r?6:subdivideSegment(a,n,r);if(o&&o+n+2<a.length)return t.splice(e,0,a.slice(0,n+o+2)),a.splice(0,n+o),1}function C(t,e){var n=t.length,r=t[n-1]||[],a=r.length;n&&e[0]===r[a-2]&&e[1]===r[a-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e}var M=/[achlmqstvz]|(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[0-9]/gi,T=/(?:(-)?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[0-9]/gi,L=/[\\+\\-]?\\d*\\.?\\d+e[\\+\\-]?\\d+/gi,r=/(^[#\\.][a-z]|[a-y][a-z])/i,V=Math.PI/180,s=180/Math.PI,F=Math.sin,U=Math.cos,H=Math.abs,$=Math.sqrt,l=Math.atan2,A=1e8,h=function _isNumber(t){return"number"==typeof t},S={},_={},e=1e5,d=function _wrapProgress(t){return Math.round((t+A)%1*e)/e||(t<0?0:1)},N=function _round(t){return Math.round(t*e)/e||0},m=function _getSampleIndex(t,e,n){var r=t.length,a=~~(n*r);if(t[a]>e){for(;--a&&t[a]>e;);a<0&&(a=0)}else for(;t[++a]<e&&a<r;);return a<r?a:r-1},O=function _copyMetaData(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e};function getRawPath(t){var e,n=(t=p(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?p(t)?stringToRawPath(t):h(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var B={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,a,o,i,s,l,h,u,g,f,c,p,d,m,v,y,x,w,P,b,M,R=t.tagName.toLowerCase(),L=.552284749831;return"path"!==R&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(t.attributes),o=a.length;for(e=","+e+",";-1<--o;)n=a[o].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},a=n.length;-1<--a;)r[n[a]]=+t.getAttribute(n[a])||0;return r}(t,B[R]),"rect"===R?(o=M.rx,i=M.ry||o,r=M.x,a=M.y,g=M.width-2*o,f=M.height-2*i,n=o||i?"M"+(v=(d=(p=r+o)+g)+o)+","+(x=a+i)+" V"+(w=x+f)+" C"+[v,P=w+i*L,m=d+o*L,b=w+i,d,b,d-(d-p)/3,b,p+(d-p)/3,b,p,b,c=r+o*(1-L),b,r,P,r,w,r,w-(w-x)/3,r,x+(w-x)/3,r,x,r,y=a+i*(1-L),c,a,p,a,p+(d-p)/3,a,d-(d-p)/3,a,d,a,m,a,v,y,v,x].join(",")+"z":"M"+(r+g)+","+a+" v"+f+" h"+-g+" v"+-f+" h"+g+"z"):"circle"===R||"ellipse"===R?(h="circle"===R?(o=i=M.r)*L:(o=M.rx,(i=M.ry)*L),n="M"+((r=M.cx)+o)+","+(a=M.cy)+" C"+[r+o,a+h,r+(l=o*L),a+i,r,a+i,r-l,a+i,r-o,a+h,r-o,a,r-o,a-h,r-l,a-i,r,a-i,r+l,a-i,r+o,a-h,r+o,a].join(",")+"z"):"line"===R?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==R&&"polygon"!==R||(n="M"+(r=(u=(t.getAttribute("points")+"").match(T)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===R&&(n+=","+r+","+a+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function getRotationAtBezierT(t,e,n){var r,a=t[e],o=t[e+2],i=t[e+4];return a+=(o-a)*n,a+=((o+=(i-o)*n)-a)*n,r=o+(i+(t[e+6]-i)*n-o)*n-a,a=t[e+1],a+=((o=t[e+3])-a)*n,a+=((o+=((i=t[e+5])-o)*n)-a)*n,N(l(o+(i+(t[e+7]-i)*n-o)*n-a,r)*s)}function sliceRawPath(t,e,n){n=function _isUndefined(t){return void 0===t}(n)?1:x(n)||0,e=x(e)||0;var r=Math.max(0,~~(H(n-e)-1e-8)),a=function copyRawPath(t){for(var e=[],n=0;n<t.length;n++)e[n]=O(t[n],t[n].slice(0));return O(t,e)}(t);if(n<e&&(e=1-e,n=1-n,function _reverseRawPath(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||reverseSegment(t[n])}(a),a.totalLength=0),e<0||n<0){var o=Math.abs(~~Math.min(e,n))+1;e+=o,n+=o}a.totalLength||cacheRawPathMeasurements(a);var i,s,l,h,u,g,f,c,p=1<n,d=getProgressData(a,e,S,!0),m=getProgressData(a,n,_),v=m.segment,w=d.segment,P=m.segIndex,b=d.segIndex,M=m.i,R=d.i,L=b===P,T=M===R&&L;if(p||r){for(i=P<b||L&&M<R||T&&m.t<d.t,y(a,b,R,d.t)&&(b++,i||(P++,T?(m.t=(m.t-d.t)/(1-d.t),M=0):L&&(M-=R))),Math.abs(1-(n-e))<1e-5?P=b-1:!m.t&&P?P--:y(a,P,M,m.t)&&i&&b++,1===d.t&&(b=(b+1)%a.length),u=[],f=1+(g=a.length)*r,f+=(g-(c=b)+P)%g,h=0;h<f;h++)C(u,a[c++%g]);a=u}else if(l=1===m.t?6:subdivideSegment(v,M,m.t),e!==n)for(s=subdivideSegment(w,R,T?d.t/m.t:d.t),L&&(l+=s),v.splice(M+l+2),(s||R)&&w.splice(0,R+s),h=a.length;h--;)(h<b||P<h)&&a.splice(h,1);else v.angle=getRotationAtBezierT(v,M+l,0),d=v[M+=l],m=v[M+1],v.length=v.totalLength=0,v.totalPoints=a.totalPoints=8,v.push(d,m,d,m,d,m,d,m);return a.totalLength=0,a}function measureSegment(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,a,o,i,s,l,h,u,g,f,c,p,d,m,v,y,x,w=~~t.resolution||12,P=1/w,b=n?e+6*n+1:t.length,M=t[e],R=t[e+1],L=e?e/6*w:0,T=t.samples,S=t.lookup,C=(e?t.minLength:A)||A,_=T[L+n*w-1],N=e?T[L-1]:0;for(T.length=S.length=0,a=e+2;a<b;a+=6){if(o=t[a+4]-M,i=t[a+2]-M,s=t[a]-M,u=t[a+5]-R,g=t[a+3]-R,f=t[a+1]-R,l=h=c=p=0,H(o)<.01&&H(u)<.01&&H(s)+H(f)<.01)8<t.length&&(t.splice(a,6),a-=6,b-=6);else for(r=1;r<=w;r++)l=h-(h=((m=P*r)*m*o+3*(d=1-m)*(m*i+d*s))*m),c=p-(p=(m*m*u+3*d*(m*g+d*f))*m),(y=$(c*c+l*l))<C&&(C=y),N+=y,T[L++]=N;M+=o,R+=u}if(_)for(_-=N;L<T.length;L++)T[L]+=_;if(T.length&&C){if(t.totalLength=x=T[T.length-1]||0,x/(t.minLength=C)<9999)for(y=v=0,r=0;r<x;r+=C)S[y++]=T[v]<r?++v:v}else t.totalLength=T[0]=0;return e?N-T[e/2-1]:N}function cacheRawPathMeasurements(t,e){var n,r,a;for(a=n=r=0;a<t.length;a++)t[a].resolution=~~e||12,r+=t[a].length,n+=measureSegment(t[a]);return t.totalPoints=r,t.totalLength=n,t}function subdivideSegment(t,e,n){if(n<=0||1<=n)return 0;var r=t[e],a=t[e+1],o=t[e+2],i=t[e+3],s=t[e+4],l=t[e+5],h=r+(o-r)*n,u=o+(s-o)*n,g=a+(i-a)*n,f=i+(l-i)*n,c=h+(u-h)*n,p=g+(f-g)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,f+=(m-f)*n,t.splice(e+2,4,N(h),N(g),N(c),N(p),N(c+(u-c)*n),N(p+(f-p)*n),N(u),N(f),N(d),N(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function getProgressData(t,e,n,r){n=n||{},t.totalLength||cacheRawPathMeasurements(t),(e<0||1<e)&&(e=d(e));var a,o,i,s,l,h,u,g=0,f=t[0];if(e)if(1===e)u=1,h=(f=t[g=t.length-1]).length-8;else{if(1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)g=h;e=(i-(s=l-(f=t[g]).totalLength))/(l-s)||0}a=f.samples,o=f.resolution,i=f.totalLength*e,s=(h=f.lookup.length?f.lookup[~~(i/f.minLength)]||0:m(a,i,e))?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),u=1/o*((i-s)/(l-s)+h%o),h=6*~~(h/o),r&&1===u&&(h+6<f.length?(h+=6,u=0):g+1<t.length&&(h=u=0,f=t[++g]))}else u=h=g=0,f=t[0];return n.t=u,n.i=h,n.path=t,n.segment=f,n.segIndex=g,n}function getPositionOnPath(t,e,n,r){var a,o,i,s,l,h,u,g,f,c=t[0],p=r||{};if((e<0||1<e)&&(e=d(e)),1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)c=t[h];e=(i-(s=l-c.totalLength))/(l-s)||0}return a=c.samples,o=c.resolution,i=c.totalLength*e,s=(h=c.lookup.length?c.lookup[e<1?~~(i/c.minLength):c.lookup.length-1]||0:m(a,i,e))?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),f=1-(u=1/o*((i-s)/(l-s)+h%o)||0),g=c[h=6*~~(h/o)],p.x=N((u*u*(c[h+6]-g)+3*f*(u*(c[h+4]-g)+f*(c[h+2]-g)))*u+g),p.y=N((u*u*(c[h+7]-(g=c[h+1]))+3*f*(u*(c[h+5]-g)+f*(c[h+3]-g)))*u+g),n&&(p.angle=c.totalLength?getRotationAtBezierT(c,h,1<=u?1-1e-9:u||1e-9):c.angle||0),p}function transformRawPath(t,e,n,r,a,o,i){for(var s,l,h,u,g,f=t.length;-1<--f;)for(l=(s=t[f]).length,h=0;h<l;h+=2)u=s[h],g=s[h+1],s[h]=u*e+g*r+o,s[h+1]=u*n+g*a+i;return t._dirty=1,t}function arcToSegment(t,e,n,r,a,o,i,s,l){if(t!==s||e!==l){n=H(n),r=H(r);var h=a%360*V,u=U(h),g=F(h),f=Math.PI,c=2*f,p=(t-s)/2,d=(e-l)/2,m=u*p+g*d,v=-g*p+u*d,y=m*m,x=v*v,w=y/(n*n)+x/(r*r);1<w&&(n=$(w)*n,r=$(w)*r);var P=n*n,b=r*r,M=(P*b-P*x-b*y)/(P*x+b*y);M<0&&(M=0);var R=(o===i?-1:1)*$(M),L=n*v/r*R,T=-r*m/n*R,S=u*L-g*T+(t+s)/2,C=g*L+u*T+(e+l)/2,_=(m-L)/n,N=(v-T)/r,A=(-m-L)/n,O=(-v-T)/r,B=_*_+N*N,I=(N<0?-1:1)*Math.acos(_/$(B)),D=(_*O-N*A<0?-1:1)*Math.acos((_*A+N*O)/$(B*(A*A+O*O)));isNaN(D)&&(D=f),!i&&0<D?D-=c:i&&D<0&&(D+=c),I%=c,D%=c;var E,X=Math.ceil(H(D)/(c/4)),z=[],G=D/X,k=4/3*F(G/2)/(1+U(G/2)),Z=u*n,q=g*n,Y=g*-r,j=u*r;for(E=0;E<X;E++)m=U(a=I+E*G),v=F(a),_=U(a+=G),N=F(a),z.push(m-k*v,v+k*m,_+k*N,N-k*_,_,N);for(E=0;E<z.length;E+=2)m=z[E],v=z[E+1],z[E]=m*Z+v*Y+S,z[E+1]=m*q+v*j+C;return z[E-2]=s,z[E-1]=l,z}}function stringToRawPath(t){function Cf(t,e,n,r){u=(n-t)/3,g=(r-e)/3,s.push(t+u,e+g,n-u,r-g,n,r)}var e,n,r,a,o,i,s,l,h,u,g,f,c,p,d,m=(t+"").replace(L,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(M)||[],v=[],y=0,x=0,w=m.length,P=0,b="ERROR: malformed path: "+t;if(!t||!isNaN(m[0])||isNaN(m[1]))return console.log(b),v;for(e=0;e<w;e++)if(c=o,isNaN(m[e])?i=(o=m[e].toUpperCase())!==m[e]:e--,r=+m[e+1],a=+m[e+2],i&&(r+=y,a+=x),e||(l=r,h=a),"M"===o)s&&(s.length<8?--v.length:P+=s.length),y=l=r,x=h=a,s=[r,a],v.push(s),e+=2,o="L";else if("C"===o)i||(y=x=0),(s=s||[0,0]).push(r,a,y+1*m[e+3],x+1*m[e+4],y+=1*m[e+5],x+=1*m[e+6]),e+=6;else if("S"===o)u=y,g=x,"C"!==c&&"S"!==c||(u+=y-s[s.length-4],g+=x-s[s.length-3]),i||(y=x=0),s.push(u,g,r,a,y+=1*m[e+3],x+=1*m[e+4]),e+=4;else if("Q"===o)u=y+2/3*(r-y),g=x+2/3*(a-x),i||(y=x=0),y+=1*m[e+3],x+=1*m[e+4],s.push(u,g,y+2/3*(r-y),x+2/3*(a-x),y,x),e+=4;else if("T"===o)u=y-s[s.length-4],g=x-s[s.length-3],s.push(y+u,x+g,r+2/3*(y+1.5*u-r),a+2/3*(x+1.5*g-a),y=r,x=a),e+=2;else if("H"===o)Cf(y,x,y=r,x),e+=1;else if("V"===o)Cf(y,x,y,x=r+(i?x-y:0)),e+=1;else if("L"===o||"Z"===o)"Z"===o&&(r=l,a=h,s.closed=!0),("L"===o||.5<H(y-r)||.5<H(x-a))&&(Cf(y,x,r,a),"L"===o&&(e+=2)),y=r,x=a;else if("A"===o){if(p=m[e+4],d=m[e+5],u=m[e+6],g=m[e+7],n=7,1<p.length&&(p.length<3?(g=u,u=d,n--):(g=d,u=p.substr(2),n-=2),d=p.charAt(1),p=p.charAt(0)),f=arcToSegment(y,x,+m[e+1],+m[e+2],+m[e+3],+p,+d,(i?y:0)+1*u,(i?x:0)+1*g),e+=n,f)for(n=0;n<f.length;n++)s.push(f[n]);y=s[s.length-2],x=s[s.length-1]}else console.log(b);return(e=s.length)<6?(v.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),v.totalPoints=P+e,v}function flatPointsToSegment(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,a=[n,r],o=2;o<t.length;o+=2)a.push(n,r,t[o],r=(t[o]-n)*e/2,n=t[o],-r);return a}function pointsToSegment(t,e){H(t[0]-t[2])<1e-4&&H(t[1]-t[3])<1e-4&&(t=t.slice(2));var n,r,a,o,i,s,l,h,u,g,f,c,p,d,m=t.length-2,v=+t[0],y=+t[1],x=+t[2],w=+t[3],P=[v,y,v,y],b=x-v,M=w-y,R=Math.abs(t[m]-v)<.001&&Math.abs(t[m+1]-y)<.001;for(R&&(t.push(x,w),x=v,w=y,v=t[m-2],y=t[m-1],t.unshift(v,y),m+=4),e=e||0===e?+e:1,a=2;a<m;a+=2)n=v,r=y,v=x,y=w,x=+t[a+2],w=+t[a+3],v===x&&y===w||(o=b,i=M,b=x-v,M=w-y,h=((s=$(o*o+i*i))+(l=$(b*b+M*M)))*e*.25/$(Math.pow(b/l+o/s,2)+Math.pow(M/l+i/s,2)),f=v-((u=v-(v-n)*(s?h/s:0))+(((g=v+(x-v)*(l?h/l:0))-u)*(3*s/(s+l)+.5)/4||0)),d=y-((c=y-(y-r)*(s?h/s:0))+(((p=y+(w-y)*(l?h/l:0))-c)*(3*s/(s+l)+.5)/4||0)),v===n&&y===r||P.push(N(u+f),N(c+d),N(v),N(y),N(g+f),N(p+d)));return v!==x||y!==w||P.length<4?P.push(N(x),N(w),N(x),N(w)):P.length-=2,2===P.length?P.push(v,y,v,y,v,y):R&&(P.splice(0,6),P.length=P.length-6),P}function rawPathToString(t){h(t[0])&&(t=[t]);var e,n,r,a,o="",i=t.length;for(n=0;n<i;n++){for(a=t[n],o+="M"+N(a[0])+","+N(a[1])+" C",e=a.length,r=2;r<e;r++)o+=N(a[r++])+","+N(a[r++])+" "+N(a[r++])+","+N(a[r++])+" "+N(a[r++])+","+N(a[r])+" ";a.closed&&(o+="z")}return o}function R(t){var e=t.ownerDocument||t;!(z in t.style)&&"msTransform"in t.style&&(G=(z="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(v=window,I=new Y,e){w=(c=e).documentElement,P=e.body,(D=c.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var n=e.createElement("div"),r=e.createElement("div");P.appendChild(n),n.appendChild(r),n.style.position="static",n.style[z]="translate3d(0,0,1px)",E=r.offsetParent!==n,P.removeChild(n)}return e}function X(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function Z(t,e){if(t.parentNode&&(c||R(t))){var n=X(t),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=n?e?"rect":"g":"div",o=2!==e?0:100,i=3===e?100:0,s="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=c.createElementNS?c.createElementNS(r.replace(/^https/,"http"),a):c.createElement(a);return e&&(n?(b=b||Z(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+i+")"),b.appendChild(l)):(f||((f=Z(t)).style.cssText=s),l.style.cssText=s+"width:0.1px;height:0.1px;top:"+i+"px;left:"+o+"px",f.appendChild(l))),l}throw"Need document and parent."}function aa(t,e){var n,r,a,o,i,s,l=X(t),h=t===l,u=l?k:q,g=t.parentNode;if(t===v)return t;if(u.length||u.push(Z(t,1),Z(t,2),Z(t,3)),n=l?b:f,l)h?(o=-(a=function _getCTM(t){var e,n=t.getCTM();return n||(e=t.style[z],t.style[z]="none",t.appendChild(D),n=D.getCTM(),t.removeChild(D),e?t.style[z]=e:t.style.removeProperty(z.replace(/([A-Z])/g,"-$1").toLowerCase())),n||I.clone()}(t)).e/a.a,i=-a.f/a.d,r=I):t.getBBox?(a=t.getBBox(),o=(r=(r=t.transform?t.transform.baseVal:{}).numberOfItems?1<r.numberOfItems?function _consolidate(t){for(var e=new Y,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix:I).a*a.x+r.c*a.y,i=r.b*a.x+r.d*a.y):(r=new Y,o=i=0),e&&"g"===t.tagName.toLowerCase()&&(o=i=0),(h?l:g).appendChild(n),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+o)+","+(r.f+i)+")");else{if(o=i=0,E)for(r=t.offsetParent,a=t;(a=a&&a.parentNode)&&a!==r&&a.parentNode;)4<(v.getComputedStyle(a)[z]+"").length&&(o=a.offsetLeft,i=a.offsetTop,a=0);if("absolute"!==(s=v.getComputedStyle(t)).position&&"fixed"!==s.position)for(r=t.offsetParent;g&&g!==r;)o+=g.scrollLeft||0,i+=g.scrollTop||0,g=g.parentNode;(a=n.style).top=t.offsetTop-i+"px",a.left=t.offsetLeft-o+"px",a[z]=s[z],a[G]=s[G],a.position="fixed"===s.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n}function ba(t,e,n,r,a,o,i){return t.a=e,t.b=n,t.c=r,t.d=a,t.e=o,t.f=i,t}var c,v,w,P,f,b,I,D,E,n,z="transform",G=z+"Origin",k=[],q=[],Y=((n=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,n=this.c,r=this.d,a=this.e,o=this.f,i=t*r-e*n||1e-10;return ba(this,r/i,-e/i,-n/i,t/i,(n*o-r*a)/i,-(t*o-e*a)/i)},n.multiply=function multiply(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f,s=t.a,l=t.c,h=t.b,u=t.d,g=t.e,f=t.f;return ba(this,s*e+h*r,s*n+h*a,l*e+u*r,l*n+u*a,o+g*e+f*r,i+g*n+f*a)},n.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},n.equals=function equals(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f;return e===t.a&&n===t.b&&r===t.c&&a===t.d&&o===t.e&&i===t.f},n.apply=function apply(t,e){void 0===e&&(e={});var n=t.x,r=t.y,a=this.a,o=this.b,i=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*a+r*i+l||0,e.y=n*o+r*s+h||0,e},Matrix2D);function Matrix2D(t,e,n,r,a,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===o&&(o=0),ba(this,t,e,n,r,a,o)}function getGlobalMatrix(t,e,n,r){if(!t||!t.parentNode||(c||R(t)).documentElement===t)return new Y;var a=function _forceNonZeroScale(t){for(var e,n;t&&t!==P;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),o=X(t)?k:q,i=aa(t,n),s=o[0].getBoundingClientRect(),l=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),u=i.parentNode,g=!r&&function _isFixed(t){return"fixed"===v.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(t),f=new Y((l.left-s.left)/100,(l.top-s.top)/100,(h.left-s.left)/100,(h.top-s.top)/100,s.left+(g?0:function _getDocScrollLeft(){return v.pageXOffset||c.scrollLeft||w.scrollLeft||P.scrollLeft||0}()),s.top+(g?0:function _getDocScrollTop(){return v.pageYOffset||c.scrollTop||w.scrollTop||P.scrollTop||0}()));if(u.removeChild(i),a)for(s=a.length;s--;)(l=a[s]).scaleX=l.scaleY=0,l.renderTransform(1,l);return e?f.inverse():f}function na(t,e,n,r){for(var a=e.length,o=2===r?0:r,i=0;i<a;i++)t[o]=parseFloat(e[i][n]),2===r&&(t[o+1]=0),o+=2;return t}function oa(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0}function pa(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r}function qa(t,e,n,r,a,o,i,s,l){return e="cubic"===i.type?[e]:(!1!==i.fromCurrent&&e.unshift(oa(n,r,s),a?oa(n,a,l):0),i.relative&&pa(e),[(a?pointsToSegment:flatPointsToSegment)(e,i.curviness)]),e=o(nt(e,n,i)),rt(t,n,r,e,"x",s),a&&rt(t,n,a,e,"y",l),cacheRawPathMeasurements(e,i.resolution||(0===i.curviness?20:12))}function ra(t){return t}function ta(t,e,n){var r,a=getGlobalMatrix(t),o=0,i=0;return"svg"===(t.tagName+"").toLowerCase()?(r=t.viewBox.baseVal).width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")}):r=e&&t.getBBox&&t.getBBox(),e&&"auto"!==e&&(o=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,i=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(o||i?a.apply({x:o,y:i}):{x:a.e,y:a.f})}function ua(t,e,n,r){var a,o=getGlobalMatrix(t.parentNode,!0,!0),i=o.clone().multiply(getGlobalMatrix(e)),s=ta(t,n,o),l=ta(e,r,o),h=l.x,u=l.y;return i.e=i.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(a=e.getAttribute("d").match(et)||[],h+=(a=i.apply({x:+a[0],y:+a[1]})).x,u+=a.y),a&&(h-=(a=i.apply(e.getBBox())).x,u-=a.y),i.e=h-s.x,i.f=u-s.y,i}var j,g,Q,W,J,o,K="x,translateX,left,marginLeft,xPercent".split(","),tt="y,translateY,top,marginTop,yPercent".split(","),i=Math.PI/180,et=/[-+\\.]*\\d+\\.?(?:e-|e\\+)?\\d*/g,nt=function _align(t,e,n){var r,a,o,i=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,g=t[0][0],f=t[0][1],c=oa(e,"x"),p=oa(e,"y");return t&&t.length?(i&&("self"===i||(r=W(i)[0]||e)===e?transformRawPath(t,1,0,0,1,c-g,p-f):(u&&!1!==u[2]?j.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[oa(e,"xPercent")/-100,oa(e,"yPercent")/-100],o=(a=ua(e,r,u,"auto")).apply({x:g,y:f}),transformRawPath(t,a.a,a.b,a.c,a.d,c+a.e-(o.x-a.e),p+a.f-(o.y-a.f)))),s?transformRawPath(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&transformRawPath(t,1,0,0,1,l||0,h||0),t):getRawPath("M0,0L0,0")},rt=function _addDimensionalPropTween(t,e,n,r,a,o){var i=e._gsap,s=i.harness,l=s&&s.aliases&&s.aliases[n],h=l&&l.indexOf(",")<0?l:n,u=t._pt=new g(t._pt,e,h,0,0,ra,0,i.set(e,h,t));u.u=Q(i.get(e,h,o))||0,u.path=r,u.pp=a,t._props.push(h)},a={version:"3.11.0",name:"motionPath",register:function register(t,e,n){Q=(j=t).utils.getUnit,W=j.utils.toArray,J=j.core.getStyleSaver,o=j.core.reverting||function(){},g=n},init:function init(t,e,n){if(!j)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var r,a,o=[],i=e.path,s=e.autoRotate,l=e.unitX,h=e.unitY,u=e.x,g=e.y,f=i[0],c=function _sliceModifier(e,n){return function(t){return e||1!==n?sliceRawPath(t,e,n):t}}(e.start,"end"in e?e.end:1);if(this.rawPaths=o,this.target=t,this.tween=n,this.styles=J&&J(t,"transform"),(this.rotate=s||0===s)&&(this.rOffset=parseFloat(s)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=Q(t._gsap.get(t,this.rProp))||0),!Array.isArray(i)||"closed"in i||"number"==typeof f)cacheRawPathMeasurements(r=c(nt(getRawPath(e.path),t,e)),e.resolution),o.push(r),rt(this,t,e.x||"x",r,"x",e.unitX||"px"),rt(this,t,e.y||"y",r,"y",e.unitY||"px");else{for(a in f)!u&&~K.indexOf(a)?u=a:!g&&~tt.indexOf(a)&&(g=a);for(a in u&&g?o.push(qa(this,na(na([],i,u,0),i,g,1),t,u,g,c,e,l||Q(i[0][u]),h||Q(i[0][g]))):u=g=0,f)a!==u&&a!==g&&o.push(qa(this,na([],i,a,2),t,a,0,c,e,Q(i[0][a])))}},render:function render(t,e){var n=e.rawPaths,r=n.length,a=e._pt;if(e.tween._time||!o()){for(1<t?t=1:t<0&&(t=0);r--;)getPositionOnPath(n[r],t,!r&&e.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,t),a=a._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?i:1)+e.rOffset+e.ru,e,t)}else e.styles.revert()},getLength:function getLength(t){return cacheRawPathMeasurements(getRawPath(t)).totalLength},sliceRawPath:sliceRawPath,getRawPath:getRawPath,pointsToSegment:pointsToSegment,stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,transformRawPath:transformRawPath,getGlobalMatrix:getGlobalMatrix,getPositionOnPath:getPositionOnPath,cacheRawPathMeasurements:cacheRawPathMeasurements,convertToPath:function convertToPath$1(t,e){return W(t).map(function(t){return convertToPath(t,!1!==e)})},convertCoordinates:function convertCoordinates(t,e,n){var r=getGlobalMatrix(e,!0,!0).multiply(getGlobalMatrix(t));return n?r.apply(n):r},getAlignMatrix:ua,getRelativePosition:function getRelativePosition(t,e,n,r){var a=ua(t,e,n,r);return{x:a.e,y:a.f}},arrayToRawPath:function arrayToRawPath(t,e){var n=na(na([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&pa(n),["cubic"===e.type?n:pointsToSegment(n,e.curviness)]}};!function _getGSAP(){return j||"undefined"!=typeof window&&(j=window.gsap)&&j.registerPlugin&&j}()||j.registerPlugin(a),t.MotionPathPlugin=a,t.default=a;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});\n' +
    '\n' +
    '    </script>\n' +
    '    <script>\n' +
    '      /*!\n' +
    ' * Physics2DPlugin 3.8.0\n' +
    ' * https://greensock.com\n' +
    ' * \n' +
    ' * @license Copyright 2021, GreenSock. All rights reserved.\n' +
    ' * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.\n' +
    ' * @author: Jack Doyle, jack@greensock.com\n' +
    ' */\n' +
    '\n' +
    '!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e=e||self).window=e.window||{})}(this,function(e){"use strict";function h(){return s||"undefined"!=typeof window&&(s=window.gsap)&&s.registerPlugin&&s}function i(e){return Math.round(1e4*e)/1e4}function l(){return String.fromCharCode.apply(null,arguments)}function o(e){s=e||h(),u||(r=s.utils.getUnit,u=1)}function p(e,i,t,n,l){var s=e._gsap,o=s.get(e,i);this.p=i,this.set=s.set(e,i),this.s=this.val=parseFloat(o),this.u=r(o)||0,this.vel=t||0,this.v=this.vel/l,n||0===n?(this.acc=n,this.a=this.acc/(l*l)):this.acc=this.a=0}var s,u,r,d=Math.PI/180,a="Physics2DPlugin",c=l(103,114,101,101,110,115,111,99,107,46,99,111,109),t=(function(e){var i=0===(window?window.location.href:"").indexOf(l(102,105,108,101,58,47,47))||-1!==e.indexOf(l(108,111,99,97,108,104,111,115,116))||-1!==e.indexOf(l(49,50,55,46,48,32,48,46,49)),t=[c,l(99,111,100,101,112,101,110,46,105,111),l(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),l(99,111,100,101,112,101,110,46,100,101,118),l(99,111,100,101,112,101,110,46,97,112,112),l(112,101,110,115,46,99,108,111,117,100),l(99,115,115,45,116,114,105,99,107,115,46,99,111,109),l(99,100,112,110,46,105,111),l(112,101,110,115,46,105,111),l(103,97,110,110,111,110,46,116,118),l(99,111,100,101,99,97,110,121,111,110,46,110,101,116),l(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),l(99,101,114,101,98,114,97,120,46,99,111,46,117,107),l(116,121,109,112,97,110,117,115,46,110,101,116),l(116,119,101,101,110,109,97,120,46,99,111,109),l(116,119,101,101,110,108,105,116,101,46,99,111,109),l(112,108,110,107,114,46,99,111),l(104,111,116,106,97,114,46,99,111,109),l(119,101,98,112,97,99,107,98,105,110,46,99,111,109),l(97,114,99,104,105,118,101,46,111,114,103),l(99,111,100,101,115,97,110,100,98,111,120,46,105,111),l(99,115,98,46,97,112,112),l(115,116,97,99,107,98,108,105,116,122,46,99,111,109),l(99,111,100,105,101,114,46,105,111),l(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),l(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),l(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),l(106,115,102,105,100,100,108,101,46,110,101,116)],n=t.length;for(setTimeout(function(){window&&window.console&&!window._gsapWarned&&s&&!1!==s.config().trialWarn&&(console.log(l(37,99,87,97,114,110,105,110,103),l(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(l(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+a+l(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(l(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),l(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)},50);-1<--n;)if(-1!==e.indexOf(t[n]))return;i||setTimeout(function(){window.location.href=l(104,116,116,112,115,58,47,47)+c+l(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin="+a+"&source=codepen"},3e3)}(window?window.location.host:""),{version:"3.8.0",name:"physics2D",register:o,init:function init(e,i,t){u||o();var n=this,l=+i.angle||0,s=+i.velocity||0,r=+i.acceleration||0,a=i.xProp||"x",c=i.yProp||"y",f=i.accelerationAngle||0===i.accelerationAngle?+i.accelerationAngle:l;n.target=e,n.tween=t,n.step=0,n.sps=30,i.gravity&&(r=+i.gravity,f=90),l*=d,f*=d,n.fr=1-(+i.friction||0),n._props.push(a,c),n.xp=new p(e,a,Math.cos(l)*s,Math.cos(f)*r,n.sps),n.yp=new p(e,c,Math.sin(l)*s,Math.sin(f)*r,n.sps),n.skipX=n.skipY=0},render:function render(e,t){var n,l,s,o,r,a,c=t.xp,p=t.yp,f=t.tween,u=t.target,d=t.step,h=t.sps,v=t.fr,w=t.skipX,g=t.skipY,y=f._from?f._dur-f._time:f._time;if(1===v)s=y*y*.5,n=c.s+c.vel*y+c.acc*s,l=p.s+p.vel*y+p.acc*s;else{for(o=a=(0|(y*=h))-d,a<0&&(c.v=c.vel/h,p.v=p.vel/h,c.val=c.s,p.val=p.s,o=a=(t.step=0)|y),r=y%1*v;a--;)c.v+=c.a,p.v+=p.a,c.v*=v,p.v*=v,c.val+=c.v,p.val+=p.v;n=c.val+c.v*r,l=p.val+p.v*r,t.step+=o}w||c.set(u,c.p,i(n)+c.u),g||p.set(u,p.p,i(l)+p.u)},kill:function kill(e){this.xp.p===e&&(this.skipX=1),this.yp.p===e&&(this.skipY=1)}});h()&&s.registerPlugin(t),e.Physics2DPlugin=t,e.default=t;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});\n' +
    '\n' +
    '    </script>\n' +
    '    <script>\n' +
    '      /*!\n' +
    ' * EasePack 3.0.0\n' +
    ' * https://greensock.com\n' +
    ' *\n' +
    ' * @license Copyright 2008-2019, GreenSock. All rights reserved.\n' +
    ' * Subject to the terms at https://greensock.com/standard-license or for\n' +
    ' * Club GreenSock members, the agreement issued with that membership.\n' +
    ' * @author: Jack Doyle, jack@greensock.com\n' +
    '*/\n' +
    '!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).window=e.window||{})}(this,function(e){"use strict";function f(){return w||"undefined"!=typeof window&&(w=window.gsap)&&w.registerPlugin&&w}function g(e,n){return!!(void 0===e?n:e&&!~(e+"").indexOf("false"))}function h(e){if(w=e||f()){r=w.registerEase;var n,t=w.parseEase(),o=function createConfig(t){return function(e){var n=.5+e/2;t.config=function(e){return t(2*(1-e)*e*n+e*e)}}};for(n in t)t[n].config||o(t[n]);for(n in r("slow",a),r("expoScale",s),r("rough",u),c)"version"!==n&&w.core.globals(n,c[n])}}function i(e,n,t){var o=(e=Math.min(1,e||.7))<1?n||0===n?n:.7:0,r=(1-e)/2,i=r+e,a=g(t);return function(e){var n=e+(.5-e)*o;return e<r?a?1-(e=1-e/r)*e:n-(e=1-e/r)*e*e*e*n:i<e?a?1===e?0:1-(e=(e-i)/r)*e:n+(e-n)*(e=(e-i)/r)*e*e*e:a?1:n}}function j(n,e,t){var o=Math.log(e/n),r=e-n;return t=t&&w.parseEase(t),function(e){return(n*Math.exp(o*(t?t(e):e))-n)/r}}function k(e,n,t){this.t=e,this.v=n,t&&(((this.next=t).prev=this).c=t.v-n,this.gap=t.t-e)}function l(e){"object"!=typeof e&&(e={points:+e||20});for(var n,t,o,r,i,a,f,s=e.taper||"none",u=[],c=0,p=0|(+e.points||20),l=p,v=g(e.randomize,!0),d=g(e.clamp),h=w?w.parseEase(e.template):0,x=.4*(+e.strength||1);-1<--l;)n=v?Math.random():1/p*l,t=h?h(n):n,o="none"===s?x:"out"===s?(r=1-n)*r*x:"in"===s?n*n*x:n<.5?(r=2*n)*r*.5*x:(r=2*(1-n))*r*.5*x,v?t+=Math.random()*o-.5*o:l%2?t+=.5*o:t-=.5*o,d&&(1<t?t=1:t<0&&(t=0)),u[c++]={x:n,y:t};for(u.sort(function(e,n){return e.x-n.x}),a=new k(1,1,null),l=p;l--;)i=u[l],a=new k(i.x,i.y,a);return f=new k(0,0,a.t?a:a.next),function(e){var n=f;if(e>n.t){for(;n.next&&e>=n.t;)n=n.next;n=n.prev}else for(;n.prev&&e<=n.t;)n=n.prev;return(f=n).v+(e-n.t)/n.gap*n.c}}var w,r,a=i(.7);(a.ease=a).config=i;var s=j(1,2);s.config=j;var u=l();(u.ease=u).config=l;var c={SlowMo:a,RoughEase:u,ExpoScaleEase:s};for(var n in c)c[n].register=h,c[n].version="3.0.0";f()&&w.registerPlugin(a),e.EasePack=c,e.ExpoScaleEase=s,e.RoughEase=u,e.SlowMo=a,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})});\n' +
    '\n' +
    '    </script>\n' +
    '  </body>\n' +
    '  <script>\n' +
    '    function snow() {\n' +
    '      //  1、定义一片雪花模板\n' +
    '      var flake = document.createElement("div");\n' +
    '      // 雪花字符 ❄❉❅❆✻✼❇❈❊✥✺\n' +
    '      flake.innerHTML = "❆";\n' +
    '      flake.style.cssText = "position:absolute;color:#fff;";\n' +
    '\n' +
    '      //获取页面的高度 相当于雪花下落结束时Y轴的位置\n' +
    '      var documentHieght = window.innerHeight;\n' +
    '      //获取页面的宽度，利用这个数来算出，雪花开始时left的值\n' +
    '      var documentWidth = window.innerWidth;\n' +
    '\n' +
    '      //定义生成一片雪花的毫秒数\n' +
    '      var millisec = 100;\n' +
    '      //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；\n' +
    '      setInterval(function () {\n' +
    '        //页面加载之后，定时器就开始工作\n' +
    '        //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置\n' +
    '        var startLeft = Math.random() * documentWidth;\n' +
    '\n' +
    '        //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置\n' +
    '        var endLeft = Math.random() * documentWidth;\n' +
    '\n' +
    '        //随机生成雪花大小\n' +
    '        var flakeSize = 5 + 20 * Math.random();\n' +
    '\n' +
    '        //随机生成雪花下落持续时间\n' +
    '        var durationTime = 4000 + 7000 * Math.random();\n' +
    '\n' +
    '        //随机生成雪花下落 开始 时的透明度\n' +
    '        var startOpacity = 0.7 + 0.3 * Math.random();\n' +
    '\n' +
    '        //随机生成雪花下落 结束 时的透明度\n' +
    '        var endOpacity = 0.2 + 0.2 * Math.random();\n' +
    '\n' +
    '        //克隆一个雪花模板\n' +
    '        var cloneFlake = flake.cloneNode(true);\n' +
    '\n' +
    '        //第一次修改样式，定义克隆出来的雪花的样式\n' +
    '        cloneFlake.style.cssText += `\n' +
    '                        left: `+startLeft+`px;\n' +
    '                        opacity: ${startOpacity};\n' +
    '                        font-size:${flakeSize}px;\n' +
    '                        top:-25px;\n' +
    '                            transition:${durationTime}ms;\n' +
    '                    `;\n' +
    '\n' +
    '        //拼接到页面中\n' +
    '        document.body.appendChild(cloneFlake);\n' +
    '\n' +
    '        //设置第二个定时器，一次性定时器，\n' +
    '        //当第一个定时器生成雪花，并在页面上渲染出来后，修改雪花的样式，让雪花动起来；\n' +
    '        setTimeout(function () {\n' +
    '          //第二次修改样式\n' +
    '          cloneFlake.style.cssText += `\n' +
    '                                left: ${endLeft}px;\n' +
    '                                top:${documentHieght}px;\n' +
    '                                opacity:${endOpacity};\n' +
    '                            `;\n' +
    '\n' +
    '          //4、设置第三个定时器，当雪花落下后，删除雪花。\n' +
    '          setTimeout(function () {\n' +
    '            cloneFlake.remove();\n' +
    '          }, durationTime);\n' +
    '        }, 0);\n' +
    '      }, millisec);\n' +
    '    }\n' +
    '    snow();\n' +
    '    MorphSVGPlugin.convertToPath("polygon");\n' +
    '    var xmlns = "http://www.w3.org/2000/svg",\n' +
    '      xlinkns = "http://www.w3.org/1999/xlink",\n' +
    '      select = function (s) {\n' +
    '        return document.querySelector(s);\n' +
    '      },\n' +
    '      selectAll = function (s) {\n' +
    '        return document.querySelectorAll(s);\n' +
    '      },\n' +
    '      pContainer = select(".pContainer"),\n' +
    '      mainSVG = select(".mainSVG"),\n' +
    '      star = select("#star"),\n' +
    '      sparkle = select(".sparkle"),\n' +
    '      tree = select("#tree"),\n' +
    '      showParticle = true,\n' +
    '      particleColorArray = [\n' +
    '        "#E8F6F8",\n' +
    '        "#ACE8F8",\n' +
    '        "#F6FBFE",\n' +
    '        "#A2CBDC",\n' +
    '        "#B74551",\n' +
    '        "#5DBA72",\n' +
    '        "#910B28",\n' +
    '        "#910B28",\n' +
    '        "#446D39",\n' +
    '      ],\n' +
    '      particleTypeArray = ["#star", "#circ", "#cross", "#heart"],\n' +
    '      // particleTypeArray = [\'#star\'],\n' +
    '      particlePool = [],\n' +
    '      particleCount = 0,\n' +
    '      numParticles = 201;\n' +
    '\n' +
    '    // gsap动画库\n' +
    '    gsap.set("svg", {\n' +
    '      visibility: "visible",\n' +
    '    });\n' +
    '\n' +
    '    gsap.set(sparkle, {\n' +
    '      transformOrigin: "50% 50%",\n' +
    '      y: -100,\n' +
    '    });\n' +
    '\n' +
    '    let getSVGPoints = (path) => {\n' +
    '      let arr = [];\n' +
    '      var rawPath = MotionPathPlugin.getRawPath(path)[0];\n' +
    '      rawPath.forEach((el, value) => {\n' +
    '        let obj = {};\n' +
    '        obj.x = rawPath[value * 2];\n' +
    '        obj.y = rawPath[value * 2 + 1];\n' +
    '        if (value % 2) {\n' +
    '          arr.push(obj);\n' +
    '        }\n' +
    '        //console.log(value)\n' +
    '      });\n' +
    '\n' +
    '      return arr;\n' +
    '    };\n' +
    '    let treePath = getSVGPoints(".treePath");\n' +
    '\n' +
    '    var treeBottomPath = getSVGPoints(".treeBottomPath");\n' +
    '\n' +
    '    //console.log(starPath.length)\n' +
    '    var mainTl = gsap.timeline({ delay: 0, repeat: 0 }),\n' +
    '      starTl;\n' +
    '\n' +
    '    //tl.seek(100).timeScale(1.82)\n' +
    '\n' +
    '    function flicker(p) {\n' +
    '      //console.log("flivker")\n' +
    '      gsap.killTweensOf(p, { opacity: true });\n' +
    '      gsap.fromTo(\n' +
    '        p,\n' +
    '        {\n' +
    '          opacity: 1,\n' +
    '        },\n' +
    '        {\n' +
    '          duration: 0.07,\n' +
    '          opacity: Math.random(),\n' +
    '          repeat: -1,\n' +
    '        }\n' +
    '      );\n' +
    '    }\n' +
    '\n' +
    '    function createParticles() {\n' +
    '      //var step = numParticles/starPath.length;\n' +
    '      //console.log(starPath.length)\n' +
    '      var i = numParticles,\n' +
    '        p,\n' +
    '        particleTl,\n' +
    '        step = numParticles / treePath.length,\n' +
    '        pos;\n' +
    '      while (--i > -1) {\n' +
    '        p = select(particleTypeArray[i % particleTypeArray.length]).cloneNode(\n' +
    '          true\n' +
    '        );\n' +
    '        mainSVG.appendChild(p);\n' +
    '        p.setAttribute(\n' +
    '          "fill",\n' +
    '          particleColorArray[i % particleColorArray.length]\n' +
    '        );\n' +
    '        p.setAttribute("class", "particle");\n' +
    '        particlePool.push(p);\n' +
    '        //hide them initially\n' +
    '        gsap.set(p, {\n' +
    '          x: -100,\n' +
    '          y: -100,\n' +
    '          transformOrigin: "50% 50%",\n' +
    '        });\n' +
    '      }\n' +
    '    }\n' +
    '\n' +
    '    var getScale = gsap.utils.random(0.5, 3, 0.001, true); //  圣诞树开始绘画时小光点动画的特效（参数：最小值，最大值，延迟）\n' +
    '\n' +
    '    function playParticle(p) {\n' +
    '      if (!showParticle) {\n' +
    '        return;\n' +
    '      }\n' +
    '      var p = particlePool[particleCount];\n' +
    '      gsap.set(p, {\n' +
    '        x: gsap.getProperty(".pContainer", "x"),\n' +
    '        y: gsap.getProperty(".pContainer", "y"),\n' +
    '        scale: getScale(),\n' +
    '      });\n' +
    '      var tl = gsap.timeline();\n' +
    '      tl.to(p, {\n' +
    '        duration: gsap.utils.random(0.61, 6),\n' +
    '        physics2D: {\n' +
    '          velocity: gsap.utils.random(-23, 23),\n' +
    '          angle: gsap.utils.random(-180, 180),\n' +
    '          gravity: gsap.utils.random(-6, 50),\n' +
    '        },\n' +
    '        scale: 0,\n' +
    '        rotation: gsap.utils.random(-123, 360),\n' +
    '        ease: "power1",\n' +
    '        onStart: flicker,\n' +
    '        onStartParams: [p],\n' +
    '        //repeat:-1,\n' +
    '        onRepeat: (p) => {\n' +
    '          gsap.set(p, {\n' +
    '            scale: getScale(),\n' +
    '          });\n' +
    '        },\n' +
    '        onRepeatParams: [p],\n' +
    '      });\n' +
    '\n' +
    '      //\n' +
    '      //particlePool[particleCount].play();\n' +
    '      particleCount++;\n' +
    '      //mainTl.add(tl, i / 1.3)\n' +
    '      particleCount = particleCount >= numParticles ? 0 : particleCount;\n' +
    '    }\n' +
    '    // 圣诞树开始绘画时小光点动画\n' +
    '    function drawStar() {\n' +
    '      starTl = gsap.timeline({ onUpdate: playParticle });\n' +
    '      starTl\n' +
    '        .to(".pContainer, .sparkle", {\n' +
    '          duration: 6,\n' +
    '          motionPath: {\n' +
    '            path: ".treePath",\n' +
    '            autoRotate: false,\n' +
    '          },\n' +
    '          ease: "linear",\n' +
    '        })\n' +
    '        .to(".pContainer, .sparkle", {\n' +
    '          duration: 1,\n' +
    '          onStart: function () {\n' +
    '            showParticle = false;\n' +
    '          },\n' +
    '          x: treeBottomPath[0].x,\n' +
    '          y: treeBottomPath[0].y,\n' +
    '        })\n' +
    '        .to(\n' +
    '          ".pContainer, .sparkle",\n' +
    '          {\n' +
    '            duration: 2,\n' +
    '            onStart: function () {\n' +
    '              showParticle = true;\n' +
    '            },\n' +
    '            motionPath: {\n' +
    '              path: ".treeBottomPath",\n' +
    '              autoRotate: false,\n' +
    '            },\n' +
    '            ease: "linear",\n' +
    '          },\n' +
    '          "-=0"\n' +
    '        )\n' +
    '        // 圣诞树中间那条横线动画   .treeBottomMask  是绑定class=\'treeBottomMask\'这个标签\n' +
    '        .from(\n' +
    '          ".treeBottomMask",\n' +
    '          {\n' +
    '            duration: 2,\n' +
    '            drawSVG: "0% 0%",\n' +
    '            stroke: "#FFF",\n' +
    '            ease: "linear",\n' +
    '          },\n' +
    '          "-=2"\n' +
    '        );\n' +
    '\n' +
    '      //gsap.staggerTo(particlePool, 2, {})\n' +
    '    }\n' +
    ';\n' +
    '    //ScrubGSAPTimeline(mainTl)\n' +
    '\n' +
    '    function drawMain() {\n' +
    '\n' +
    'mainTl\n' +
    '  // 圣诞树上半身轮廓动画\n' +
    '  .from([".treePathMask", ".treePotMask"], {\n' +
    '    duration: 6,\n' +
    '    drawSVG: "0% 0%",\n' +
    '    stroke: "#FFF",\n' +
    '    stagger: {\n' +
    '      each: 6,\n' +
    '    },\n' +
    '    duration: gsap.utils.wrap([6, 1, 2]),\n' +
    '    ease: "linear",\n' +
    '  })\n' +
    '  //  圣诞树头上的星星动画\n' +
    '  .from(\n' +
    '    ".treeStar",\n' +
    '    {\n' +
    '      duration: 3,\n' +
    '      //skewY:270,\n' +
    '      scaleY: 0,\n' +
    '      scaleX: 0.15,\n' +
    '      transformOrigin: "50% 50%",\n' +
    '      ease: "elastic(1,0.5)",\n' +
    '    },\n' +
    '    "-=4"\n' +
    '  )\n' +
    '  // 当绘画圣诞树的小光点绘制完时，让小光点消失\n' +
    '  .to(\n' +
    '    ".sparkle",\n' +
    '    {\n' +
    '      duration: 3,\n' +
    '      opacity: 0,\n' +
    '      ease: "rough({strength: 2, points: 100, template: linear, taper: both, randomize: true, clamp: false})",\n' +
    '    },\n' +
    '    "-=0"\n' +
    '  )\n' +
    '  // 给圣诞树头上的星星加个白色特效\n' +
    '  .to(\n' +
    '    ".treeStarOutline",\n' +
    '    {\n' +
    '      duration: 1,\n' +
    '      opacity: 0.3,\n' +
    '      ease: "rough({strength: 2, points: 16, template: linear, taper: none, randomize: true, clamp: false})",\n' +
    '    },\n' +
    '    "+=1"\n' +
    '  );\n' +
    '/* .to(\'.whole\', {\n' +
    'opacity: 0\n' +
    '}, \'+=2\') */\n' +
    '    }\n' +
    '\n' +
    '\n' +
    '\n' +
    'function drawStars() {\n' +
    '      let canvas = document.getElementById("stars"),\n' +
    '        ctx = canvas.getContext("2d"),\n' +
    '        w = (canvas.width = window.innerWidth),\n' +
    '        h = (canvas.height = window.innerHeight),\n' +
    '        hue = 37, //色调色彩\n' +
    '        stars = [], //保存所有星星\n' +
    '        count = 0, //用于计算星星\n' +
    '        maxStars = 1300; //星星数量\n' +
    '\n' +
    '      //canvas2是用来创建星星的源图像，即母版，\n' +
    '      //根据星星自身属性的大小来设置\n' +
    '      var canvas2 = document.createElement("canvas"),\n' +
    '        ctx2 = canvas2.getContext("2d");\n' +
    '      canvas2.width = 100;\n' +
    '      canvas2.height = 100;\n' +
    '      //创建径向渐变，从坐标(half，half)半径为0的圆开始，\n' +
    '      //到坐标为(half,half)半径为half的圆结束\n' +
    '      var half = canvas2.width / 2,\n' +
    '        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);\n' +
    '      gradient2.addColorStop(0.025, "#CCC");\n' +
    '      //hsl是另一种颜色的表示方式，\n' +
    '      //h->hue,代表色调色彩，0为red，120为green，240为blue\n' +
    '      //s->saturation，代表饱和度，0%-100%\n' +
    '      //l->lightness，代表亮度，0%为black，100%位white\n' +
    '      gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 10%)");\n' +
    '      gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 2%)");\n' +
    '      gradient2.addColorStop(1, "transparent");\n' +
    '\n' +
    '      ctx2.fillStyle = gradient2;\n' +
    '      ctx2.beginPath();\n' +
    '      ctx2.arc(half, half, half, 0, Math.PI * 2);\n' +
    '      ctx2.fill();\n' +
    '\n' +
    '      // End cache\n' +
    '      function random(min, max) {\n' +
    '        if (arguments.length < 2) {\n' +
    '          max = min;\n' +
    '          min = 0;\n' +
    '        }\n' +
    '\n' +
    '        if (min > max) {\n' +
    '          var hold = max;\n' +
    '          max = min;\n' +
    '          min = hold;\n' +
    '        }\n' +
    '\n' +
    '        //返回min和max之间的一个随机值\n' +
    '        return Math.floor(Math.random() * (max - min + 1)) + min;\n' +
    '      }\n' +
    '\n' +
    '      function maxOrbit(x, y) {\n' +
    '        var max = Math.max(x, y),\n' +
    '          diameter = Math.round(Math.sqrt(max * max + max * max));\n' +
    '        //星星移动范围，值越大范围越小，\n' +
    '        return diameter / 2;\n' +
    '      }\n' +
    '\n' +
    '      var Star = function () {\n' +
    '        //星星移动的半径\n' +
    '        this.orbitRadius = random(maxOrbit(w, h));\n' +
    '        //星星大小，半径越小，星星也越小，即外面的星星会比较大\n' +
    '        this.radius = random(60, this.orbitRadius) / 8;\n' +
    '        //所有星星都是以屏幕的中心为圆心\n' +
    '        this.orbitX = w / 2;\n' +
    '        this.orbitY = h / 2;\n' +
    '        //星星在旋转圆圈位置的角度,每次增加speed值的角度\n' +
    '        //利用正弦余弦算出真正的x、y位置\n' +
    '        this.timePassed = random(0, maxStars);\n' +
    '        //星星移动速度\n' +
    '        this.speed = random(this.orbitRadius) / 50000;\n' +
    '        //星星图像的透明度\n' +
    '        this.alpha = random(2, 10) / 10;\n' +
    '\n' +
    '        count++;\n' +
    '        stars[count] = this;\n' +
    '      };\n' +
    '\n' +
    '      Star.prototype.draw = function () {\n' +
    '        //星星围绕在以屏幕中心为圆心，半径为orbitRadius的圆旋转\n' +
    '        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,\n' +
    '          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,\n' +
    '          twinkle = random(10);\n' +
    '\n' +
    '        //星星每次移动会有1/10的几率变亮或者变暗\n' +
    '        if (twinkle === 1 && this.alpha > 0) {\n' +
    '          //透明度降低，变暗\n' +
    '          this.alpha -= 0.05;\n' +
    '        } else if (twinkle === 2 && this.alpha < 1) {\n' +
    '          //透明度升高，变亮\n' +
    '          this.alpha += 0.05;\n' +
    '        }\n' +
    '\n' +
    '        ctx.globalAlpha = this.alpha;\n' +
    '        //使用canvas2作为源图像来创建星星，\n' +
    '        //位置在x - this.radius / 2, y - this.radius / 2\n' +
    '        //大小为 this.radius\n' +
    '        ctx.drawImage(\n' +
    '          canvas2,\n' +
    '          x - this.radius / 2,\n' +
    '          y - this.radius / 2,\n' +
    '          this.radius,\n' +
    '          this.radius\n' +
    '        );\n' +
    '        //没旋转一次，角度就会增加\n' +
    '        this.timePassed += this.speed;\n' +
    '      };\n' +
    '\n' +
    '      //初始化所有星星\n' +
    '      for (var i = 0; i < maxStars; i++) {\n' +
    '        new Star();\n' +
    '      }\n' +
    '\n' +
    '      function animation() {\n' +
    '        //以新图像覆盖已有图像的方式进行绘制背景颜色\n' +
    '        ctx.globalCompositeOperation = "source-over";\n' +
    '        ctx.globalAlpha = 0.9; //尾巴\n' +
    '        ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 2)";\n' +
    '        ctx.fillRect(0, 0, w, h);\n' +
    '\n' +
    '        //源图像和目标图像同时显示，重叠部分叠加颜色效果\n' +
    '        ctx.globalCompositeOperation = "lighter";\n' +
    '        for (var i = 1, l = stars.length; i < l; i++) {\n' +
    '          stars[i].draw();\n' +
    '        }\n' +
    '\n' +
    '        //调用该方法执行动画，并且在重绘的时候调用指定的函数来更新动画\n' +
    '        //回调的次数通常是每秒60次\n' +
    '        window.requestAnimationFrame(animation);\n' +
    '      }\n' +
    '\n' +
    '      animation();\n' +
    '    }\n' +
    '\n' +
    '\n' +
    '    let myLabels = [\n' +
    '      "肥汪卷",\n' +
    '      "Merry Christmas",\n' +
    '      "健健康康，平安喜乐",\n' +
    '      "一定要站在你所热爱的世界里闪闪发光",\n' +
    '    ];\n' +
    '    \n' +
    '    function init() {\n' +
    '      let element = document.getElementById("header");\n' +
    '      for(let i = 0; i < myLabels.length; i++) {\n' +
    '        let _p = document.createElement("p");\n' +
    '        _p.className = "header-item";\n' +
    '        _p.innerHTML = myLabels[i];\n' +
    '        element.appendChild(_p);\n' +
    '      }\n' +
    '\n' +
    '      let labels = document.getElementsByClassName(\'header-item\');\n' +
    '      for(let i = 0; i < myLabels.length; i++) {\n' +
    '        setTimeout(() => {\n' +
    '          labels[i].classList.add("show");\n' +
    '        }, 1000 * i);\n' +
    '      }      \n' +
    '    }\n' +
    '    let init_flag = false;\n' +
    '      // music\n' +
    '      let music_url = "http://music.163.com/song/media/outer/url?id=1892513656.mp3";\n' +
    '      let _music = new Audio(music_url);\n' +
    '      window.onclick = function() {\n' +
    '        if(init_flag) return;\n' +
    '        init_flag = true;\n' +
    '        _music.play();\n' +
    '        init();\n' +
    '        let mask = document.getElementById("mask");\n' +
    '        mask.remove();\n' +
    '        createParticles()\n' +
    '        drawStar();\n' +
    '        drawMain();\n' +
    '        mainTl.add(starTl, 0);\n' +
    '        gsap.globalTimeline.timeScale(1.5); //  圣诞树开始绘画时小光点动画的绘画速率，越大越快\n' +
    '        drawStars();\n' +
    '      }\n' +
    '  \n' +
    '  </script>\n' +
    '</html>\n' +
    ;
}

module.exports = fn;
