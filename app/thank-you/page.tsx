export default function ThankYouPage() {
  return (
    <main className="thankYouPage">
      <div className="thankYouCard">
        <img
          className="logo"
          src="/junaak-logo.png"
          alt="Junaak — Quiet Comfort"
        />

        <p className="eyebrow">You’re on the early list</p>

        <h1>Thank you.</h1>

        <p className="thankYouCopy">
          You’ll hear from us soon with material notes, sample previews and
          occasional questions as Junaak takes shape.
        </p>

        <a className="backLink" href="/">
          Return to Junaak
        </a>
      </div>
    </main>
  );
}
