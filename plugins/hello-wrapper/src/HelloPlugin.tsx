import { EntityLayout } from '@backstage/plugin-catalog';

import { AppPluginInterface, AppRouteSurface, EntityPageSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import React from 'react';
import { Grid } from '@material-ui/core';

import { EntityHelloContent } from '@kearos/plugin-hello'

export const HelloPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      EntityPageSurface,
      (_appRouteSurface, entityPageSurface) => {
        entityPageSurface.servicePage.addTab(
          <EntityLayout.Route path="/hello" title="Hello">
                <Grid container spacing={3} alignItems="stretch">
                  <Grid item md={12}>
                    <EntityHelloContent />
                  </Grid>
                </Grid>
          </EntityLayout.Route>,
        );
      },
    );
  };