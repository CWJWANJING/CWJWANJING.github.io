import * as React from "react"

export default function WebFooter() {
  const socialLinks = [
    {
      name: `Instagram`,
      url: `https://www.instagram.com/miaonaidoodles/`
    },
    { name: `TikTok`, url: `https://www.tiktok.com/@miaonaidoodles` },
    {
      name: `LinkedIn`,
      url: `https://www.linkedin.com/in/wanjingchen/`,
    },
    {
      name: `Github`,
      url: `https://github.com/CWJWANJING`,
    },
  ]
  return (
    <footer className="web-footer" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
      <div style={{ marginBottom: '0.5rem', color: '#3346ae', fontWeight: 600 }}>@Wanjing Chen/@miaonaidoodles</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {socialLinks.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#4881ea', textDecoration: 'none' }}>
              {s.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}