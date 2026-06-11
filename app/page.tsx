import Image from "next/image";

const contactEmail = "quarthayudha@gmail.com";
const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/quartha-yudha-60749b310/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/artthhaaa_/",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6289526766888",
  },
];

const services = [
  {
    title: "UI/UX Design",
    text: "Merancang tampilan aplikasi dan website mulai dari wireframe, user flow, prototype, hingga visual design menggunakan Figma.",
  },
  {
    title: "Data Analysis",
    text: "Mengolah dataset, melakukan data cleaning, eksplorasi data, dan membuat visualisasi sederhana untuk menghasilkan insight yang mudah dipahami.",
  },
  {
    title: "Web Development",
    text: "Membangun website sederhana dan responsif menggunakan Laravel, Next.js, serta teknologi frontend modern.",
  },
];

const tools = [
  { name: "Intermediate", score: "Figma", image: "/Figma.jpg" },
  { name: "Basic To Intermediate", score: "Python", image: "/python.jpg" },
  { name: "Basic", score: "NextJs", image: "/nextjs.jpg" },
  { name: "Basic To Intermediate", score: "Collab", image: "/collab.jpg" },
  { name: "Baic", score: "Laravel", image: "/laravel.jpg" },
  { name: "Basic", score: "MySql", image: "/Mysql.jpg" },
];

const projects = [
  {
    title: "Manajamen Rumah Kopi Banjar Sengon",
    type: "Web App",
    tags: ["Laravel", "CRUD"],
    image: "/LogoRKB.png",
    link: "https://github.com/arthhaaa/PPLLONBLAACK.git",
    text: "Personal website untuk menampilkan profil, layanan, dan latest project dengan nuansa dark green yang hangat.",
  },
  {
    title: "Klustering Terkait Putus Sekolah di Indonesia",
    type: "Data Analysis",
    tags: ["Python", "Pandas","Kaggle"],
    image: "/DataAnalys.jpg",
    link: "https://drive.google.com/file/d/1J8ojMGe28ufQC2ol28VW6huH7U4jmXTQ/view?usp=sharing",
    text: "DISPARITAS PENDIDIKAN INDONESIA PENERAPAN K-MEANS CLUSTERING UNTUK IDENTIFIKASI PROVINSI BERESIKO PUTUS SEKOLAH DAN KEKURANGAN GURU",
  },
  {
    title: "Butir Mas",
    type: "Web App",
    tags: ["Laravel", "CRUD"],
    image: "/Egg.jpg",
    link: "https://github.com/arthhaaa/IKIENDOGG.git",
    text: "Dashboard sederhana untuk mengelola data, autentikasi dasar, dan tampilan tabel yang nyaman untuk dipakai harian.",
  },
  {
    title: "SIMBA (Sistem Informasi Bunga Anggrek",
    type: "Web Design",
    tags: ["Figma", "Prototype"],
    image: "/Figma.jpg",
    link: "https://www.figma.com/design/Mbs4actbUv4xb4dYA1CVgj/SIMBA?node-id=0-1&t=v0jHwx4kJrCkqW9G-1",
    text: "SIMBA : Sistem Informasi Ecommerce Anggrek dan Media Tanam PAI Banyuwangi",
  },
];

const journey = [
  {
    title: "Learning & Experience",
    items: [
      ["2024 - Now", "Sistem Informasi Student", "Universitas Jember"],
      ["2024 - Now", "Data Analysis Practice", "Mengolah dataset dari Kaggle menggunakan Python, Pandas, dan Google Colab untuk latihan data cleaning, eksplorasi data, dan visualisasi sederhana."],
      ["2024 - Now", "Web Development Practice", "Membangun project website sederhana menggunakan Laravel, Next.js, dan konsep frontend modern."],
      ["2024 - Now", "UI/UX Design Practice", "Membuat desain interface, layout website, wireframe, dan prototype menggunakan Figma."],
    ],
  },
  {
    title: "Organization Experience",
    items: [
      ["2025", "KPUM | Divisi Hukum", "Melakukan pengecekan dokumen, memastikan kelengkapan berkas, serta membantu mengawasi penerapan aturan dalam kegiatan KPUM tingkat fakultas."],
      ["2025", "PPMB | Konsumsi & Sponsorship", "Membantu mencari sponsorship, menjalin komunikasi dengan pihak eksternal, serta mendukung kebutuhan konsumsi dan pendanaan kegiatan."],
      ["2025", "IT Convert | Divisi Acara", "Menyusun alur kegiatan untuk event, perlombaan, dan webinar, serta berpengalaman menjadi MC pada acara Awarding ITC."],
      ["2024", "Wiskomulia | Environmental Education Volunteer", "Memberikan edukasi kepada siswa SMP mengenai pentingnya menjaga kesehatan bumi dan meningkatkan kesadaran lingkungan melalui kegiatan sosial edukatif."],
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF4E1] text-[#1A312C]">
      <header className="sticky top-0 z-30 border-b border-[#89D7B7]/25 bg-[#1A312C]/95 px-5 py-4 text-[#FFF4E1] backdrop-blur md:px-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="grid size-9 place-items-center rounded-full bg-[#89D7B7] text-[#1A312C]">
              A
            </span>
            <span>Portfolio</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-[#FFF4E1]/80 md:flex">
            <a className="hover:text-[#89D7B7]" href="#services">
              Services
            </a>
            <a className="hover:text-[#89D7B7]" href="#tools">
              Tools
            </a>
            <a className="hover:text-[#89D7B7]" href="#projects">
              Projects
            </a>
            <a className="hover:text-[#89D7B7]" href="#journey">
              Journey
            </a>
          </div>

          <a
            className="rounded-full bg-[#FFF4E1] px-5 py-2 text-sm font-semibold text-[#1A312C] transition hover:bg-[#89D7B7]"
            href={contactHref}
            target="_blank"
            rel="noreferrer"
          >
            Contact Me
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="relative overflow-hidden bg-[#1A312C] px-5 pb-16 pt-12 text-[#FFF4E1] md:px-10 md:pb-24 md:pt-16"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#89D7B7]/40 px-4 py-2 text-sm text-[#89D7B7]">
              Hello there, welcome to my creative space.
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-normal md:text-7xl">
              Designing Interfaces, Analyzing Data, Building Webs
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#FFF4E1]/75 md:text-lg">
             Saya adalah mahasiswa Sistem Informasi yang memiliki ketertarikan pada UI/UX Design,
             Data Analysis, dan Web Development.
             Saya terbiasa menggunakan Figma, Python, Pandas, Google Colab, Laravel, 
             dan Next.js untuk membuat desain, mengolah data, serta membangun website sederhana.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#89D7B7] px-6 py-3 text-center font-semibold text-[#1A312C] transition hover:bg-[#FFF4E1]"
                href="#projects"
              >
                View My Portfolio
              </a>
              <a
                className="rounded-full border border-[#89D7B7]/60 px-6 py-3 text-center font-semibold text-[#FFF4E1] transition hover:border-[#FFF4E1] hover:bg-[#FFF4E1] hover:text-[#1A312C]"
                href="https://github.com/arthhaaa"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[430px]">
            <div className="absolute inset-8 rounded-full bg-[#89D7B7]" />
            <div className="absolute inset-0 rounded-full border-[18px] border-[#428475]" />
            <div className="absolute inset-10 overflow-hidden rounded-full bg-[#FFF4E1] shadow-2xl">
              <Image
                src="/Profile.jpeg"
                alt="Foto profil pemilik portfolio"
                fill
                className="object-cover object-[50%_32%]"
                priority
                sizes="(min-width: 768px) 430px, 90vw"
              />
            </div>
            <div className="absolute left-[27%] top-[44%] rounded-full bg-[#1A312C] px-4 py-2 text-xs font-bold text-[#89D7B7]">
              Designer
            </div>
            <div className="absolute right-[4%] top-[52%] rounded-full bg-[#FFF4E1] px-4 py-2 text-xs font-bold text-[#1A312C] shadow-lg">
              Data Analyst
            </div>
            <div className="absolute bottom-[18%] left-[8%] rounded-full bg-[#428475] px-4 py-2 text-xs font-bold text-white shadow-lg">
              Web Developer
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-[#89D7B7] py-4 text-[#1A312C]">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-2 px-5 text-sm font-black uppercase tracking-normal">
          <span>App Design</span>
          <span>Data Insight</span>
          <span>Website Design</span>
          <span>Dashboard</span>
          <span>Laravel</span>
          <span>Next.js</span>
        </div>
      </div>

      <section id="services" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-[#428475]">Services</p>
              <h2 className="mt-2 text-4xl font-black">
                What I can <span className="text-[#428475]">provide</span>
              </h2>
            </div>
            <a
              className="w-fit rounded-full bg-[#1A312C] px-5 py-3 text-sm font-semibold text-[#FFF4E1] transition hover:bg-[#428475]"
              href="#contact"
            >
              Start a Project
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-[#1A312C]/5 transition hover:-translate-y-1 hover:shadow-xl"
                key={service.title}
              >
                <div className="mb-8 grid size-12 place-items-center rounded-full bg-[#89D7B7]/35 font-black text-[#428475]">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#1A312C]/70">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A312C] px-5 py-20 text-[#FFF4E1] md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1fr] md:items-center">
          <div className="relative aspect-square max-w-[360px]">
            <div className="absolute inset-0 rounded-full bg-[#89D7B7]" />
            <div className="absolute inset-8 rounded-full bg-[#428475]" />
            <div className="absolute inset-14 overflow-hidden rounded-full bg-[#FFF4E1] ring-8 ring-[#FFF4E1]">
              <Image
                src="/Profile.jpeg"
                alt="Foto profil untuk bagian about"
                fill
                className="object-cover object-[50%_28%]"
                sizes="(min-width: 768px) 360px, 80vw"
              />
            </div>
            <div className="absolute bottom-8 left-8 rounded-full bg-[#FFF4E1] px-4 py-2 text-sm font-black text-[#1A312C]">
              UI/UX
            </div>
            <div className="absolute right-0 top-16 rounded-full bg-[#1A312C] px-4 py-2 text-sm font-black text-[#89D7B7] ring-1 ring-[#89D7B7]">
              Python
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#89D7B7]">About Me</p>
            <h2 className="mt-2 text-4xl font-black">
              Designer with an analyst mindset.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#FFF4E1]/75">
              Saya adalah mahasiswa Sistem Informasi yang tertarik pada desain antarmuka, 
              analisis data, dan pengembangan website. 
              Saya suka menghubungkan desain yang nyaman digunakan dengan data yang dapat membantu pengambilan keputusan. 
              Saat ini, saya terus mengembangkan kemampuan melalui project pribadi menggunakan Figma, Python, Pandas, Laravel, dan Next.js.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <div>
                <strong className="text-3xl text-[#89D7B7]">5+</strong>
                <p className="mt-1 text-sm text-[#FFF4E1]/70">Practice Projects</p>
              </div>
              <div>
                <strong className="text-3xl text-[#89D7B7]">6</strong>
                <p className="mt-1 text-sm text-[#FFF4E1]/70">Main Tools</p>
              </div>
              <div>
                <strong className="text-3xl text-[#89D7B7]">3</strong>
                <p className="mt-1 text-sm text-[#FFF4E1]/70">Focus Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold text-[#428475]">My Favorite Tools</p>
          <h2 className="mt-2 text-4xl font-black">
            Exploring the tools behind my work
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-6">
            {tools.map((tool) => (
              <div className="rounded-lg bg-white p-5 shadow-sm" key={tool.score}>
                <div className="relative mx-auto size-16 overflow-hidden rounded-full bg-[#FFF4E1] ring-1 ring-[#89D7B7]/50">
                  <Image
                    src={tool.image}
                    alt={`${tool.name} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="64px"
                  />
                </div>
                <p className="mt-4 text-lg font-black text-[#428475]">
                  {tool.score}
                </p>
                <p className="mt-1 text-sm font-semibold">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-5 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-[#428475]">My Portfolio</p>
              <h2 className="mt-2 text-4xl font-black">
                My latest <span className="text-[#428475]">projects</span>
              </h2>
            </div>
            <a
              className="w-fit rounded-full bg-[#1A312C] px-5 py-3 text-sm font-semibold text-[#FFF4E1] transition hover:bg-[#428475]"
              href="https://github.com/arthhaaa"
              target="_blank"
              rel="noreferrer"
            >
              View All Projects
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                className="group overflow-hidden rounded-lg bg-[#FFF4E1] shadow-sm ring-1 ring-[#1A312C]/5"
                key={project.title}
              >
                <div className="grid aspect-[16/10] place-items-center bg-[#428475] p-8">
                  <div className="relative h-full w-full overflow-hidden rounded-lg bg-white shadow-xl transition group-hover:-rotate-1">
                    <Image
                      src={project.image}
                      alt={`Preview ${project.title}`}
                      fill
                      className="object-contain p-8"
                      sizes="(min-width: 768px) 540px, 90vw"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#89D7B7] px-3 py-1 text-xs font-black text-[#1A312C]">
                      {project.type}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        className="rounded-full bg-[#1A312C] px-3 py-1 text-xs font-black text-[#FFF4E1]"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-black">{project.title}</h3>
                  <p className="mt-3 leading-7 text-[#1A312C]/70">
                    {project.text}
                  </p>
                  <a
                    className="mt-5 inline-flex font-black text-[#428475] hover:text-[#1A312C]"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold text-[#428475]">Education & Work</p>
            <h2 className="mt-2 text-4xl font-black">
              My academic and professional journey
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {journey.map((column) => (
              <article className="rounded-lg bg-white p-7 shadow-sm" key={column.title}>
                <h3 className="mb-6 text-2xl font-black">{column.title}</h3>
                <div className="space-y-6">
                  {column.items.map(([year, title, text]) => (
                    <div className="border-l-2 border-[#89D7B7] pl-5" key={title}>
                      <p className="text-sm font-semibold text-[#428475]">{year}</p>
                      <h4 className="mt-1 font-black">{title}</h4>
                      <p className="mt-1 text-sm text-[#1A312C]/65">{text}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1A312C] px-5 py-16 text-[#FFF4E1] md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-[#89D7B7]">Let us collaborate</p>
            <h2 className="mt-2 max-w-2xl text-4xl font-black">
              Ready to turn your idea into a neat digital project?
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="w-fit rounded-full bg-[#89D7B7] px-7 py-4 text-center font-black text-[#1A312C] transition hover:bg-[#FFF4E1]"
                href={contactHref}
                target="_blank"
                rel="noreferrer"
              >
                Send Email
              </a>
              <a
                className="w-fit rounded-full border border-[#89D7B7] px-7 py-4 text-center font-black text-[#89D7B7] transition hover:bg-[#89D7B7] hover:text-[#1A312C]"
                href={socialLinks.find((link) => link.name === "WhatsApp")?.href}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex gap-5 text-sm font-semibold text-[#FFF4E1]/75">
              {socialLinks
                .filter((link) => link.name !== "WhatsApp")
                .map((link) => (
                  <a
                    className="transition hover:text-[#89D7B7]"
                    href={link.href}
                    key={link.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
