const recieptTemp = (id: string, time: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Simple Call To Action</title>
      </head>

      <body style="padding: 25px 10px; background: #fbfcfe;">
      <div class="main" style="max-width: 600px; width: 100%; margin: 0 auto;">
      <h1 style="margin: 0 0 20px; font-size: 32px; text-align: center;">
        <a href="https://secret.hrvs.me" style="text-decoration: none; color: #0072f5;">Secretly</a>
      </h1>
      <div class="inner" style="box-sizing: border-box; width: 100%; background: #fff; border-radius: 10px; padding: 25px 10px; margin: 0 auto; border: 1px solid #e5eafa;">
        <p class="hello" style="margin: 0 0 10px; font-size: 16px; text-align: center; color: black; line-height: 25px;">
          Hello,
        </p>
        <p class="inst" style="margin: 0 0 5px; font-size: 16px; text-align: center; color: black; line-height: 25px;">
          The secret you created was opened.
          <p style="margin: 0 0 25px; font-size: 16px; text-align: center; color: black; line-height: 25px;">
            <b>ID:</b> ${id}<br>
            <b>Time:</b> ${time}
          </p>
        </p>
        <p class="thanks" style="margin: 0; font-size: 16px; text-align: center; color: black; line-height: 25px;">
          Thanks!<br /><a href="https://secret.hrvs.me" style="text-decoration: none; color: #0072f5;">Secretly App</a>
        </p>
      </div>
    </div>    
      </body>
    </html>
  `;
};

export default recieptTemp;
