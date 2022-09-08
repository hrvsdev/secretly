const deliveryTemp = (link: string, message?: string) => {
  return `
    <div
      style="
    background: #fafbfc;
    padding: 25px 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  "
    >
      <h1 style="margin: 0 0 20px">
        <a style="text-decoration: none; color: #0072f5" href="https://secret.hrvs.me">Secretly</a>
      </h1>
      <div
        style="
      max-width: 600px;
      width: 100%;
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
    "
      >
        <p style="margin: 0; font-size: 16px; text-align: center; margin-bottom: 5px">
          Hello Internet User,
        </p>
        <p style="margin: 0; font-size: 16px; text-align: center">
          Someone sent you a secret. Click to see it.
        </p>
        <button
          style="
        margin: 20px 0;
        height: 48px;
        width: 140px;
        border-radius: 10px;
        border: 0;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
        background-color: #0072f5;
      "
        >
          <a style="color: white; text-decoration: none" href="${link}">View Secret</a>
        </button>
        <p style="margin: 0; font-size: 16px; text-align: center; margin-bottom: 20px">
          Be careful, the secret can be viewed only once.
        </p>
        <p style="margin: 0; font-size: 16px; text-align: center">
          Thanks!<br /><a
            style="color: #0072f5; text-decoration: none"
            href="https://secret.hrvs.me"
            >Secretly App</a
          >
        </p>
      </div>
    </div>
  `;
};

export default deliveryTemp;
