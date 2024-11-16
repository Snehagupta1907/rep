import { getPublicClient } from "@wagmi/core";
import { providers } from "ethers";

/**
 * Converts a viem Public Client to an ethers.js Provider.
 * 
 * @param {Object} publicClient - The Public Client object from viem.
 * @returns {providers.Provider} - An ethers.js Provider.
 */
export function publicClientToProvider(publicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };

  if (transport.type === "fallback") {
    return new providers.FallbackProvider(
      transport.transports.map(({ value }) => new providers.JsonRpcProvider(value?.url, network))
    );
  }

  return new providers.JsonRpcProvider(transport.url, network);
}

/**
 * Action to convert a viem Public Client to an ethers.js Provider.
 * 
 * @param {Object} [options] - Optional parameters.
 * @param {number} [options.chainId] - The chain ID to use for getting the public client.
 * @returns {providers.Provider} - An ethers.js Provider.
 */
export function getEthersProvider({ chainId } = {}) {
  const publicClient = getPublicClient({ chainId });
  return publicClientToProvider(publicClient);
}
