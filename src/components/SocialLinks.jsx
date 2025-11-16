const links = [
  { id: 1, icon: 'uil uil-instagram', url: 'https://www.instagram.com/', color: '#0D314C' },
  { id: 2, icon: 'uil uil-twitter', url: 'https://twitter.com/', color: '#0D314C' },
  { id: 4, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/', color: '#0D314C' },
  { id: 5, icon: 'uil uil-linkedin-alt', url: 'https://www.linkedin.com/', color: '#0D314C' },
];

const SocialLinks = ({ className = 'nav social mt-4' }) => {
  return (
    <nav className={className} aria-label="Social media links" style={{ display: 'flex', gap: '0.25rem' }}>
      {links.map(({ id, icon, url, color }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${icon.split(' ').pop().replace('uil-', '')} page`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '0.35rem', // slightly smaller padding
            width: '38px',       // slightly smaller width
            height: '38px',      // slightly smaller height
            textDecoration: 'none',
          }}
        >
          <i
            className={`${icon} fs-26`}
            style={{ color: color, fontSize: '1.5rem', lineHeight: 0 }}
          />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
