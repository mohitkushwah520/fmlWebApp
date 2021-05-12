import { AddOn } from "./addon";
import { Variation } from './variation'

export class  Item {
  constructor(
    public itemid : string,
    public itemallowvariation: string,
    public itemrank: string,
    public item_categoryid: string,
    public item_ordertype: string,
    public item_packingcharges: string,
    public itemallowaddon: string,
    public itemaddonbasedon: string,
    public item_favorite: string,
    public ignore_taxes: string,
    public ignore_discounts: string,
    public in_stock: string,
    public variation: Variation,
    public addon: [AddOn],
    public itemname: string,
    public item_attributeid: string,
    public itemdescription: string,
    public minimumpreparationtime: string,
    public price: string,
    public active: string,
    public item_image_url: string,
    public item_tax: string,
    public item_quantity : number
  ) {}




}
