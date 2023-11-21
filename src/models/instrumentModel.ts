import {AssetModel} from './index';

export class InstrumentModel {
  id: string = '';
  name: string = '';
  baseAsset!: AssetModel;
  quoteAsset!: AssetModel;
  accuracy: number = 0;
  invertedAccuracy: number = 0;
  bid: number = 0;
  ask: number = 0;

  constructor(asset: Partial<InstrumentModel>) {
    Object.assign(this, asset);
  }
}

export default InstrumentModel;
