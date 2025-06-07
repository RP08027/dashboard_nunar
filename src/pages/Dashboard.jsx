import Header from "../components/Header";
import CurrentBalance from "../components/CurrentBalance";
import PaymentStatus from "../components/PaymentStatus";
import NextInvoice from "../components/NextInvoice";
import QuickActions from "../components/QuickActions";

const Dashboard = () => (
  <div className="min-h-screen bg-gray-50 text-gray-800">
    <Header />
    <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Resumen de Cliente</h2>
      <CurrentBalance />
      <PaymentStatus />
      <NextInvoice />
      <QuickActions />
    </main>
  </div>
);

export default Dashboard;
