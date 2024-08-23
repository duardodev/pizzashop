import { SocialMediaLinks } from './social-media-links';

export function Footer() {
  return (
    <footer className="h-auto w-full bg-red/95">
      <div className="h-auto max-w-[1120px] mx-auto px-5 py-6 flex items-center justify-center min-[586px]:justify-between flex-wrap gap-x-16 gap-y-4">
        <p className="text-center text-white">© 2023 PizzaShop. Todos os direitos reservados.</p>
        <SocialMediaLinks alternative={true} />
      </div>
    </footer>
  );
}
