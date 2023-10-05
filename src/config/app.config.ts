interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['End Customer'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Admin', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage bookings', 'Create reviews', 'Report issues', 'View cars and companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b1d52017-aa05-4812-a9e4-97c0be2ed1ea',
};
