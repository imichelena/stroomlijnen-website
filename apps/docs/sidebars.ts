import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Aan de slag',
      items: [
        'getting-started/intro',
        'getting-started/first-session',
        'getting-started/rfid-cards',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Energie en vermogen',
      items: [
        'energie/netcongestie',
        'energie/ems',
        'energie/ess',
        'energie/energiebudget',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Plug & Charge',
      items: [
        'plug-and-charge/what-is-pnc',
        'plug-and-charge/how-it-works',
        'plug-and-charge/compatible-vehicles',
        'plug-and-charge/setup-guide',
        'plug-and-charge/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Klantportaal',
      items: [
        'klantportaal/overview',
        'klantportaal/vehicles',
        'klantportaal/sessions',
        'klantportaal/tarieven',
        'klantportaal/invoicing',
        'klantportaal/team',
      ],
    },
    {
      type: 'category',
      label: 'Op locatie',
      items: [
        'locations/finding-charger',
        'locations/site-guide',
        'locations/etiquette',
      ],
    },
    {
      type: 'category',
      label: 'Chauffeurs',
      items: [
        'chauffeurs/elektrisch-touren',
      ],
    },
    {
      type: 'category',
      label: 'Voor locatie-eigenaren',
      items: [
        'pandeneigenaren/overzicht',
        'pandeneigenaren/verdienmodel',
        'pandeneigenaren/installatie',
        'pandeneigenaren/vermogensbeheer',
        'pandeneigenaren/cpo-kiezen',
        'pandeneigenaren/gemeente-verzekeraar',
        'pandeneigenaren/subsidies',
        'pandeneigenaren/ac-vs-dc-laders',
        'pandeneigenaren/cpo-roaming-uitgelegd',
        'pandeneigenaren/toekomst-transport',
      ],
    },
    {
      type: 'category',
      label: 'Technisch',
      items: [
        'security/architecture',
        'technical/ocpp-overview',
        'technical/iso-15118',
        'technical/network-requirements',
        'technical/integration',
      ],
    },
    {
      type: 'category',
      label: 'Over ons',
      items: [
        'about/elaadnl-partnership',
      ],
    },
    'faq',
  ],
};

export default sidebars;
