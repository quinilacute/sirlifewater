export default function Cart() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <p className="mt-4 text-gray-600">
        Review the items you’ve added to your cart before proceeding to checkout.
      </p>

      <div className="mt-8 border-t border-gray-200 pt-4">
        <p>No items yet. Start shopping to fill your cart!</p>
      </div>
    </div>
  );
}
