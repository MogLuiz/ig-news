/* eslint-disable @next/next/no-img-element */
export const Header: React.FC = () => {
  return (
    <header>
      <div>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="#">Home</a>
          <a href="#">Posts</a>
        </nav>
      </div>
    </header>
  );
};
