import { XCircleIcon } from '@heroicons/react/24/outline';

const PaymentStatus = () => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">Estado del Pago</h3>
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
      <div className="flex items-center">
        <XCircleIcon className="h-10 w-10 text-gray-400 mr-3" />
        <div>
          <p className="font-medium text-gray-700">Pago del mes actual</p>
          <p className="text-sm text-blue-500">Pago Pendiente</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <XCircleIcon className="h-6 w-6" />
      </button>
    </div>
  </div>
);

export default PaymentStatus;
