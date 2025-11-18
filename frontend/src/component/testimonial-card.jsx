export default function TestimonialCard({
  nama,
  kerja,
  bintang,
  komentar,
  link,
}) {
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
