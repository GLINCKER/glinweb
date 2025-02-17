import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run glinweb-ui:serve',
        production: 'nx run glinweb-ui:preview',
      },
      ciWebServerCommand: 'nx run glinweb-ui:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
