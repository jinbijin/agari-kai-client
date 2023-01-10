import { EnvironmentProviders, ModuleWithProviders, Provider } from '@angular/core';

export function providersFromModule(module: ModuleWithProviders<unknown>): (Provider | EnvironmentProviders)[] {
  return module.providers ?? [];
}
