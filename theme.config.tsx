import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><img src="https://raw.githubusercontent.com/nwn-rs/.github/main/profile/assets/logo/icon.svg" alt="Project Logo" width="24" height="24" /></span>,
  primaryHue: 29,
  project: {
    link: 'https://github.com/nwn-rs',
  },
  chat: {
    link: 'https://discord.gg/VChctxJCMM',
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  docsRepositoryBase: 'https://github.com/nwn-rs/web/blob/main/',
  footer: {
    text: 'nwn.rs',
  },
}

export default config
