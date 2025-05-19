export function Footer() {
  return (
    <footer className="mt-12 bg-blue-950 text-white py-8 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-2">
          Github:{' '}
          <a
            href="https://github.com/vitingg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Vitingg
          </a>
        </p>
        <p className="text-lg mb-2">
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/victorgdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Victorgdeveloper
          </a>
        </p>
        <p className="text-lg mb-2">Contato: (xx) xxxx-xxxx</p>
        <p className="text-lg">E-mail: victor@gmail.com</p>
      </div>
    </footer>
  );
}
