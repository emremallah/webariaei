import { Phone } from 'lucide-react'; 

export default function CallButton() {
  return (
    <a
      href="tel:+989123456789" 
      className="fixed bottom-6 right-6 z-50 bg-cyan-400 hover:bg-cyan-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      title="تماس با ما"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
