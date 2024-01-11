import { createRouter } from '@kearos/plugin-hello-backend';

import {
  BackendPluginInterface,
  BackendPluginSurface,
  PluginEnvironment,
} from '@vmware-tanzu/core-backend';
import { Router } from 'express';

const createPlugin = () => {
return async (env: PluginEnvironment): Promise<Router> => {
    return await createRouter({
    logger: env.logger,
    });
};
};

export const HelloBackendPlugin: BackendPluginInterface =
  () => surfaces =>
    surfaces.applyTo(BackendPluginSurface, backendPluginSurface => {
    backendPluginSurface.addPlugin({
        name: 'hello',
        pluginFn: createPlugin(),
    });
    });