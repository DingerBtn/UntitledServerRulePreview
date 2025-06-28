// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '规则（详细版）',
					autogenerate: { directory: '规则（详细版）' },
				},
				{
					label: '公示及教程',
					autogenerate: { directory: '公示及教程' },
				},
			],
		}),
	],
});
