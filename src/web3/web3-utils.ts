import Web3 from 'web3';

export default class Web3Utils {
  static isValidAddress(address: string): boolean {
    return Web3.utils.isAddress(address);
  }
}
