import Link from 'next/link';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/listings"><a>Listings</a></Link></li>
      <li><Link href="/login"><a>Login</a></Link></li>
    </ul>
    <style jsx>{`
      nav {
        margin: 20px 0;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        display: inline;
        margin-right: 10px;
      }
      a {
        text-decoration: none;
        color: blue;
      }
    `}</style>
  </nav>
);

export default Navigation;

