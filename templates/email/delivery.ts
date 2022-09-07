const delivery = (link: string, message?: string) => {
  return `
    <h1 style="font-family: -apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;text-align: center;color: #0072f5;">
Secretly
</h1>
<main style="font-family: -apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;background: white;padding: 30px 20px;max-width: 600px;margin: auto;text-align: center;border-radius: 10px;">
<p style="font-family: -apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;font-size: 17px;line-height: 25px;margin: 0;">
  Someone has sent you a secret. <br style="font-family: -apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;">
  Click to view it for one time. After that it will be deleted.
</p>
<a href="https://google.com" style="font-family: -apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;text-decoration: none;"><button style="font-family: -apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;all: unset;height: 48px;color: #ffffff;background-color: #0072f5;border-radius: 10px;padding: 0 40px;margin: 20px 0;will-change: transform;transition: all 0.25s;">
    View Secret
  </button></a>
<p style="font-family: -apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;font-size: 17px;line-height: 25px;margin: 0;">
  Thanks, <br style="font-family: -apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;">
  <a href="https://secret.hrvs.me" style="font-family: -apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;text-decoration: none;color: #0072f5;">Secretly App</a>
</p>
</main>
    `;
};

export default delivery;
