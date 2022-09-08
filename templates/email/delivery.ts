const deliveryTemp = (link: string, message?: string) => {
  return `
  <!doctype html>
<html>

<head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Simple Call To Action</title>
</head>

<body style="padding: 25px 5px; background: #fbfcfe;">
    <div class="main" style="max-width: 600px; width: 100%; margin: 0 auto;">
        <h1 style="margin: 0 0 20px; font-size: 32px; text-align: center;"><a href="https://secret.hrvs.me" style="text-decoration: none; color: #0072f5;">Secretly</a></h1>
        <div class="inner" style="box-sizing: border-box; width: 100%; background: #fff; border-radius: 10px; padding: 25px 10px; margin: 0 auto; border: 1px solid #e5eafa;">
            <p class="hello" style="margin: 0; font-size: 16px; text-align: center; color: black; line-height: 25px; margin-bottom: 5px;">Hello,</p>
            <p class="inst" style="margin: 0; font-size: 16px; text-align: center; color: black; line-height: 25px;">Someone sent you a secret. Click to see it.</p>
            <div class="btn-wrapper" style="width: 140px; margin: 25px auto;">
                <button style="height: 48px; width: 140px; border-radius: 10px; border: 0; outline: 0; cursor: pointer; font-size: 16px; background-color: #0072f5;"><a href="https://secret.hrvs.me" style="text-decoration: none; color: white;">View Secret</a></button>
            </div>

            <p class="warning" style="margin: 0; font-size: 16px; text-align: center; color: black; line-height: 25px; margin-bottom: 20px;">Be careful, the secret can be viewed only once.</p>
            <p class="thanks" style="margin: 0; font-size: 16px; text-align: center; color: black; line-height: 25px;">Thanks!<br><a href style="text-decoration: none; color: #0072f5;">Secretly App</a></p>
        </div>
    </div>
</body>

</html>
  `;
};

export default deliveryTemp;
