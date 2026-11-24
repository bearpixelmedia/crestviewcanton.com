import { useSyncExternalStore } from 'react';

// Nothing to subscribe to: this hook only needs to know whether React is
// rendering the server snapshot or the client snapshot.
const subscribe = () => () => {};

/**
 * Returns `server` while rendering on the server and hydrating, then `client`
 * on the client. `useSyncExternalStore` does the same job as the old
 * setState-in-useEffect version without a cascading render after mount.
 */
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  return useSyncExternalStore<S | C>(
    subscribe,
    () => client,
    () => server,
  );
}
