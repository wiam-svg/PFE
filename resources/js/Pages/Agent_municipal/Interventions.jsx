export default function InterventionsIndex({ stats }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Gestion des interventions</h1>
  
        {/* Badges simples */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <StatusBadge color="blue" title="En cours" count={stats.en_cours} />
          <StatusBadge color="green" title="Terminees" count={stats.terminees} />
          <StatusBadge color="red" title="Rejetées" count={stats.rejetes} />
          <StatusBadge color="purple" title="Fermées" count={stats.fermees} />
        </div>
      </div>
    );
  }
  
  function StatusBadge({ color, title, count }) {
    const colors = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      red: "bg-red-100 text-red-800",
      purple: "bg-purple-100 text-purple-800",
    };
  
    return (
      <div className={`p-4 rounded-lg ${colors[color]} text-center`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-3xl font-bold">{count}</p>
      </div>
    );
  }
  
  
