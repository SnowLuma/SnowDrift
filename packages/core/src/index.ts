export type SnowDriftCapability =
  | "streaming"
  | "tools"
  | "reasoning"
  | "json-mode"
  | "vision";

export interface ProviderCapabilitySet {
  streaming: boolean;
  tools: boolean;
  reasoning: boolean;
  jsonMode: boolean;
  vision: boolean;
}

export interface ProviderDescriptor {
  id: string;
  label: string;
  dialect: string;
  baseUrl?: string;
  capabilities: ProviderCapabilitySet;
}

export interface AdapterRequest {
  provider: string;
  model: string;
  stream?: boolean;
  input: Record<string, unknown>;
}

export interface AdapterResponse {
  model: string;
  output: unknown;
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  };
}

export interface SnowDriftAdapter {
  readonly provider: ProviderDescriptor;
  invoke(request: AdapterRequest): Promise<AdapterResponse>;
}

const defaultCapabilities: ProviderCapabilitySet = {
  streaming: false,
  tools: false,
  reasoning: false,
  jsonMode: false,
  vision: false
};

export function createProviderDescriptor(
  descriptor: Omit<ProviderDescriptor, "capabilities"> & {
    capabilities?: Partial<ProviderCapabilitySet>;
  }
): ProviderDescriptor {
  return {
    ...descriptor,
    capabilities: {
      ...defaultCapabilities,
      ...descriptor.capabilities
    }
  };
}

export function listCapabilityFlags(
  capabilities: ProviderCapabilitySet
): SnowDriftCapability[] {
  const flags: SnowDriftCapability[] = [];

  if (capabilities.streaming) {
    flags.push("streaming");
  }

  if (capabilities.tools) {
    flags.push("tools");
  }

  if (capabilities.reasoning) {
    flags.push("reasoning");
  }

  if (capabilities.jsonMode) {
    flags.push("json-mode");
  }

  if (capabilities.vision) {
    flags.push("vision");
  }

  return flags;
}