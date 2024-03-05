import { Code2 } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-white border-t">
        <div className="mx-auto py-10">
          <p className="text-center text-xs text-black">
            &copy; 2024 storeThree, Inc. Todos os direitos reservados.
          </p>
        {/* </div>
        <div className="mx-auto py-10"> */}
          <p className="text-center text-xs py-5">
            criado por: <a className="text-blue-500 hover:underline" href="https://rafael-lino-lobo.netlify.app/" target="_blank" rel="noopener noreferrer">Rafael Lino Lobo</a>
          </p>
        </div>
      </footer>
    )
  };
  
  export default Footer;
  