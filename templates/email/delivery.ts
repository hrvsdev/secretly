const delivery = (link: string, message?: string) => {
  return `
    <style>
      body {
        background: #fafbfc;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, sans-serif;
      }

      h1 {
        text-align: center;
        color: #0072f5;
      }

      main {
        background: white;
        padding: 30px 20px;
        max-width: 600px;
        margin: auto;
        text-align: center;
        border-radius: 10px;
      }

      p {
        font-size: 17px;
        line-height: 25px;
        margin: 0;
      }

      a {
        text-decoration: none;
      }

      button {
        all: unset;
        height: 48px;
        color: #ffffff;
        background-color: #0072f5;
        border-radius: 10px;
        padding: 0 40px;
        margin: 20px 0;
        will-change: transform;
        transition: all 0.25s;
      }

      button:hover {
        filter: brightness(1.2);
      }

      button:active {
        transform: scale(0.96);
      }

      p a {
        color: #0072f5;
      }
    </style>

    <h1>Secretly</h1>
    <main>
      <p>
        Hello, <br />
        Someone has sent you a secret.
      </p>
      <a href=${link}><button>View Secret</button></a>
      <p style="margin-bottom: 12px;">Be aware, it will be deleted instantly after opening.</p>
      <p>
        Thanks! <br />
        <a href="https://secret.hrvs.me">Secretly App</a>
      </p>
    </main>
  `;
};

export default delivery;
