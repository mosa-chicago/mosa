// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://midwestopensourcealliance.org',
  integrations: [
    starlight({
      title: 'MOSA',
      description: 'Midwest Open Source Alliance — promoting education, support, and development of Drupal and open source software in the Midwest and beyond.',
      logo: {
        src: './src/assets/mosa-logo.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/mosa-chicago/mosa' },
      ],
      editLink: {
        baseUrl: 'https://github.com/mosa-chicago/mosa/edit/master/',
      },
      sidebar: [
        {
          label: 'About',
          items: [
            { label: 'About MOSA', link: '/about/' },
            { label: 'Board of Directors', link: '/board/' },
            { label: 'Bylaws', link: '/bylaws/' },
            { label: 'Code of Conduct', link: '/code-of-conduct/' },
          ],
        },
        {
          label: 'Programs',
          items: [
            {
              label: 'Sponsored Events & Communities',
              items: [
                { label: 'Overview', link: '/events/' },
                { label: 'Drupal 25th Anniversary Gala', link: '/events/gala-2026/' },
              ],
            },
          ],
        },
        {
          label: 'Meetings',
          items: [
            { label: 'Schedule', link: '/meetings/' },
            { label: 'Agendas', link: '/meetings/agendas/' },
            { label: 'Minutes', link: '/meetings/minutes/' },
          ],
        },
        {
          label: 'Support MOSA',
          items: [
            { label: 'Donate', link: '/donate/' },
            { label: 'Sponsor MOSA', link: '/sponsor/' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Handbook', link: '/handbook/' },
            { label: 'Contact', link: '/contact/' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
});
