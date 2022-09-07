const deliveryTemp = (link: string, message?: string) => {
  return `
  <h1 style="text-align: center;color: #0072f5;">Secretly</h1>
  <main style="background: white;padding: 30px 20px;max-width: 600px;margin: auto;text-align: center;border-radius: 10px;">
    <p style="font-size: 17px;line-height: 25px;margin: 0;">
      Hello, <br>
      Someone has sent you a secret.
    </p>
    <a href="${link}" style="text-decoration: none;"><button style="all: unset;height: 48px;color: #ffffff;background-color: #0072f5;border-radius: 10px;padding: 0 40px;margin: 20px 0;will-change: transform;transition: all 0.25s;">View Secret</button></a>
    <p style="margin-bottom: 12px;font-size: 17px;line-height: 25px;margin: 0;">Be aware, it will be deleted instantly after opening.</p>
    <p style="font-size: 17px;line-height: 25px;margin: 0;">
      Thanks! <br>
      <a href="https://secret.hrvs.me" style="text-decoration: none;color: #0072f5;">Secretly App</a>
    </p>
  </main>
  `;
};

export default deliveryTemp;
