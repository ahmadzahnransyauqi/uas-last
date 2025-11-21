function TestimonialCard({ nama, kerja, bintang, komentar, link }) {
  return (
    <div
      className="bg-[#444444] w-[370px] h-[250px] rounded-lg p-8 shadow overflow-hidden
                 flex flex-col justify-between"
    >
      <div className="flex flex-row gap-5">
        <img src={link} alt="foto profile" className="rounded-full w-20 h-20" />
        <div className="flex text-[20px] flex-col text-white">
          <h3>{nama}</h3>
          <h3 className="font-bold">{kerja}</h3>
          <h3>{"⭐".repeat(bintang)}</h3>
        </div>
      </div>

      <h3 className="text-white italic">{komentar}</h3>
    </div>
  );
}

export default function TestimonialList() {
  const cards = [
    {
      nama: "Alya Putri",
      kerja: "Graphic Designer",
      bintang: 4,
      komentar: "Tempatnya bersih dan nyaman. Kelas grupnya seru, recommended!",
      link: "https://i.pravatar.cc/150?img=12",
    },
    {
      nama: "Dimas Rinaldi",
      kerja: "Atlet Fitness",
      bintang: 5,
      komentar: "Fasilitas premium dan trainernya profesional. Gym terbaik!",
      link: "https://i.pravatar.cc/150?img=45",
    },
    {
      nama: "Clara A.",
      kerja: "Content Creator",
      bintang: 5,
      komentar: "Staff ramah dan suasananya cozy banget!",
      link: "https://i.pravatar.cc/150?img=22",
    },
    {
      nama: "Rudi Hartono",
      kerja: "Karyawan Swasta",
      bintang: 4,
      komentar: "Suka banget sama kelas Zumba-nya. Seru abis!",
      link: "https://i.pravatar.cc/150?img=17",
    },
  ];

  return (
    <div className="w-full overflow-hidden relative mt-8" style={{ height: "250px" }}>
      <div
        className="
          flex gap-5 absolute left-0 top-0
          animate-[slideX_20s_linear_infinite]
        "
        style={{ width: "200%" }}
      >
        <div className="flex gap-5">
          {cards.map((c, i) => (
            <TestimonialCard key={i} {...c} />
          ))}
        </div>

        <div className="flex gap-5">
          {cards.map((c, i) => (
            <TestimonialCard key={"dup" + i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
