# BetterGov Hall of Fame

A dedicated platform to recognize security researchers who have responsibly disclosed vulnerabilities in BetterGov's infrastructure. This site serves as both a security policy hub and a public acknowledgment of our security contributors.

## Features

- **Security Policy**: Comprehensive guidelines for:
  - Vulnerability reporting process
  - Scope of security testing
  - Responsible disclosure guidelines
  - Legal safe harbor provisions

- **Hall of Fame**: Recognition of security researchers who have helped improve BetterGov's security through responsible vulnerability disclosure.

## Tech Stack

- Next.js 14
- React
- Tailwind CSS
- TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/fr4nc1stein/bettergov-halloffame.git
cd bettergov-halloffame
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── page.tsx              # Security Policy (Home page)
├── hall-of-fame/        # Hall of Fame page
│   └── page.tsx
└── layout.tsx           # Root layout
```

## Contributing

If you have reported a vulnerability and would like to be added to the Hall of Fame, please ensure your disclosure has been validated by our security team first.

## License

This project is part of BetterGov's commitment to transparency and security. All content is public domain unless otherwise specified.

## Contact

For security-related issues, please email [security@bettergov.ph](mailto:security@bettergov.ph).
