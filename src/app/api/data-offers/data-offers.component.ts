import { Injectable, makeStateKey, TransferState } from '@angular/core';
import type { Offering } from '../../types/offers';

@Injectable({
  providedIn: 'root',
})
export class GetOfferingsService {
  readonly apiURL =
    'https://credenciamentodigital.getnet.com.br/server/v1/offerings?country=BR&channel=getnet_ecommerce';

  constructor(private transferState: TransferState) {}

  async getOfferings() {
    const offeringsKey = makeStateKey<Offering[]>('offerings');
    const offerings = this.transferState.get(offeringsKey, []);

    if (offerings.length) {
      return Promise.resolve(offerings);
    }

    try {
      const response = await fetch(this.apiURL);
      const data = await response.json();

      return data
        .filter((offering: Offering) => offering.campaign_code === '1-HLSIMAM')
        .map((offering: Offering) => ({
          ...offering,
          price: (offering.price / 100).toFixed(2).replace('.', ','),
        }));
    } catch (error) {
      console.error('Error fetching offerings:', error);
      return [];
    }
  }
}
