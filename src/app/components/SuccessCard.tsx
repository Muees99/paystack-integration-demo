import { Props } from "../@types";

const SuccessCard = ({ data }: Props) => {
  return (
    // <div className="bg-white rounded p-6 shadow max-w-md w-full text-center">
    //   <h2 className="text-2xl font-bold text-green-600 mb-4">
    //     Payment Successful
    //   </h2>
    //   <p className="text-gray-600 mb-2">Email: {data.customer.email}</p>
    //   <p className="text-gray-600 mb-2">Amount: ₦{data.amount / 100}</p>
    //   <p className="text-gray-600 mb-2">Reference: {data.reference}</p>
    //   <p className="text-gray-600">
    //     Paid At: {new Date(data.paid_at).toLocaleString()}
    //   </p>
    // </div>
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        🎉 Payment Successful!
      </h2>
      <p className="text-gray-700 mb-2">
        ✅ <strong>Email:</strong> {data.customer.email}
      </p>
      <p className="text-gray-700 mb-2">
        💰 <strong>Amount:</strong> ₦{data.amount / 100}
      </p>
      <p className="text-gray-700 mb-2">
        🔖 <strong>Reference:</strong> {data.reference}
      </p>
      <p className="text-gray-700">
        🕒 <strong>Paid At:</strong> {new Date(data.paid_at).toLocaleString()}
      </p>
    </div>
  );
};

export default SuccessCard;
