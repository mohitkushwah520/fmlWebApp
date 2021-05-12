import { AddOn } from './addon'
export class Variation {
  constructor(
    public id: string,
    public variationid: string,
    public name: string,
    public groupname: string,
    public price: string,
    public active: string,
    public item_packingcharges: string,
    public variationrank: string,
    public addon: [AddOn],
    public variationallowaddon: string,
    public quantity: number
  ) {

  }
}
