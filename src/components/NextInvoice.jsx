import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const NextInvoice = () => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">Próximo Recibo</h3>
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
      <div className="flex items-center">
        <CalendarDaysIcon className="h-10 w-10 text-gray-400 mr-3" />
        <div>
          <p className="font-medium text-gray-700">Fecha</p>
          <p className="text-sm text-gray-500">15 de Noviembre</p>
        </div>
      </div>
      <p className="font-semibold text-gray-700">$1,500</p>
    </div>
  </div>
);

export default NextInvoice;
