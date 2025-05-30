import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'Particuliers',
      href: getPermalink('/particuliers'),
    },
    {
      text: 'Entreprises',
      href: getPermalink('/entreprises'),
    },
    {
      text: 'Témoignages',
      href: getPermalink('/temoignages'),
    },
    {
      text: 'À Propos',
      href: getPermalink('/a-propos'),
    },
    {
      text: 'Test Strapi',
      href: getPermalink('/test-strapi'),
    },
  ],
  actions: [{ 
    text: 'Contact', 
    href: getPermalink('/contact'),
    variant: 'primary',
  }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Coaching Particuliers', href: getPermalink('/particuliers') },
        { text: 'Formation Entreprises', href: getPermalink('/entreprises') },
        { text: 'Méthode Cercle Vertueux', href: getPermalink('/ma-methode') },
        { text: 'Témoignages', href: getPermalink('/temoignages') },
      ],
    },
    {
      title: 'À Propos',
      links: [
        { text: 'Mon Parcours', href: getPermalink('/a-propos') },
        { text: 'Ma Méthode', href: getPermalink('/ma-methode') },
        { text: 'Mes Références', href: getPermalink('/references') },
        { text: 'Presse & Médias', href: getPermalink('/presse') },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Workbook Gratuit', href: getPermalink('/workbook') },
        { text: 'Conseils Prise de Parole', href: getPermalink('/conseils') },
        { text: 'FAQ', href: getPermalink('/faq') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Réserver une séance', href: getPermalink('/contact') },
        { text: 'Demande Entreprise', href: getPermalink('/contact-entreprise') },
        { text: 'Presse & Médias', href: getPermalink('/presse') },
        { text: 'Partenariats', href: getPermalink('/partenariats') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mentions Légales', href: getPermalink('/mentions-legales') },
    { text: 'Politique de Confidentialité', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <span class="text-sm text-muted">
      © ${new Date().getFullYear()} Laure Cohen Coaching. Tous droits réservés. 
      <br class="md:hidden" />
      Coach certifiée en prise de parole - Paris
    </span>
  `,
};
