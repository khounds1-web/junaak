export default function Home({
  searchParams,
}: {
  searchParams?: { joined?: string; error?: string };
}) {
  const joined = searchParams?.joined === "true";
  const error = searchParams?.error;

  return (
    <main className="page">
      <section className="imagePanel" aria-label="Junaak textile study image">
        <img
          src="/junaak-textile.png"
          alt="Open weave textile in soft folds"
        />
      </section>

      <section className="contentPanel">
        <header className="header">
          <img
            className="logo"
            src="/junaak-logo.png"
            alt="Junaak — Quiet Comfort"
          />
        </header>

        <div className="center">
          <div className="copy">
            <p className="eyebrow">A material study</p>

            <h1>
              Softness,
              <br />
              before form.
            </h1>

            <div className="bodyCopy">
              <p>
                Junaak is developing a material-led textile brand around natural
                fibers, tactile surfaces, quiet drape and everyday comfort.
              </p>
              <p>
                No products yet. Just a careful study of cloth — and an early
                list for those who want to help shape what it becomes.
              </p>
            </div>

            {joined ? (
              <div className="successMessage">
                Thank you — you’re on the early list.
              </div>
            ) : (
              <form className="signup" action="/api/waitlist" method="post">
                <div className="emailRow">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                  />
                  <button type="submit">Join the early list →</button>
                </div>
              </form>
            )}

            {error ? (
              <p className="errorMessage">
                Something went wrong. Please try again.
              </p>
            ) : null}

            <p className="note">
              Material notes, sample previews and occasional feedback questions.
              No products yet.
            </p>
          </div>
        </div>

        <footer className="footer">
          <span>Natural fibers</span>
          <span className="divider">|</span>
          <span>Textural surfaces</span>
          <span className="divider">|</span>
          <span>Soft drape</span>
        </footer>
      </section>
    </main>
  );
}
