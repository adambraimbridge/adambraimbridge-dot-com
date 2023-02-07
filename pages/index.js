import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Adam Braimbridge</title>
        <link target="_blank" rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Image
          src="/adam.png"
          height={400}
          width={400}
          alt="Adam Braimbridge"
        />

        <h1 className="title">
          Adam
          <Link target="_blank" href="/">
            Braimbridge
          </Link>
        </h1>

        <p className="description">
          I find your thoughts fascinating and wish to subscribe to your newsletter
        </p>

        <div className="grid">

          <a className="card box" target="_blank" href="https://www.linkedin.com/in/adambraimbridge">
            <h3>LinkedIn &rarr;</h3>
            <p>Let's action some synergies</p>
          </a>

          <a className="card box" target="_blank" href="https://github.com/adambraimbridge">
            <h3>GitHub &rarr;</h3>
            <p>Where I put stuff</p>
          </a>

          <a className="card box" target="_blank" href="https://twitter.com/uxtremist">
            <h3>Twitter &rarr;</h3>
            <p>Follow @uxtremist I guess</p>
          </a>

          <a className="card box" target="_blank" href="https://www.instagram.com/cosmic_unicorn_3000">
            <h3>Instagram &rarr;</h3>
            <p>I remember film cameras sigh</p>
          </a>

          <div className="box">
            <h3>adam@braimbridge.com</h3>
            <p>Electronic mail</p>
          </div>

          <div className="box" >
            <h3>🦄 heckless</h3>
            <p>Invite me to your Minecraft server</p>
          </div>
        </div>
      </main>

      <footer>
        🦶
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .box {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
        }

        .card {
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .no-border {
          border: none;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
