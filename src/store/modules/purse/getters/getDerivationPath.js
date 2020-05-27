/**
 * Get Derivation Path
 *
 * Based on (BIP-44) derivation paths.
 * (m / purpose' / coin_type' / account' / change / address_index)
 * source: https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
 *
 * We create a unique derivation path for each and every session. This is
 * incremented using the (hardened) `account` path.
 *
 * The `address_index` allows for an unlimited number of addresses to be
 * generated for each session.
 */
const getDerivationPath = () => (_sessionId, _chainId, _acctIndex) => {
    /* Return (hardened) derivation path. */
    return `m/44'/145'/${_sessionId}'/${_chainId}/${_acctIndex}`
}

/* Export module. */
export default getDerivationPath
