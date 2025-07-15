export interface PaystackPopType {
  setup(options: {
    key: string | undefined;
    email: string;
    amount: number;
    currency: string;
    callback: (response: { reference: string }) => void;
    onClose: () => void;
  }): { openIframe: () => void };
}

declare global {
  interface Window {
    PaystackPop: PaystackPopType;
  }
}

type Props = {
  data: {
    customer: { email: string };
    amount: number;
    reference: string;
    status: string;
    paid_at: string;
  };
};

type Transaction = {
  id: number;
  reference: string;
  amount: number;
  status: string;
  customer: { email: string };
  paid_at: string;
};

// interface TransactionData {
//   customer: { email: string };
//   amount: number;
//   reference: string;
//   status: string;
//   paid_at: string;
//   [key: string]: unknown;
// }

type PaystackSetupOptions = {
  key: string | undefined;
  email: string;
  amount: number;
  currency: string;
  reference: string;
  callback: (response: { reference: string }) => void;
  onClose: () => void;
};
