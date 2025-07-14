# 💳 Paystack Integration Demo – Next.js App

A modern full-stack payment integration demo using **Next.js**, **TypeScript**, and **Paystack API**. This project simulates a seamless checkout flow with payment verification, transaction history tracking, and a dynamic UI for success and error states.

Payment platform that implements at least 2 Paystack APIs for Assessment Purposes

## 📸 Demo

🔗 Live Demo: [https://paystack-integration-demo.vercel.app/](https://paystack-integration-demo.vercel.app/)

---

## 🚀 Features

- ✅ Initiate payments via Paystack inline modal
- 🔁 Payment verification via server-side API route
- 🧾 View all transactions (including successful, cancelled, and abandoned)
- 📦 Backend powered by API routes with secure Paystack secret key
- 📊 Transaction dashboard table for managing all payment records
- 🧠 Toast notifications for feedback
- 📱 Responsive and mobile-friendly design

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Paystack API](https://paystack.com/docs/api/)
- [Vercel](https://vercel.com/) (for deployment)

---

## 📁 Folder Structure
├── app/
│   ├── components/        # Reusable UI components
│   ├── layout/            # Layouts used across pages
│   ├── api/               # API routes (e.g., verify, transactions)
│   ├── success/           # Transaction success logic
│   └── transactions/      # Dashboard display of transactions
├── public/                # Static assets like images
├── .env.local             # Local environment config
├── README.md              # Project documentation



| Route                 | Method | Description                           |
| --------------------- | ------ | ------------------------------------- |
| `/api/transactions`   | GET    | Fetches list of Paystack transactions |
| `/api/verify?ref=xxx` | GET    | Verifies a specific transaction       |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root with the following:

```env
PAYSTACK_SECRET_KEY=your_paystack_secret_key
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key


## 🚧 Limitations

- **Transaction Status Handling**  
  While the app fetches and displays all transactions from Paystack—including `success`, `abandoned`, and `cancelled`—there is currently no additional logic for handling failed or incomplete transactions. Features like retries, alerts, or automated refunds are not implemented.

- **Static Environment Configs**  
  API keys and environment variables are set at build time. For security and flexibility, it's recommended to use runtime secrets management in production.

- **Minimal Error UI Feedback**  
  Error states (e.g., payment failures, API timeouts) are shown in basic toast or inline messages. There’s room to improve the UX with detailed modals or retry flows.

- **No Backend Persistence**  
  All transaction data is fetched in real-time from Paystack’s API. There’s no database layer or historical archiving within the app itself.


## 🤝 Contributing

Pull requests are welcome! If you’d like to contribute:

- Fork the repository.
- Create a new branch for your feature or fix.
- Commit your changes with clear messages.
- Open a pull request.

For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

Feel free to use, modify, and distribute it as permitted under the license terms.


# Clone the repository
git clone https://github.com/Muees99/paystack-integration-demo.git

# Navigate into the project directory
cd paystack-integration-demo

# Install dependencies
npm install

# Start the development server
npm run dev



