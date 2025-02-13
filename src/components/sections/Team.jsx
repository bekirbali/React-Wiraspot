import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: "CEO & Kurucu",
      image: "/images/team/pp.jpg",
    },
    {
      name: "Ayşe Kaya",
      position: "Teknoloji Direktörü",
      image: "/images/team/pp.jpg",
    },
    {
      name: "Mehmet Demir",
      position: "Ürün Müdürü",
      image: "/images/team/pp.jpg",
    },
    {
      name: "Zeynep Şahin",
      position: "Müşteri İlişkileri Müdürü",
      image: "/images/team/pp.jpg",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 bg-primary-dark border-b border-primary-500"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Ekibimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <div className="w-48 h-48 rounded-full mx-auto overflow-hidden bg-primary-light">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x200";
                    }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-primary-200">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
