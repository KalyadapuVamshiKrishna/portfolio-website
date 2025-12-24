const Highlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Kisan Sakhi",
      description: "Built an AI-powered assistant to support Indian farmers with real-time crop advice, weather updates, and logistics help.",
      tech: ["React", "OpenAI API", "Tailwind", "Leaflet.js"],
    },
    {
      id: 2,
      title: "Home Safety Advisor",
      description: "Designed a smart dashboard for homeowners to identify risks and get AI-driven safety recommendations.",
      tech: ["MERN Stack", "TensorFlow", "Flask API"],
    },
    {
      id: 3,
      title: "Metro Navigation App (Prototype)",
      description: "Prototyped a solution for simplifying navigation in crowded metro stations like Parade Grounds using location-based guidance.",
      tech: ["React", "Mapbox", "Geolocation API"],
    },
  ];

  return (
    <section className="c-space my-20">
      <h3 className="head-text">What I've Been Working On</h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {highlights.map((item) => (
          <div
            key={`highlight-${item.id}`}
            className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-4 hover:shadow-lg transition"
          >
            <h4 className="text-white-800 font-semibold text-lg">{item.title}</h4>
            <p className="text-white-600 text-sm">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-white/10 text-white-500 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
