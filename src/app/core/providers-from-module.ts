import { ModuleWithProviders, Provider } from '@angular/core';

export function providersFromModule(module: ModuleWithProviders<unknown>): Provider[] {
  return module.providers ?? [];
}
