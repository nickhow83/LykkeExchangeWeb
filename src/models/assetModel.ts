import {observable} from 'mobx';
import {AssetCategoryModel} from '.';

export class AssetModel {
  id: string = '';
  name: string = '';
  blockchainNetworkName: string = '';
  category!: AssetCategoryModel;
  accuracy: number = 0;
  iconUrl: string = '';
  @observable address: string = '';
  @observable addressBase: string = '';
  @observable addressExtension: string = '';

  isBase: boolean = false;

  constructor(asset: Partial<AssetModel> = {}) {
    Object.assign(this, asset);
  }
}

export default AssetModel;
