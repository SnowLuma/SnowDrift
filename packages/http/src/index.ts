import {
  listCapabilityFlags,
  type ProviderDescriptor,
  type SnowDriftAdapter
} from "@snowdrift/core";

export interface ProviderSummary {
  id: string;
  label: string;
  dialect: string;
  capabilities: string[];
}

export interface HttpRuntimeOptions {
  name?: string;
  adapters?: SnowDriftAdapter[];
}

export interface HttpRuntime {
  readonly name: string;
  listProviders(): ProviderSummary[];
  register(adapter: SnowDriftAdapter): void;
  resolve(providerId: string): SnowDriftAdapter;
  health(): {
    status: "ok";
    providers: number;
  };
}

function toSummary(provider: ProviderDescriptor): ProviderSummary {
  return {
    id: provider.id,
    label: provider.label,
    dialect: provider.dialect,
    capabilities: listCapabilityFlags(provider.capabilities)
  };
}

export function createHttpRuntime(
  options: HttpRuntimeOptions = {}
): HttpRuntime {
  const name = options.name ?? "snowdrift-http";
  const adapters = new Map<string, SnowDriftAdapter>();

  const register = (adapter: SnowDriftAdapter): void => {
    const providerId = adapter.provider.id;

    if (adapters.has(providerId)) {
      throw new Error(`Provider \"${providerId}\" has already been registered.`);
    }

    adapters.set(providerId, adapter);
  };

  for (const adapter of options.adapters ?? []) {
    register(adapter);
  }

  return {
    name,
    listProviders() {
      return Array.from(adapters.values(), (adapter) => toSummary(adapter.provider));
    },
    register,
    resolve(providerId: string) {
      const adapter = adapters.get(providerId);

      if (!adapter) {
        throw new Error(`Provider \"${providerId}\" is not registered.`);
      }

      return adapter;
    },
    health() {
      return {
        status: "ok",
        providers: adapters.size
      };
    }
  };
}