// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const logoPath = './src/assets/logo_128_128.svg'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Untitled 服务器文档站',
			logo: {
				src: logoPath,
			},
            // https://starlight.astro.build/zh-cn/reference/configuration/#favicon
            // 实际上，不放在 public/ 下，而直接使用一般路径也是可以的
			favicon: logoPath,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DingerBtn/UntitledServerRule' }],
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
