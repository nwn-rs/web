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
    text: (
      <span>
        MIT {new Date().getFullYear()} {' '}
        <a href="https://nextra.site" target="_blank">
          nwn.rs
          {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA &&
            `@${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA.toString().slice(0, 7)}`
          }
        </a>
      </span>
    )

    //text: 'nwn.rs' + (process.env.VERCEL_GIT_COMMIT_SHA ? '@' + process.env.VERCEL_GIT_COMMIT_SHA.toString().slice(0, 7) : ''),
  },
}

export default config
