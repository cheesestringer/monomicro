/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function NxWelcome({ title }: { title: string }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    html {
      -webkit-text-size-adjust: 100%;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
    .container {
      margin-left: auto;
      margin-right: auto;
      max-width: 768px;
      padding-bottom: 3rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: rgba(55, 65, 81, 1);
      width: 100%;
    }
    #welcome {
      margin-top: 2.5rem;
    }
    #welcome h1 {
      font-size: 3rem;
      font-weight: 500;
      letter-spacing: -0.025em;
      line-height: 1;
    }
          `,
        }}
      />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>It's me, {title} 👋</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
